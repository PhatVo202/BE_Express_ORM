import { prisma } from "../common/prisma/init.prisma";

export const commentService = {
  getComment: async function (req) {
    const { id } = req.params;
    const comments = await prisma.binh_luan.findMany({
      where: {
        hinh_id: +id,
      },
    });
    return comments;
  },
  createComment: async function (req) {
    const userId = req.user.nguoi_dung_id;
    const { id } = req.params;
    const data = await prisma.binh_luan.create({
      data: {
        nguoi_dung_id: +userId,
        hinh_id: +id,
        noi_dung: req.body.noi_dung,
        ngay_binh_luan: new Date(),
      },
    });
    return data;
  },
};
