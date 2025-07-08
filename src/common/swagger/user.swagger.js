const userSwagger = {
  "/user/get-info": {
    get: {
      tags: ["User"],
      summary: "Lấy thông tin người dùng hiện tại từ access token",
      security: [
        {
          BearerAuth: [],
        },
      ],
      responses: {
        200: {
          description: "Trả về thông tin người dùng",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  nguoi_dung_id: {
                    type: "integer",
                    example: 1,
                  },
                  email: {
                    type: "string",
                    example: "phatvo3@gmail.com",
                  },
                  ho_ten: {
                    type: "string",
                    example: "Daniel Dev",
                  },
                  tuoi: {
                    type: "integer",
                    example: 22,
                  },
                  anh_dai_dien: {
                    type: "string",
                    example: "https://example.com/avatar.jpg",
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

  "/user/update-user": {
    put: {
      tags: ["User"],
      summary: "Update user information",
      security: [
        {
          BearerAuth: [],
        },
      ],
      description:
        "Cập nhật thông tin cá nhân của người dùng (cần access token).",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                mat_khau: {
                  type: "string",
                  example: "12345678",
                },
                ho_ten: {
                  type: "string",
                  example: "Phát Võ",
                },
                tuoi: {
                  type: "integer",
                  example: 25,
                },
              },
              required: ["mat_khau", "ho_ten", "tuoi"],
            },
          },
        },
      },
      responses: {
        200: {
          description: "Trả về thông tin người dùng đã được cập nhật",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  nguoi_dung_id: {
                    type: "integer",
                    example: 1,
                  },
                  email: {
                    type: "string",
                    example: "phatvo3@gmail.com",
                  },
                  ho_ten: {
                    type: "string",
                    example: "Phát Võ",
                  },
                  tuoi: {
                    type: "integer",
                    example: 25,
                  },
                  anh_dai_dien: {
                    type: "string",
                    example: null,
                  },
                },
              },
            },
          },
        },
        401: {
          description: "Không có token hoặc token không hợp lệ",
        },
        400: {
          description: "Yêu cầu không hợp lệ (thiếu dữ liệu, sai kiểu...)",
        },
      },
    },
  },

  "/user/upload-avatar": {
    post: {
      tags: ["User"],
      summary: "Upload ảnh đại diện (avatar)",
      security: [
        {
          BearerAuth: [],
        },
      ],
      description:
        "Cập nhật ảnh đại diện người dùng. Cần access token và gửi file ảnh.",
      requestBody: {
        required: true,
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              properties: {
                file: {
                  type: "string",
                  format: "binary",
                  description: "Ảnh đại diện mới",
                },
              },
              required: ["file"],
            },
          },
        },
      },
      responses: {
        200: {
          description: "Cập nhật ảnh đại diện thành công",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  folder: {
                    type: "string",
                    example: "images",
                  },
                  filename: {
                    type: "string",
                    example: "avatar123",
                  },
                  imgUrl: {
                    type: "string",
                    example:
                      "https://res.cloudinary.com/your_cloud/image/upload/v123456789/images/avatar123.jpg",
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Không tìm thấy file hoặc upload thất bại",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  statusCode: {
                    type: "integer",
                    example: 400,
                  },
                  message: {
                    type: "string",
                    example: "Chưa tìm thấy file",
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
};

export default userSwagger;
