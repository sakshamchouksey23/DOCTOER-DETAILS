import { hc } from "hono/client";
import { AppType } from "@/app/api/[[...route]]/route";

let url: string;
if (process.env.NODE_ENV === 'production') url = 'https://doctors.vercel.app/'
else url = 'http://localhost:3000/'


// export const client = hc<AppType>('https://mandara-lms.vercel.app/');
export const client = hc<AppType>(url);
