import Link from "next/link"
import Container from "../Container"

const Header = () => {
    return(
        <Container>
        <div className="py-[12px] px-[16px] flex gap-[20px] text-[24px] items-center">
<Link href={'/'}><img className="w-[24px]" src="/home.svg"/></Link>
<Link href={'/store'}>store</Link>
        </div>
        </Container>
    )
}

export default Header