import { createClient, type ClientConfig } from "next-sanity";

const SanityClient:ClientConfig = {
    projectId:'vursk5ej',
    dataset:'production',
    apiVersion:'2024-12-28',
    useCdn:true
}
export default createClient(SanityClient)