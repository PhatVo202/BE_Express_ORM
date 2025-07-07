const authSwagger = {
  "/auth/login": {
    post: {
      tags: ["Auth"],
      summary: "Login",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  example: "phatvo1@gmail.com",
                },
                mat_khau: {
                  type: "string",
                  example: "12345678",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Success",
          //   content: {
          //     "application/json": {
          //       schema: {
          //         $ref: "#/components/schemas/Article",
          //       },
          //     },
          //   },
        },
      },
    },
  },
  "/auth/register": {
    post: {
      tags: ["Auth"],
      summary: "Register",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  example: "phatvo3@gmail.com",
                },
                mat_khau: {
                  type: "string",
                  example: "1234",
                },
                ho_ten: {
                  type: "string",
                  example: "Daniel Dev",
                },
                tuoi: {
                  type: "integer",
                  example: 22,
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Success",
          //   content: {
          //     "application/json": {
          //       schema: {
          //         $ref: "#/components/schemas/Article",
          //       },
          //     },
          //   },
        },
      },
    },
  },
  "/auth/get-info": {
    get: {
      tags: ["Auth"],
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
};

export default authSwagger;
