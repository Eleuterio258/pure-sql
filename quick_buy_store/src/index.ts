import express from 'express'
require("dotenv").config();
import usersRouter from './router/admin/UserRouter';
import cartsRouter from './router/custemer/CartRouter';
const app = express();

app.use(express.json());

app.use('/api', usersRouter)
app.use('/api/',cartsRouter)
app.listen(3333, () => 'server running on port 3333')