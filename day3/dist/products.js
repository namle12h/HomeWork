"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.json({ message: "Lấy tất cả sản phẩm" });
});
router.get("/:id", (req, res) => {
    res.json({ message: `Lấy sản phẩm với ID: ${req.params.id}` });
});
router.post("/", (req, res) => {
    res.json({ message: "Tạo mới sản phẩm" });
});
router.put("/:id", (req, res) => {
    res.json({ message: `Cập nhật sản phẩm với ID: ${req.params.id}` });
});
router.delete("/:id", (req, res) => {
    res.json({ message: `Xóa sản phẩm với ID: ${req.params.id}` });
});
exports.default = router;
//# sourceMappingURL=products.js.map