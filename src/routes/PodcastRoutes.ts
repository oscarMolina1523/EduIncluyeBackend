import express from "express";
import PodcastController from "../controllers/PodcastController";

const router = express.Router();
const podcastController = new PodcastController();

/**
 * @swagger
 * components:
 *   schemas:
 *     Podcast:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - video
 *         - audio
 *         - isActive
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Podcast
 *         name:
 *           type: string
 *           description: The name of the Podcast
 *         description:
 *           type: string
 *           description: The description of the Podcast
 *         video:
 *           type: string
 *           description: The video URL of the Podcast
 *         audio:
 *           type: string
 *           description: The audio URL of the Podcast
 *         isActive:
 *           type: boolean
 *           description: The state of the Podcast
 *       example:
 *         id: kjh324hkjh
 *         name: Podcast educativo
 *         description: Introducción a los signos
 *         video: youtube.com
 *         audio: audio.mp3
 *         isActive: true
 *
 *     PodcastDTO:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - video
 *         - audio
 *         - isActive
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the Podcast
 *         description:
 *           type: string
 *           description: The description of the Podcast
 *         video:
 *           type: string
 *           description: The video URL of the Podcast
 *         audio:
 *           type: string
 *           description: The audio URL of the Podcast
 *         isActive:
 *           type: boolean
 *           description: The state of the Podcast
 *       example:
 *         name: Podcast educativo
 *         description: Introducción a los signos
 *         video: youtube.com
 *         audio: audio.mp3
 *         isActive: true
 */

/**
 * @swagger
 * tags:
 *   name: Podcasts
 *   description: The Podcasts managing API
 */

/**
 * @swagger
 * /podcast:
 *   get:
 *     summary: Returns the list of all Podcasts
 *     tags: [Podcasts]
 *     responses:
 *       200:
 *         description: The list of Podcasts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Podcast'
 */
router.get("/", podcastController.getAllPodcasts);

/**
 * @swagger
 * /podcast/{id}:
 *   get:
 *     summary: Get a Podcast by ID
 *     tags: [Podcasts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Podcast ID
 *     responses:
 *       200:
 *         description: The Podcast data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Podcast'
 *       404:
 *         description: Podcast not found
 */
router.get("/:id", podcastController.getPodcastById);

/**
 * @swagger
 * /podcast:
 *   post:
 *     summary: Create a new Podcast
 *     tags: [Podcasts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PodcastDTO'
 *     responses:
 *       201:
 *         description: Podcast created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Podcast added correctly
 *       400:
 *         description: Invalid input data
 */
router.post("/", podcastController.addPodcast);

/**
 * @swagger
 * /podcast/{id}:
 *   put:
 *     summary: Update an existing Podcast
 *     tags: [Podcasts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Podcast ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PodcastDTO'
 *     responses:
 *       200:
 *         description: Podcast updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Podcast updated successfully
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: Podcast not found
 */
router.put("/:id", podcastController.updatePodcast);

/**
 * @swagger
 * /podcast/{id}:
 *   delete:
 *     summary: Delete a Podcast by ID
 *     tags: [Podcasts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Podcast ID
 *     responses:
 *       200:
 *         description: Podcast deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Podcast deleted successfully
 *       404:
 *         description: Podcast not found
 */
router.delete("/:id", podcastController.deletePodcast);

export default router;
