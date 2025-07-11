import express from "express";
import swaggerUI from "swagger-ui-express";
import specs from "./swagger/swagger";
import usersRoutes from "../src/routes/UserRoutes";
import categoriesRoutes from "../src/routes/CategoryRoutes";
import contentRoutes from "../src/routes/ContentRoutes";
import graduatesRoutes from "../src/routes/GraduatesRoutes";
import podcastRoutes from "../src/routes/PodcastRoutes";
import authRoutes from "../src/routes/AuthRoutes";
import { validateToken } from "./utils/jwtUtils";

const app = express();
const PORT = 3000;
//for use jsonwebtoken
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/auth", authRoutes);
app.use("/users",validateToken, usersRoutes);
app.use("/category",validateToken, categoriesRoutes);
app.use("/content",validateToken, contentRoutes);
app.use("/graduates",validateToken, graduatesRoutes);
app.use("/podcast",validateToken, podcastRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;