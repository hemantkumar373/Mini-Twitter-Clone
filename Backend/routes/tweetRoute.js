import express from "express";
import { createTweet, deleteTweet, getAllTweets, getFollowingTweets, likeOrUnlikeTweet } from "../controllers/tweet.controller.js";
import isAuthenticated from "../middleware/auth.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createTweet);
router.route("/delete/:id").delete(isAuthenticated, deleteTweet);
router.route("/like/:id").put(isAuthenticated, likeOrUnlikeTweet);
router.route("/alltweets/:id").get(isAuthenticated, getAllTweets);
router.route("/following/:id").get(isAuthenticated, getFollowingTweets);
export default router;