import { join } from "path"
import { config } from "dotenv"

config({
  path: join(__dirname, "../../.env"),
})

export const firebaseApiKey = process.env.REACT_APP_FIREBASE_API_KEY
export const firebaseProjectId = process.env.REACT_APP_FIREBASE_PROJECT_ID