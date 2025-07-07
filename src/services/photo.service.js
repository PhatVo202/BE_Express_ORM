import { prisma } from "../common/prisma/init.prisma";

export const photoService = {
  findAll: async function (req) {
    //(page -1) * pageSize
    let { page, pageSize, filters } = req.query;
    page = +page > 0 ? +page : 1;
    pageSize = +pageSize > 0 ? +pageSize : 3;
    const skip = (page - 1) * pageSize;

    filters = JSON.parse(filters || `{}`);

    Object.entries(filters).forEach(([key, value], index, arr) => {
      if (value === "" || value === null || value === undefined) {
        delete filters[key];
        return;
      }
      if (typeof value === "string") {
        filters[key] = { contains: value };
      }
    });

    const where = {
      ...filters,
    };

    const photos = await prisma.hinh_anh.findMany({
      skip: skip, //OFFSET: tức là bắt đầu từ index thứ mấy
      take: pageSize, //LIMIT
      where: where,
    });

    const totalItem = await prisma.hinh_anh.count({
      where: where,
    });
    const totalPage = Math.ceil(totalItem / pageSize);

    return {
      page: page, //số trang
      pageSize: pageSize, // 1 trang có bao nhiêu Item
      totalItem: totalItem, //Tổng cộng có bao nhiêu item
      totalPage: totalPage, //Tổng cộng bao nhiêu trang
      items: photos,
    };
  },

  findOne: async function (req) {
    const { id } = req.params;
    const photoDetail = await prisma.hinh_anh.findUnique({
      where: {
        hinh_id: Number(id),
      },
    });
    return photoDetail;
  },

  update: async function (req) {
    return `This action updates a id: ${req.params.id} photo`;
  },

  remove: async function (req) {
    return `This action removes a id: ${req.params.id} photo`;
  },
};
