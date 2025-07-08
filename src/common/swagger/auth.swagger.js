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
          description: "Trả về thông tin người dùng",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  accessToken: {
                    type: "string",
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTc1MTk0NDY3NiwiZXhwIjoxNzUxOTQ0Njk2fQ.ekTJr6kEy6tsl8ON3Xq8LpItYUZv",
                  },
                  refreshToken: {
                    type: "string",
                    example:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTc1MTk0NDY3NiwiZXhwIjoxNzUyMDMxMDc2fQ.iVI76UsSRRrjLfxEV2QSyGIX",
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
                    example: "null",
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
  "/auth/refresh-token": {
    post: {
      tags: ["Auth"],
      summary: "Refresh Token",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                accessToken: {
                  type: "string",
                  example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.accessToken",
                },
                refreshToken: {
                  type: "string",
                  example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.refreshToken",
                },
              },
              required: ["accessToken", "refreshToken"],
            },
          },
        },
      },
      responses: {
        200: {
          description: "Trả về accessToken và refreshToken mới",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  accessToken: {
                    type: "string",
                    example: "newAccessToken_abc123",
                  },
                  refreshToken: {
                    type: "string",
                    example: "newRefreshToken_xyz456",
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Refresh Token không hợp lệ hoặc đã hết hạn",
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
                    example: "Refresh Token không thành công",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export default authSwagger;
