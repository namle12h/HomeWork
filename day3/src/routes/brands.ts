import { Router, Request, Response } from "express";

const router = Router();

// Lấy tất cả thương hiệu
router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Lấy tất cả thương hiệu" });
});

// Lấy một thương hiệu theo ID
router.get("/:id", (req: Request, res: Response) => {
  res.json({ message: `Lấy thương hiệu với ID: ${req.params.id}` });
});

// Tạo mới thương hiệu
router.post("/", (req: Request, res: Response) => {
  res.json({ message: "Tạo mới thương hiệu" });
});

// Cập nhật thương hiệu theo ID
router.put("/:id", (req: Request, res: Response) => {
  res.json({ message: `Cập nhật thương hiệu với ID: ${req.params.id}` });
});

// Xóa thương hiệu theo ID
router.delete("/:id", (req: Request, res: Response) => {
  res.json({ message: `Xóa thương hiệu với ID: ${req.params.id}` });
});

export default router;
