import app from './app';
import mongoose from 'mongoose';
import config  from './config/config';


const PORT = config.PORT || 5000;

async function main(){
    try {
         await  mongoose.connect(`mongodb+srv://${config.DB_USER}:${config.DB_PASS}@cluster0.fgufh.mongodb.net/LMSdb?retryWrites=true&w=majority&appName=Cluster0`);
        await app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT} `);
        });
    } catch (error) {
        console.log(error);
    }
}

main();