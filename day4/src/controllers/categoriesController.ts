import { Request, Response } from "express";
import {
  getAllCategoriesService,
  getCategoryService,
  createCategoryService,
  updateCategoryService,
  deleteCategoryService,
} from "../services/categoryService";

/**
 * Lấy tất cả danh mục
 */
export const getAllCategories = (req: Request, res: Response) => {
  const categories = getAllCategoriesService();
  res.json(categories);
};

/**
 * Lấy danh mục theo ID
 */
export const getCategory = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const category = getCategoryService(id);
  if (!category)
    return res.status(404).json({ message: "Không tìm thấy category" });
  res.json(category);
};

/**
 * Tạo danh mục mới
 */
export const createCategory = (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name)
    return res.status(400).json({ message: "Tên category là bắt buộc" });

  const newCategory = createCategoryService(name);
  res.status(201).json(newCategory);
};

/**
 * Cập nhật danh mục
 */
export const updateCategory = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { name } = req.body;
  if (!name)
    return res.status(400).json({ message: "Tên category là bắt buộc" });

  const updatedCategory = updateCategoryService(id, name);
  if (!updatedCategory)
    return res.status(404).json({ message: "Không tìm thấy category" });

  res.json(updatedCategory);
};

/**
 * Xóa danh mục
 */
export const deleteCategory = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const isDeleted = deleteCategoryService(id);
  if (!isDeleted)
    return res.status(404).json({ message: "Không tìm thấy category" });

  res.json({ message: "Xóa category thành công" });
};
