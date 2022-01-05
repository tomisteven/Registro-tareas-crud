import { mongoose, connect } from 'mongoose';
import { mongoDb_url } from '../config';


//conectar base de datos moongo
connect(mongoDb_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(db => console.log('DB is connected')).catch(err => console.error(err));