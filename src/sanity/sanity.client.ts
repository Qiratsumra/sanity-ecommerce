import { createClient, type ClientConfig } from "next-sanity";

const projectId = process.env.NEXT_SANITY_PROJECT_ID
const dataset =process.env.NEXT_SANITY_DATASET

const SanityClient:ClientConfig = {
    projectId:'vursk5ej',
    dataset:dataset,
    apiVersion:'2024-12-28',
    useCdn:true
}
export default createClient(SanityClient)