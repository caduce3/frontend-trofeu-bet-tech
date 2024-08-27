import { ChevronDown, LogOut, UserRoundPen } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useQuery } from "@tanstack/react-query";
import { getProfileUser } from "@/api/get-profile-user";
import { useAuthRedirect } from "@/middlewares/authRedirect";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "./ui/skeleton";

const AccountMenu = () => {
    const navigate = useNavigate();
    const token = useAuthRedirect();

    if (!token) {
        return null;
    }

    const { data: profileUser, isLoading: isLoadingProfile } = useQuery({
        queryKey: ['profileUser'],
        queryFn: getProfileUser
    });

    const handleLogout = () => {
        localStorage.removeItem('authToken');  // Remove o token do armazenamento local
        navigate('/sign-in');  // Redireciona para a página inicial
    };

    return ( 
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex select-none items-center gap-2">
                    Trofeu.bet
                    <ChevronDown className="h-4 w-4"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                
                <DropdownMenuLabel className="flex flex-col">
                    <span>{isLoadingProfile ? <Skeleton className="h-4 w-40"/> : profileUser?.name }</span>
                    <span className="text-xs font-normal text-muted-foreground">{profileUser?.email}</span>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="cursor-pointer">
                    <UserRoundPen className="mr-2 h-4 w-4"/>
                    <span>Perfil de usuário</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-rose-500 dark:text-rose-400 cursor-pointer" onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4"/>
                    <span>Sair</span>
                </DropdownMenuItem>
                
            </DropdownMenuContent>
        </DropdownMenu>
     );
}
 
export default AccountMenu;
