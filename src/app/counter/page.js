'use client'
import { useStore } from "zustand"
import counterStore from "@/stores/counterStore"
import Container from "@/components/Container"

export default function Counter(){

    const {count, increment, decrement} = useStore(counterStore)
    console.log(count, increment, decrement)

    return(
        <Container>
            <div>
                <p className="text-[36px]">Counter: {count}</p>
                <div className="mt-[20px] flex gap-[12px]">
                    <button 
                        className="px-4 py-2 bg-blue-500 rounded text-white"
                        onClick={increment}
                    >
                        Increment
                    </button>
                    <button 
                        className="px-4 py-2 bg-red-500 rounded text-white"
                        onClick={decrement}    
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </Container>
    )
}