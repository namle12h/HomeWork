import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Lấy tất cả sản phẩm" });
});

router.get("/:id", (req: Request, res: Response) => {
  res.json({ message: `Lấy sản phẩm với ID: ${req.params.id}` });
});

router.post("/", (req: Request, res: Response) => {
  res.json({ message: "Tạo mới sản phẩm" });
});

router.put("/:id", (req: Request, res: Response) => {
  res.json({ message: `Cập nhật sản phẩm với ID: ${req.params.id}` });
});

router.delete("/:id", (req: Request, res: Response) => {
  res.json({ message: `Xóa sản phẩm với ID: ${req.params.id}` });
});

export default router;
