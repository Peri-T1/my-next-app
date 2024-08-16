'use client'
import { useStore } from "zustand"
import jokeStore from "@/stores/jokeStore"
import { useEffect } from "react"


export default function Joke(){

    const {jokes, loading, error, fetchJokes} = useStore(jokeStore)
    useEffect(() => {
        fetchJokes()
    }, [])

    if(loading){
    return       <p> loading...</p>
    }
    if (error){
        return <p>{error}</p>
            }
            return(
        <div>
            <p className="text-[36px]">Jokes</p>
            {jokes?.map((item, index) => (
                <div key={index}>
                    <p>{item.setup}</p>
                    <br />
                    <strong>{item.delivery}</strong>
                </div>
            ))}

        </div>
    )
}