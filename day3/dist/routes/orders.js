"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Lấy tất cả đơn hàng
router.get("/", (req, res) => {
    res.json({ message: "Lấy tất cả đơn hàng" });
});
// Lấy một đơn hàng theo ID
router.get("/:id", (req, res) => {
    res.json({ message: `Lấy đơn hàng với ID: ${req.params.id}` });
});
// Tạo mới đơn hàng
router.post("/", (req, res) => {
    res.json({ message: "Tạo mới đơn hàng" });
});
// Cập nhật đơn hàng theo ID
router.put("/:id", (req, res) => {
    res.json({ message: `Cập nhật đơn hàng với ID: ${req.params.id}` });
});
// Xóa đơn hàng theo ID
router.delete("/:id", (req, res) => {
    res.json({ message: `Xóa đơn hàng với ID: ${req.params.id}` });
});
exports.default = router;
//# sourceMappingURL=orders.js.map