import { PrismaMJC } from "../dbMJC.js";

export const listPetsMJC = async (resp, res) => {
  try {
    const consultaMJC = await PrismaMJC.petMJC.findMany({
      include: {
        races: {  
          select: {
            name_RacesMJC: true
          }
        }
      }
    });
    if (consultaMJC.length > 0) {
      return res.status(200).json({ "lista de mascotas": consultaMJC });
    } else {
      return res.status(404).json({ message: "no se encontraron mascotas" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "error" });
  }
};

export const PostPetsMJC = async (req, res) => {
  try {
    const { name, race, category, gender,lat,long } = req.body;

    // Verifica que se haya subido un archivo
    if (!req.file) {
      return res
        .status(400)
        .json({ message: "Se requiere una imagen de la mascota" });
    }

    const filePathMJC = `/pets-photos/${req.file.filename}`;

    const consultaMJC = await PrismaMJC.petMJC.create({
      data: {
        name_PetsMJC: name,
        fk_RacesMJC: parseInt(race),
        fk_CategoriesMJC: parseInt(category),
        fk_GendersMJC: parseInt(gender),
        latMJC: parseFloat(lat),
        longMJC: parseFloat(long),
        photoMJC: filePathMJC,
      },
    });
    if (consultaMJC) {
      return res.status(201).json({
        message: "nueva mascota registrada con exito",
        data: consultaMJC,
      });
    } else {
      return res
        .status(400)
        .json({ message: "no fue posible registrar nueva mascota" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "error" });
  }
};

export const patchPetsMJC = async (req, res) => {
  try {
    const { name, race, category, gender } = req.body;

    const consultaMJC = await PrismaMJC.petMJC.update({
      where: {
        id_PetMJC: parseInt(req.params.id),
      },
      data: {
        ...(name && { name_PetsMJC: name }),  
        ...(race && { fk_RacesMJC: parseInt(race) }),
        ...(category && { fk_CategoriesMJC: parseInt(category) }),
        ...(gender && { fk_GendersMJC: parseInt(gender) }),
        ...(req.file && { photoMJC: `/pets-photos/${req.file.filename}` }),
      },
    });
    if (consultaMJC) {
      return res
        .status(200)
        .json({ message: "editado con exito", data: consultaMJC });
    } else {
      return res.status(400).json({ message: "no fue posible editar" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "error" });
  }
};

export const deletePetsMJC = async (req, res) => {
  try {
    const consultaMJC = await PrismaMJC.petMJC.delete({
      where: {
        id_PetMJC: parseInt(req.params.id),
      },
    });
    if (consultaMJC) {
      return res
        .status(200)
        .json({ message: "mascota eliminada con éxito", data: consultaMJC });
    } else {
      return res
        .status(404)
        .json({ message: "no fue posible eliminar con exito" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "sistema" });
  }
};

export const getIdPetsMJC = async (req, res) => {
  try {
    const consultaMJC = await PrismaMJC.petMJC.findFirst({
      where: {
        id_PetMJC: parseInt(req.params.id),
      },
      include:{
        races: {
          select:{
            name_RacesMJC:true
          }
        },
        Genders: {
          select:{
            name_GendersMJC:true
          }
        },
        categories: {
          select:{
            name_CategoriesMJC:true
          }
        }
      },
    });
    if (consultaMJC) {
      return res.status(200).json(consultaMJC);
    } else {
      return res
        .status(400)
        .json({ message: "no fue posible encontrar esta mascota" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "sistema" });
  }
};
