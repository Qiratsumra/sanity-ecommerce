import { defineConfig } from "sanity";
import { structureTool} from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemas } from "./schema/main";

const projectId:any = process.env.NEXT_SANITY_PROJECT_ID
const dataset:any =process.env.NEXT_SANITY_DATASET


export const SanityConfig =defineConfig({
    name:'default',
    title:'/studio',
    projectId:projectId,
    dataset:dataset,
    plugins:[structureTool(),visionTool()],
    basePath:'/studio',
    schema:{
        types:schemas
    }
    
})