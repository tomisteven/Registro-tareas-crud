import '../config.js';
import app from './app.js';
import "./database.js"
import { port } from '../config.js';

import dotenv from 'dotenv';
dotenv.config();

//iniciamos el servidor

app.listen(process.env.PORT, () => {
    console.log(`Server on port ${process.env.PORT}`);
})

