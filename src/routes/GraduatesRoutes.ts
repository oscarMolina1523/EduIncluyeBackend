import express from "express";
import GraduatesController from "../controllers/GraduatesController";

const router = express.Router();
const graduatesController = new GraduatesController();

/**
 * @swagger
 * components:
 *   schemas:
 *     Graduate:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - image
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Graduate
 *         name:
 *           type: string
 *           description: The name of the Graduate
 *         description:
 *           type: string
 *           description: The description of the Graduate
 *         image:
 *           type: string
 *           description: The image URL of the Graduate
 *       example:
 *         id: abc123xyz
 *         name: John Doe
 *         description: Graduate in Computer Science
 *         image: johndoe.png
 *
 *     GraduateDTO:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - image
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the Graduate
 *         description:
 *           type: string
 *           description: The description of the Graduate
 *         image:
 *           type: string
 *           description: The image URL of the Graduate
 *       example:
 *         name: John Doe
 *         description: Graduate in Computer Science
 *         image: johndoe.png
 */

/**
 * @swagger
 * tags:
 *   name: Graduates
 *   description: The Graduates managing API
 */

/**
 * @swagger
 * /graduates:
 *   get:
 *     summary: Returns the list of all Graduates
 *     tags: [Graduates]
 *     responses:
 *       200:
 *         description: The list of Graduates
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Graduate'
 */
router.get("/", graduatesController.getAllGraduates);

/**
 * @swagger
 * /graduates/{id}:
 *   get:
 *     summary: Get a Graduate by ID
 *     tags: [Graduates]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Graduate ID
 *     responses:
 *       200:
 *         description: The Graduate data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Graduate'
 *       404:
 *         description: Graduate not found
 */
router.get("/:id", graduatesController.getGraduateById);

/**
 * @swagger
 * /graduates:
 *   post:
 *     summary: Create a new Graduate
 *     tags: [Graduates]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GraduateDTO'
 *     responses:
 *       201:
 *         description: Graduate created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Graduate added correctly
 *       400:
 *         description: Invalid input data
 */
router.post("/", graduatesController.addGraduate);

/**
 * @swagger
 * /graduates/{id}:
 *   put:
 *     summary: Update an existing Graduate
 *     tags: [Graduates]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Graduate ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GraduateDTO'
 *     responses:
 *       200:
 *         description: Graduate updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Graduate updated successfully
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: Graduate not found
 */
router.put("/:id", graduatesController.updateGraduate);

/**
 * @swagger
 * /graduates/{id}:
 *   delete:
 *     summary: Delete a Graduate by ID
 *     tags: [Graduates]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Graduate ID
 *     responses:
 *       200:
 *         description: Graduate deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Graduate deleted successfully
 *       404:
 *         description: Graduate not found
 */
router.delete("/:id", graduatesController.deleteGraduate);

export default router;
