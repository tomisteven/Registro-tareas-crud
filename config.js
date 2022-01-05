import  {config}  from 'dotenv';

config();

export const mongoDb_url = process.env.MONGODB_URI;
export const port = process.env.PORT || 3000;