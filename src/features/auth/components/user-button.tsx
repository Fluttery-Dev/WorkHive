import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "../api/user-current-user";
import { Loader, LogOut } from "lucide-react";
import { useAuthActions } from "@convex-dev/auth/react";

export default function UserButton(){
    const {data, isLoading} = useCurrentUser();
    const {signOut} = useAuthActions();

    if(isLoading){
        return <Loader className="size-4 animate-spin text-muted-foreground"></Loader>
    }

    if(!data){
        return null;
    }

    const {name, image, email} = data;
    const avatarFallback = name?.charAt(0).toUpperCase();
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="outline-none relative">
                <Avatar className="size-10 hover:opacity-75 transition">
                    <AvatarImage src={image} alt={name}>
                    </AvatarImage>
                    <AvatarFallback className="bg-sky-500 "> {avatarFallback}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" side="right" className="w-60">
                <DropdownMenuItem onClick={signOut}>
                    <LogOut className="size-4 mr-2"></LogOut>
                    Log Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}