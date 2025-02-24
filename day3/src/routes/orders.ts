import { Router, Request, Response } from "express";

const router = Router();

// Lấy tất cả đơn hàng
router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Lấy tất cả đơn hàng" });
});

// Lấy một đơn hàng theo ID
router.get("/:id", (req: Request, res: Response) => {
  res.json({ message: `Lấy đơn hàng với ID: ${req.params.id}` });
});

// Tạo mới đơn hàng
router.post("/", (req: Request, res: Response) => {
  res.json({ message: "Tạo mới đơn hàng" });
});

// Cập nhật đơn hàng theo ID
router.put("/:id", (req: Request, res: Response) => {
  res.json({ message: `Cập nhật đơn hàng với ID: ${req.params.id}` });
});

// Xóa đơn hàng theo ID
router.delete("/:id", (req: Request, res: Response) => {
  res.json({ message: `Xóa đơn hàng với ID: ${req.params.id}` });
});

export default router;
