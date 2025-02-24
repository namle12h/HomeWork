"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    // console.log(1111);
    res.json({ message: "Lấy tất cả categories" });
});
router.get("/:id", (req, res) => {
    res.json({ message: `Lấy category với ID: ${req.params.id}` });
});
router.post("/", (req, res) => {
    res.json({ message: "Tạo mới category" });
});
router.put("/:id", (req, res) => {
    res.json({ message: `Cập nhật category với ID: ${req.params.id}` });
});
router.delete("/:id", (req, res) => {
    res.json({ message: `Xóa category với ID: ${req.params.id}` });
});
exports.default = router;
//# sourceMappingURL=categories.js.map