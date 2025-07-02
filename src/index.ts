import express from "express";
import swaggerUI from "swagger-ui-express";
import specs from "./swagger/swagger";
import usersRoutes from "../src/routes/UserRoutes";
import categoriesRoutes from "../src/routes/CategoryRoutes";
import contentRoutes from "../src/routes/ContentRoutes";
import graduatesRoutes from "../src/routes/GraduatesRoutes";
import podcastRoutes from "../src/routes/PodcastRoutes";
const app = express();
const PORT = 3000;
//for use jsonwebtoken
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/users", usersRoutes);
app.use("/category", categoriesRoutes);
app.use("/content", contentRoutes);
app.use("/graduates", graduatesRoutes);
app.use("/podcast", podcastRoutes);

// app.post("/auth", (req, res) => {
//   const { username, password } = req.body;
//   const user = { username: username };
//   const accessToken = generateAccesToken(user);
//   res.header("authorization", accessToken).json({
//     message: "user authenticated",
//     token: accessToken,
//   });
// });

// app.get("/test", validateToken, (req, res) => {
//   res.json({
//     names: [{ name: "ani" }, { name: "all" }],
//   });
// });


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
