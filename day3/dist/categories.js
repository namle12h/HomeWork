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
// router.delete("/:id", (req: Request, res: Response) => {
//   res.json({ message: `Xóa category với ID: ${req.params.id}` });
// });
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    // Giả lập việc xóa danh mục (Trong thực tế, cần thao tác với database)
    console.log(`Received DELETE request for category ID: ${id}`);
    res.status(200).json({
        message: `Đã xóa category với ID: ${id}`,
    });
});
exports.default = router;
//# sourceMappingURL=categories.js.map