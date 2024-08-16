


export default function Card(props){

    const {id, title} = props

    return(
        <div className="
        w-full 
        md:max-w-[310px] 
        lg:max-w-[500px]
        xl:max-w-[310px]  
        max-w-[375px]
        min-w-[140px] 
        h-[200px] 
        border-solid border-[1px] border-[#000]"> 
            <p>{title}</p>
            <p>{id}</p>
        </div>
    )
}