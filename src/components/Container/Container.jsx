


export function Container(props){

    const {children} = props
    return(
        <div className="n-auto max-w-[1200px] w-full">
            {children}
        </div>
    )
}