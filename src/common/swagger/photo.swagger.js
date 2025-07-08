const photoSwagger = {
  "/photos": {
    get: {
      tags: ["Photo"],
      summary: "Lấy danh sách hình ảnh kèm phân trang và bộ lọc tìm kiếm",
      parameters: [
        {
          name: "page",
          in: "query",
          required: false,
          schema: {
            type: "integer",
            example: 1,
          },
        },
        {
          name: "pageSize",
          in: "query",
          required: false,
          schema: {
            type: "integer",
            example: 3,
          },
        },
        {
          name: "filters",
          in: "query",
          description: "JSON. vd:{`ten_hinh`:`bien`}",
          required: false,
          type: "string",
        },
      ],
      responses: {
        200: {
          description: "Danh sách hình ảnh",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  page: { type: "integer", example: 1 },
                  pageSize: { type: "integer", example: 3 },
                  totalItem: { type: "integer", example: 20 },
                  totalPage: { type: "integer", example: 7 },
                  items: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        hinh_id: { type: "integer", example: 1 },
                        ten_hinh: { type: "string", example: "Phong cảnh đẹp" },
                        duong_dan: {
                          type: "string",
                          example: "images/phongcanh.jpg",
                        },
                        mo_ta: {
                          type: "string",
                          example: "Ảnh phong cảnh núi non hùng vĩ.",
                        },
                        nguoi_dung_id: { type: "integer", example: 1 },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/photos/{id}": {
    get: {
      tags: ["Photo"],
      summary: "Lấy thông tin chi tiết một hình ảnh theo ID",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID của hình ảnh",
          schema: {
            type: "integer",
            example: 1,
          },
        },
      ],
      responses: {
        200: {
          description: "Thông tin hình ảnh",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  hinh_id: { type: "integer", example: 1 },
                  ten_hinh: { type: "string", example: "Phong cảnh đẹp" },
                  duong_dan: {
                    type: "string",
                    example: "images/phongcanh.jpg",
                  },
                  mo_ta: {
                    type: "string",
                    example: "Ảnh phong cảnh núi non hùng vĩ.",
                  },
                  nguoi_dung_id: { type: "integer", example: 1 },
                },
              },
            },
          },
        },
        404: {
          description: "Không tìm thấy hình ảnh",
        },
      },
    },
  },
};

export default photoSwagger;
