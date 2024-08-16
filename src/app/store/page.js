// 'use client'
// import { useEffect } from "react"
import Container from "@/components/Container"
import Card from "@/components/Card"

export default async function Store(){
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const result = await data.json()



    // useEffect(() => {
    //     console.log(123)
    // }, [])
    return(
        <Container>
         <h1 className="text-[46px]"> Store</h1>  
         <div className="grid grid-cols-4 lg:grid-cols-2 gap-[10px]">{
            result?.map(() => (
         <Card />
        ))
         } </div>
            </Container>
    )
}