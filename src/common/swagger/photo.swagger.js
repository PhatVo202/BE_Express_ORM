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

  "/photos/is-save/{id}": {
    get: {
      tags: ["Photo"],
      summary: "Lấy thông tin đã lưu hình này chưa theo id ảnh",
      security: [
        {
          BearerAuth: [],
        },
      ],
      description: "dùng để kiểm tra ảnh đã lưu hay chưa ở nút Save",
      responses: {
        200: {
          description: "true/false",
        },
      },
    },
  },

  "/photos/created/user": {
    get: {
      tags: ["Photo"],
      summary: "Lấy danh sách ảnh đã tạo bởi người dùng hiện tại",
      security: [
        {
          BearerAuth: [],
        },
      ],
      description:
        "Trả về tất cả hình ảnh do người dùng hiện tại (từ access token) đã đăng.",
      responses: {
        200: {
          description: "Danh sách hình ảnh do người dùng đã tạo",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    hinh_id: {
                      type: "integer",
                      example: 12,
                    },
                    ten_hinh: {
                      type: "string",
                      example: "Bình minh trên núi",
                    },
                    mo_ta: {
                      type: "string",
                      example: "Một buổi sáng ở Đà Lạt",
                    },
                    duong_dan: {
                      type: "string",
                      example: "images/abcxyz123",
                    },
                    nguoi_dung_id: {
                      type: "integer",
                      example: 3,
                    },
                    ngay_tao: {
                      type: "string",
                      format: "date-time",
                      example: "2025-07-08T08:30:00.000Z",
                    },
                  },
                },
              },
            },
          },
        },
        401: {
          description: "Không có token hoặc token không hợp lệ",
        },
      },
    },
  },

  "/photos/saved/user": {
    get: {
      tags: ["Photo"],
      summary: "Lấy danh sách ảnh đã lưu bởi người dùng hiện tại",
      security: [
        {
          BearerAuth: [],
        },
      ],
      description:
        "Trả về tất cả hình ảnh do người dùng lưu hiện tại  đã đăng.",
      responses: {
        200: {
          description: "Danh sách hình ảnh do người dùng đã lưu",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    hinh_id: {
                      type: "integer",
                      example: 12,
                    },
                    ten_hinh: {
                      type: "string",
                      example: "Bình minh trên núi",
                    },
                    mo_ta: {
                      type: "string",
                      example: "Một buổi sáng ở Đà Lạt",
                    },
                    duong_dan: {
                      type: "string",
                      example: "images/abcxyz123",
                    },
                    nguoi_dung_id: {
                      type: "integer",
                      example: 3,
                    },
                    ngay_luu: {
                      type: "string",
                      format: "date-time",
                      example: "2025-07-08T08:30:00.000Z",
                    },
                    hinh_anh: {
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
        401: {
          description: "Không có token hoặc token không hợp lệ",
        },
      },
    },
  },

  "/photos/deleted-photo/{id}": {
    delete: {
      tags: ["Photo"],
      summary: "Xoá hình ảnh đã tạo theo ID",
      security: [
        {
          BearerAuth: [],
        },
      ],
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
          description: "Xoá ảnh thành công",
        },
        403: {
          description: "Bạn không có quyền xoá ảnh này!",
        },
      },
    },
  },
};

export default photoSwagger;
