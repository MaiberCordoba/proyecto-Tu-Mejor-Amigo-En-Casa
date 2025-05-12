import { PrismaMJC } from "../dbMJC.js";

export const listAdoptedPetsMJC = async (req, res) => {
    try {
      // Obtener los nombres para mapear IDs a nombres legibles
      const [categories, genders, races] = await Promise.all([
        PrismaMJC.categoriesMJC.findMany(),
        PrismaMJC.gendersMJC.findMany(),
        PrismaMJC.racesMJC.findMany()
      ]);
  
      // Agrupar por categoría, género y raza y contar
      const countGrouped = await PrismaMJC.petMJC.groupBy({
        by: ['fk_CategoriesMJC', 'fk_GendersMJC', 'fk_RacesMJC'],
        where: {
          estadoMJC: 'adoptado'
        },
        _count: {
          _all: true
        },
        orderBy: [
          { fk_CategoriesMJC: 'asc' },
          { fk_GendersMJC: 'asc' },
          { fk_RacesMJC: 'asc' }
        ]
      });
  
      // Mapas para convertir IDs en nombres
      const categoryMap = new Map(categories.map(c => [c.id_CategoriesMJC, c.name_CategoriesMJC]));
      const genderMap = new Map(genders.map(g => [g.id_GendersMJC, g.name_GendersMJC]));
      const raceMap = new Map(races.map(r => [r.id_RacesMJC, r.name_RacesMJC]));
  
      const resultado = countGrouped.map(item => ({
        categoria: categoryMap.get(item.fk_CategoriesMJC) || 'Desconocida',
        genero: genderMap.get(item.fk_GendersMJC) || 'Desconocido',
        raza: raceMap.get(item.fk_RacesMJC) || 'Desconocida',
        cantidad: item._count._all
      }));
  
      if (resultado.length > 0) {
        return res.status(200).json({ "conteo_mascotas_adoptadas": resultado });
      } else {
        return res.status(404).json({ message: "no hay mascotas adoptadas registradas" });
      }
  
    } catch (error) {
      console.error("Error al contar mascotas adoptadas:", error);
      return res.status(500).json({ message: "error al obtener el conteo de mascotas adoptadas" });
    }
  };
  
  

  export const listPetsByStatusMJC = async (req, res) => {
    try {
      const [groupedData, categories] = await Promise.all([
        PrismaMJC.petMJC.groupBy({
          by: ['estadoMJC', 'fk_CategoriesMJC'],
          _count: { _all: true },
          orderBy: [
            { fk_CategoriesMJC: 'asc' },
            { estadoMJC: 'asc' }
          ]
        }),
        PrismaMJC.categoriesMJC.findMany()
      ]);
  
      // Mapeamos ID de categoría a nombre
      const categoryMap = new Map(categories.map(cat => [cat.id_CategoriesMJC, cat.name_CategoriesMJC]));
  
      const resultado = groupedData.map(item => ({
        categoria: categoryMap.get(item.fk_CategoriesMJC) || 'Desconocida',
        estado: item.estadoMJC,
        cantidad: item._count._all
      }));
  
      if (resultado.length > 0) {
        return res.status(200).json({ conteo_por_estado_y_categoria: resultado });
      } else {
        return res.status(404).json({ message: "No se encontraron mascotas registradas." });
      }
  
    } catch (error) {
      console.error("Error al contar mascotas por estado y categoría:", error);
      return res.status(500).json({ message: "Error al obtener el conteo." });
    }
  };