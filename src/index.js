import '../config'
import app from './app';
import "./database"
import { port } from '../config';

//iniciamos el servidor

app.listen(port, () => {
    console.log(`Server on port ${port}`);
})

