import * as dotenv from "dotenv";
import path from "node:path";

dotenv.config();

export const API_KEY = process.env.API_KEY!; 
export const CA_CERT_PATH = path.resolve(process.env.NODE_EXTRA_CA_CERTS!);
export const BaseUrl= process.env.BASEURL!;