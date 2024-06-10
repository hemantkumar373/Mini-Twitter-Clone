import express from "express";
import { login, signup, bookmark, follow, getMyProfile, getOtherUsers, logout, unfollow } from "../controllers/user.controller.js";
import isAuthenticated from "../middleware/auth.js";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/bookmark/:id").put(isAuthenticated, bookmark);
router.route("/profile/:id").get(isAuthenticated, getMyProfile);
router.route("/otheruser/:id").get(isAuthenticated, getOtherUsers);
router.route("/follow/:id").post(isAuthenticated, follow);
router.route("/unfollow/:id").post(isAuthenticated, unfollow);

export default router;