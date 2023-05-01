import { defineConfig } from "tinacms";
import { aboutFields } from "./templates";
import { galleryFields } from "./templates";
import { studiesFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "d171d09a-8b0f-43f0-a758-1d74eda480bb", // Get this from tina.io
  token: "c75731a6795b03eda1cef4ec8e3a622c12e98615", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [],
  },
});
