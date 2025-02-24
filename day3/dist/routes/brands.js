"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Lấy tất cả thương hiệu
router.get("/", (req, res) => {
    res.json({ message: "Lấy tất cả thương hiệu" });
});
// Lấy một thương hiệu theo ID
router.get("/:id", (req, res) => {
    res.json({ message: `Lấy thương hiệu với ID: ${req.params.id}` });
});
// Tạo mới thương hiệu
router.post("/", (req, res) => {
    res.json({ message: "Tạo mới thương hiệu" });
});
// Cập nhật thương hiệu theo ID
router.put("/:id", (req, res) => {
    res.json({ message: `Cập nhật thương hiệu với ID: ${req.params.id}` });
});
// Xóa thương hiệu theo ID
router.delete("/:id", (req, res) => {
    res.json({ message: `Xóa thương hiệu với ID: ${req.params.id}` });
});
exports.default = router;
//# sourceMappingURL=brands.js.map