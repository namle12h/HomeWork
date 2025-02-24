import { Category } from "../models/categoryModel";

const fakeCategories: Category[] = [
  { id: 1, name: "Technology" },
  { id: 2, name: "Science" },
];

export const getAllCategoriesService = (): Category[] => {
  return fakeCategories;
};

export const getCategoryService = (id: number): Category | undefined => {
  return fakeCategories.find((cat) => cat.id === id);
};

export const createCategoryService = (name: string): Category => {
  const newCategory: Category = { id: fakeCategories.length + 1, name };
  fakeCategories.push(newCategory);
  return newCategory;
};

export const updateCategoryService = (
  id: number,
  name: string
): Category | null => {
  const category = fakeCategories.find((cat) => cat.id === id);
  if (!category) return null;
  category.name = name;
  return category;
};

export const deleteCategoryService = (id: number): boolean => {
  const index = fakeCategories.findIndex((cat) => cat.id === id);
  if (index === -1) return false;
  fakeCategories.splice(index, 1);
  return true;
};
