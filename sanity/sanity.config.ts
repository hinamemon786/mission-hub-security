import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { projectSchema } from "./schemas/project";
import { certificationSchema } from "./schemas/certification";
import { achievementSchema } from "./schemas/achievement";

export default defineConfig({
  name: "hina-portfolio",
  title: "Hina Memon Portfolio CMS",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [projectSchema, certificationSchema, achievementSchema],
  },
});
