import express from 'express';
import swaggerUI from 'swagger-ui-express';
import specs from './swagger/swagger';
import usersRoutes from '../src/routes/UserRoutes';
import categoriesRoutes from '../src/routes/CategoryRoutes';


const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use('/users', usersRoutes);
app.use('/category', categoriesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});