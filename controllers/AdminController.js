const AdminController = {
  GET_ADMIN_DASHBOARD: (req, res) => {
    return res.json({
      body: "Admin Dashboard",
    });
  },
  GET_VIEW_ADMINS: (req, res) => {
    return res.json({
      body: "Admin Store",
    });
  },
  POST_ADMIN_STORE: (req, res) => {
    return res.json({
      body: "Admin Store",
    });
  },
  PATCH_ADMIN_UPDATE: (req, res) => {
    return res.json({
      body: "Admin Update",
    });
  },
  DELETE_ADMIN_DELETE: (req, res) => {
    return res.json({
      body: "Admin Delete",
    });
  },
  POST_ADMIN_FORGOT_PASSWORD: (req, res) => {
    return res.json({
      body: "Admin Forgot Password Search By Email",
    });
  },
  POST_ADMIN_FORGOT_PASSWORD_RESET: (req, res) => {
    return res.json({
      body: "Admin Forgot Password Change Password",
    });
  },
  POST_ADMIN_FORGOT_PASSWORD_VALIDATE_TOKEN: (req, res) => {
    return res.json({
      body: "Admin Forgot Password Validate Token",
    });
  },
};
module.exports = AdminController;

/**
 * @swagger
 * components:
 *   schemas:
 *     Admin:
 *       type: object
 *       required:
 *         - admin_full_name
 *         - admin_email
 *         - admin_password
 *         - admin_image
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         admin_full_name:
 *           type: string
 *           description: Full Name of Admin
 *         admin_email:
 *           type: string
 *           description: Email of Admin
 *         admin_password:
 *           type: string
 *           description: Password of Admin
 *         admin_image:
 *           type: string
 *           description: URL for Admin Profile Image

 */
