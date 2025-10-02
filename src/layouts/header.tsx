import { GoPerson } from "react-icons/go"
import { Button } from "../components/button"
import { Container } from "../widgets/container"
import Logo from "./../assts/logo.svg"
import { Link } from "react-router"
import { IoCartOutline } from "react-icons/io5"

export const Header = () => {
    return <header
        className="pt-[44px] pb-[25px]"
    >
        <Container>
            <div className="flex items-center justify-between">
                <Link to={"/"} className="inline-block w-[100px]">
                    <img src={Logo} alt="Логотип"
                    />
                </Link>

                <div className="space-x-2">
                    <Button color="blue">
                        <GoPerson />
                        <span>
                            Войти
                        </span>
                    </Button>

                    <Link to={"/cart"}>
                        <Button color="white">
                            <IoCartOutline />
                            <span>
                                Корзина
                            </span>
                        </Button>
                    </Link>
                </div>
            </div>
        </Container>
    </header>
}