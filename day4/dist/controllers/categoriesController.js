"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategory = exports.getAllCategories = void 0;
const categoryService_1 = require("../services/categoryService");
/**
 * Lấy tất cả danh mục
 */
const getAllCategories = (req, res) => {
    const categories = (0, categoryService_1.getAllCategoriesService)();
    res.json(categories);
};
exports.getAllCategories = getAllCategories;
/**
 * Lấy danh mục theo ID
 */
const getCategory = (req, res) => {
    const id = Number(req.params.id);
    const category = (0, categoryService_1.getCategoryService)(id);
    if (!category)
        return res.status(404).json({ message: "Không tìm thấy category" });
    res.json(category);
};
exports.getCategory = getCategory;
/**
 * Tạo danh mục mới
 */
const createCategory = (req, res) => {
    const { name } = req.body;
    if (!name)
        return res.status(400).json({ message: "Tên category là bắt buộc" });
    const newCategory = (0, categoryService_1.createCategoryService)(name);
    res.status(201).json(newCategory);
};
exports.createCategory = createCategory;
/**
 * Cập nhật danh mục
 */
const updateCategory = (req, res) => {
    const id = Number(req.params.id);
    const { name } = req.body;
    if (!name)
        return res.status(400).json({ message: "Tên category là bắt buộc" });
    const updatedCategory = (0, categoryService_1.updateCategoryService)(id, name);
    if (!updatedCategory)
        return res.status(404).json({ message: "Không tìm thấy category" });
    res.json(updatedCategory);
};
exports.updateCategory = updateCategory;
/**
 * Xóa danh mục
 */
const deleteCategory = (req, res) => {
    const id = Number(req.params.id);
    const isDeleted = (0, categoryService_1.deleteCategoryService)(id);
    if (!isDeleted)
        return res.status(404).json({ message: "Không tìm thấy category" });
    res.json({ message: "Xóa category thành công" });
};
exports.deleteCategory = deleteCategory;
//# sourceMappingURL=categoriesController.js.map