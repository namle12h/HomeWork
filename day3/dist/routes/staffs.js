"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Lấy tất cả nhân viên
router.get("/", (req, res) => {
    res.json({ message: "Lấy tất cả nhân viên" });
});
// Lấy một nhân viên theo ID
router.get("/:id", (req, res) => {
    res.json({ message: `Lấy nhân viên với ID: ${req.params.id}` });
});
// Tạo mới nhân viên
router.post("/", (req, res) => {
    res.json({ message: "Tạo mới nhân viên" });
});
// Cập nhật nhân viên theo ID
router.put("/:id", (req, res) => {
    res.json({ message: `Cập nhật nhân viên với ID: ${req.params.id}` });
});
// Xóa nhân viên theo ID
router.delete("/:id", (req, res) => {
    res.json({ message: `Xóa nhân viên với ID: ${req.params.id}` });
});
exports.default = router;
//# sourceMappingURL=staffs.js.map