import { config } from "dotenv";
config()

const SECRET_KEY = process.env.TOKEN_SECRET

export default SECRET_KEY;