"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriesController_1 = require("../controllers/categoriesController");
const router = (0, express_1.Router)();
router.get("/", categoriesController_1.getAllCategories);
router.get("/:id", categoriesController_1.getCategory);
router.post("/", categoriesController_1.createCategory);
router.put("/:id", categoriesController_1.updateCategory);
router.delete("/:id", categoriesController_1.deleteCategory);
exports.default = router;
//# sourceMappingURL=categoryRoutes.js.map