import express from "express";
import ContentController from "../controllers/ContentController";

const router = express.Router();
const contentController = new ContentController();

/**
 * @swagger
 * components:
 *   schemas:
 *     Content:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - video
 *         - audio
 *         - isActive
 *         - idCategory
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Content
 *         name:
 *           type: string
 *           description: The name of the Content
 *         description:
 *           type: string
 *           description: The description of the Content
 *         video:
 *           type: string
 *           description: The video URL of the Content
 *         audio:
 *           type: string
 *           description: The audio URL of the Content
 *         isActive:
 *           type: boolean
 *           description: The state of the Content
 *         idCategory:
 *           type: string
 *           description: The id of the Category this Content belongs to
 *       example:
 *         id: kjsdf7823sd
 *         name: Introducción a señas
 *         description: Contenido básico de señas
 *         video: https://youtube.com/video
 *         audio: https://audio.com/audio.mp3
 *         isActive: true
 *         idCategory: kjh324hkjh
 *
 *     ContentDTO:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - video
 *         - audio
 *         - isActive
 *         - idCategory
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the Content
 *         description:
 *           type: string
 *           description: The description of the Content
 *         video:
 *           type: string
 *           description: The video URL of the Content
 *         audio:
 *           type: string
 *           description: The audio URL of the Content
 *         isActive:
 *           type: boolean
 *           description: The state of the Content
 *         idCategory:
 *           type: string
 *           description: The id of the Category this Content belongs to
 *       example:
 *         name: Introducción a señas
 *         description: Contenido básico de señas
 *         video: https://youtube.com/video
 *         audio: https://audio.com/audio.mp3
 *         isActive: true
 *         idCategory: kjh324hkjh
 */

/**
 * @swagger
 * tags:
 *   name: Contents
 *   description: The Contents managing API
 */

/**
 * @swagger
 * /content:
 *   get:
 *     summary: Returns the list of all Content
 *     tags: [Contents]
 *     responses:
 *       200:
 *         description: The list of Content
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Content'
 */
router.get("/", contentController.getAllContent);

/**
 * @swagger
 * /content/{id}:
 *   get:
 *     summary: Get a Content by ID
 *     tags: [Contents]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Content ID
 *     responses:
 *       200:
 *         description: The Content data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Content'
 *       404:
 *         description: Content not found
 */
router.get("/:id", contentController.getContentById);

/**
 * @swagger
 * /content:
 *   post:
 *     summary: Create a new Content
 *     tags: [Contents]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ContentDTO'
 *     responses:
 *       201:
 *         description: Content created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Content added correctly
 *       400:
 *         description: Invalid input data
 */
router.post("/", contentController.addContent);

/**
 * @swagger
 * /content/{id}:
 *   put:
 *     summary: Update an existing Content
 *     tags: [Contents]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Content ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ContentDTO'
 *     responses:
 *       200:
 *         description: Content updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Content updated successfully
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: Content not found
 */
router.put("/:id", contentController.updateContent);

/**
 * @swagger
 * /content/{id}:
 *   delete:
 *     summary: Delete a Content by ID
 *     tags: [Contents]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Content ID
 *     responses:
 *       200:
 *         description: Content deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Content deleted successfully
 *       404:
 *         description: Content not found
 */
router.delete("/:id", contentController.deleteContent);

export default router;

