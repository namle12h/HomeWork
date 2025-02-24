"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryService = exports.updateCategoryService = exports.createCategoryService = exports.getCategoryService = exports.getAllCategoriesService = void 0;
const fakeCategories = [
    { id: 1, name: "Technology" },
    { id: 2, name: "Science" },
];
const getAllCategoriesService = () => {
    return fakeCategories;
};
exports.getAllCategoriesService = getAllCategoriesService;
const getCategoryService = (id) => {
    return fakeCategories.find((cat) => cat.id === id);
};
exports.getCategoryService = getCategoryService;
const createCategoryService = (name) => {
    const newCategory = { id: fakeCategories.length + 1, name };
    fakeCategories.push(newCategory);
    return newCategory;
};
exports.createCategoryService = createCategoryService;
const updateCategoryService = (id, name) => {
    const category = fakeCategories.find((cat) => cat.id === id);
    if (!category)
        return null;
    category.name = name;
    return category;
};
exports.updateCategoryService = updateCategoryService;
const deleteCategoryService = (id) => {
    const index = fakeCategories.findIndex((cat) => cat.id === id);
    if (index === -1)
        return false;
    fakeCategories.splice(index, 1);
    return true;
};
exports.deleteCategoryService = deleteCategoryService;
//# sourceMappingURL=categoryService.js.map