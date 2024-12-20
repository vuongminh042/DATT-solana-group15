import dotenv from 'dotenv';

dotenv.config({ path: '././.env.local' });

const { PORT, DB_URL, JWT_SECRET, API_KEY } = process.env;

export { PORT, DB_URL, JWT_SECRET,API_KEY };
