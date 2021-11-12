const { Router } = require("express");
const router = Router();

const AdminController = require("../controllers/AdminController");

router.get("/", AdminController.GET_ADMIN_DASHBOARD);
router.get("/manage-admins", AdminController.GET_VIEW_ADMINS);
router.post("/store-admin", AdminController.POST_ADMIN_STORE);
router.patch("/update-profile", AdminController.PATCH_ADMIN_UPDATE);
router.delete("/delete-admin", AdminController.DELETE_ADMIN_DELETE);

router.post("forgot-password", AdminController.POST_ADMIN_FORGOT_PASSWORD);
router.post(
  "forgot-password/reset-password",
  AdminController.POST_ADMIN_FORGOT_PASSWORD_RESET
);
router.post(
  "forgot-password/validate-token",
  AdminController.POST_ADMIN_FORGOT_PASSWORD_VALIDATE_TOKEN
);
module.exports = router;
