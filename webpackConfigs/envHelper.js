const path = require('path');
const dotEnv = require('dotenv');
const envPath = path.resolve(process.cwd(), '.env');
dotEnv.config({ path: envPath });