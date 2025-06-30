import express from "express";
import UsersController from "../controllers/UserController";

const router = express.Router();
const userController = new UsersController();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - isActive
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the User
 *         name:
 *           type: string
 *           description: The full name of the User
 *         email:
 *           type: string
 *           description: The email of the User
 *         password:
 *           type: string
 *           description: The password of the User
 *         isActive:
 *           type: boolean
 *           description: The state of the User (e.g., true, false)
 *       example:
 *         id: kskbVGJjgv
 *         name: Eduardo Jose Rodriguez
 *         email: eduardo@gmail.com
 *         password: 123456
 *         isActive: true
 *
 *     UserDTO:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - isActive
 *       properties:
 *         name:
 *           type: string
 *           description: The full name of the User
 *         email:
 *           type: string
 *           description: The email of the User
 *         password:
 *           type: string
 *           description: The password of the User
 *         isActive:
 *           type: boolean
 *           description: The status of the User (e.g., true, false)
 *       example:
 *         name: Eduardo Jose Rodriguez
 *         email: eduardo@gmail.com
 *         password: 123456
 *         isActive: true
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The Users managing API
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns the list of all the Users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the Users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get("/", userController.getAllUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a User by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The User ID
 *     responses:
 *       200:
 *         description: The User data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
router.get("/:id", userController.getUserById);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new User
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserDTO'
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User added correctly
 *       400:
 *         description: Invalid input data
 */
router.post("/", userController.addUser);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update an existing User
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserDTO'
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User updated successfully
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: User not found
 */
router.put("/:id", userController.updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a User by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The User ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User deleted successfully
 *       404:
 *         description: User not found
 */
router.delete("/:id", userController.deleteUser);

export default router;
