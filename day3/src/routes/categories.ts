import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  // console.log(1111);
  res.json({ message: "Lấy tất cả categories" });
});

router.get("/:id", (req: Request, res: Response) => {
  res.json({ message: `Lấy category với ID: ${req.params.id}` });
});

router.post("/", (req: Request, res: Response) => {
  res.json({ message: "Tạo mới category" });
});

router.put("/:id", (req: Request, res: Response) => {
  res.json({ message: `Cập nhật category với ID: ${req.params.id}` });
});

// router.delete("/:id", (req: Request, res: Response) => {
//   res.json({ message: `Xóa category với ID: ${req.params.id}` });
// });

router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  // Giả lập việc xóa danh mục (Trong thực tế, cần thao tác với database)
  console.log(`Received DELETE request for category ID: ${id}`);

  res.status(200).json({
    message: `Đã xóa category với ID: ${id}`,
  });
});
export default router;
