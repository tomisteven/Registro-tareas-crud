import { mongoose, connect } from 'mongoose';
import { mongoDb_url } from '../config.js';
import dotenv from 'dotenv';
dotenv.config();

//conectar base de datos moongo
connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(db => console.log(`Db is connected ${process.env.PORT}`)).catch(err => console.error(err));