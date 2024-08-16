import { createStore } from "zustand";

export const jokeStore = createStore((set) => ({
    jokes: [],
     loading: false,
     error: null,
     fetchJokes: async () => {
        set({loading: true, error: null})
        try{
        const responce = await fetch('https://v2.jokeapi.dev/joke/Any?amount=10&type=twopart&safe-mode')
        const data = await responce.json()
        set({jokes: data.jokes, loading: false})
        }catch(error){
            set({error:error, loading: false})
        
     }
    }
}))