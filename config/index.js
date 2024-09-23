import dotenv from 'dotenv';

dotenv.config();

const dbExport = {
  db: {
    uri: process.env.PROJECT_URL,
    key: process.env.ANNON_KEY,
  },
};

export default dbExport;
