import { PrismaMJC } from "../dbMJC.js";

export const getCategories = async (req, res) => {
  try {
    const consultaMJC = await PrismaMJC.categoriesMJC.findMany();
    if (consultaMJC.length > 0) {
      return res
        .status(200)
        .json({ message: "lista de categorias", data: consultaMJC });
    } else {
      return res
        .status(404)
        .json({ message: "lista de categorias no encontrada" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "error" });
  }
};
