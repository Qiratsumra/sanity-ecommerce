'use client'
import ProductDetails from "@/app/components/ProductDetails";
import sanityClient from "@/sanity/sanity.client";
import { groq } from "next-sanity";
import { useParams } from "next/navigation"

export default async function Product() {
    const {slug} = useParams();
    const data= await sanityClient.fetch(groq `*[_type=='product']`);
    
    const product = data.find((product:any)=>product.slug.current === slug);
    console.log(product);
    
  return (
    <ProductDetails product={product}/>
  )
}
