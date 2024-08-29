import { Separator } from "./ui/separator";
import { Dices, Home, Users } from "lucide-react";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme/theme-toggle";
import AccountMenu from "./account-menu";
import logo from "../assets/logoTrofeu.svg"

const Header = () => {
    return ( 
        <div className="border-b">
            <div className="flex h-16 items-center gap-6 px-6">
                {/* <div>LOGO</div> */}
                <div>
                    <img src={logo} alt="Trofeu.bet" className="h-6"/>
                </div>
                <Separator orientation="vertical" className="h-6"/>

                <nav className="flex items-center space-x-4 lg:space-x-6">
                    <NavLink to="/">
                        <Home className="h-4 w-4"/>
                        Início
                    </NavLink>
                    <NavLink to="/players">
                        <Dices  className="h-4 w-4"/>
                        Jogadores
                    </NavLink>
                    <NavLink to="/a">
                        <Users  className="h-4 w-4"/>
                        Usuários
                    </NavLink>
                </nav>

                <div className="ml-auto flex items-center gap-2">
                    <ThemeToggle />
                    <AccountMenu />
                </div>
            </div>
        </div>
     );
}
 
export default Header;