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
};

export default userSwagger;
