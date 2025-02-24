import { Router, Request, Response } from "express";

const router = Router();

// Lấy tất cả nhân viên
router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Lấy tất cả nhân viên" });
});

// Lấy một nhân viên theo ID
router.get("/:id", (req: Request, res: Response) => {
  res.json({ message: `Lấy nhân viên với ID: ${req.params.id}` });
});

// Tạo mới nhân viên
router.post("/", (req: Request, res: Response) => {
  res.json({ message: "Tạo mới nhân viên" });
});

// Cập nhật nhân viên theo ID
router.put("/:id", (req: Request, res: Response) => {
  res.json({ message: `Cập nhật nhân viên với ID: ${req.params.id}` });
});

// Xóa nhân viên theo ID
router.delete("/:id", (req: Request, res: Response) => {
  res.json({ message: `Xóa nhân viên với ID: ${req.params.id}` });
});

export default router;
