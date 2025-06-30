import express from "express";
import CategoryController from "../controllers/CategoryController";

const router = express.Router();
const categoryController = new CategoryController();

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - video
 *         - image
 *         - isActive
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Category
 *         name:
 *           type: string
 *           description: The name of the Category
 *         description:
 *           type: string
 *           description: The description of the Category
 *         video:
 *           type: string
 *           description: The video of the Category
 *         image:
 *           type: string
 *           description: The image of the Category
 *         isActive:
 *           type: boolean
 *           description: The state of the Category
 *       example:
 *         id: kjh324hkjh
 *         name: Señas
 *         description: señas mas comunes
 *         video: youtube.com
 *         image: imagen.png
 *         isActive: true
 *
 *     CategoryDTO:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - video
 *         - image
 *         - isActive
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the Category
 *         description:
 *           type: string
 *           description: The description of the Category
 *         video:
 *           type: string
 *           description: The video of the Category
 *         image:
 *           type: string
 *           description: The image of the Category
 *         isActive:
 *           type: boolean
 *           description: The state of the Category
 *       example:
 *         name: Señas
 *         description: señas mas comunes
 *         video: youtube.com
 *         image: imagen.png
 *         isActive: true
 */

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: The Categories managing API
 */

/**
 * @swagger
 * /category:
 *   get:
 *     summary: Returns the list of all Categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: The list of Categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */
router.get("/", categoryController.getAllCategories);

/**
 * @swagger
 * /category/{id}:
 *   get:
 *     summary: Get a Category by ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Category ID
 *     responses:
 *       200:
 *         description: The Category data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Category not found
 */
router.get("/:id", categoryController.getCategoryById);

/**
 * @swagger
 * /category:
 *   post:
 *     summary: Create a new Category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CategoryDTO'
 *     responses:
 *       201:
 *         description: Category created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Category added correctly
 *       400:
 *         description: Invalid input data
 */
router.post("/", categoryController.addCategory);

/**
 * @swagger
 * /category/{id}:
 *   put:
 *     summary: Update an existing Category
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CategoryDTO'
 *     responses:
 *       200:
 *         description: Category updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Category updated successfully
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: Category not found
 */
router.put("/:id", categoryController.updateCategory);

/**
 * @swagger
 * /category/{id}:
 *   delete:
 *     summary: Delete a Category by ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Category ID
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Category deleted successfully
 *       404:
 *         description: Category not found
 */
router.delete("/:id", categoryController.deleteCategory);

export default router;
