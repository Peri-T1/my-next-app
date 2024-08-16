import Header from "@/components/Header"



export default async function Home() {
  


  console.log(result, 'result')
  return (
  <div className="flex items-center gap-[20px] mt-[40px] flex-col">
  <p className="text-[36px]">{result.title}</p>
  <p className="text-xl">some content</p>
  
  </div>
  )
}
