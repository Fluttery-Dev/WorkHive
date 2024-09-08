import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { SignInFlow } from "../types"
import { useState } from "react"
import { useAuthActions } from "@convex-dev/auth/react"
import { TriangleAlert } from "lucide-react"

interface SignInCardProps{
    setState: (state: SignInFlow) => void;
}

export const SignInCard = ({setState}: SignInCardProps)=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState("");
    const {signIn} =  useAuthActions();

    const handlePasswordSignIn = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setIsLoading(true);
        signIn("password", {email, password, flow:"signIn"})
        .catch(()=> {setErr("something went wrong")})
        .finally(()=>{setIsLoading(false)});
    }
    const handleProviderSignIn = (value: "google" | "github")=>{
        setIsLoading(true);
        signIn(value).finally(()=>setIsLoading(false));
    }

    return (
        <Card className="h-full w-full p-8">
            <CardHeader className="px-0 pt-0">
                <CardTitle>
                    Login to Continue
                </CardTitle>
                <CardDescription>
                    Use your email or another service to login
            </CardDescription>
            </CardHeader>
            {!!err &&(
                <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
                    <TriangleAlert className="size-4"></TriangleAlert>
                    <p>{err}</p>
                </div>
            )}
            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5" onSubmit={handlePasswordSignIn}>
                    <Input
                        disabled = {isLoading}
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        placeholder="Email"
                        type="email"
                        required
                    ></Input>

                    <Input
                        disabled = {isLoading}
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        placeholder="Password"
                        type="password"
                        required
                    ></Input>
                    <Button size="lg" type="submit" className="w-full" disabled={isLoading} >
                        Continue
                    </Button>
                </form> 
                <Separator></Separator>
                <div className="space-y-2">
                    <Button
                        size="lg" 
                        type="submit" 
                        onClick={()=>{handleProviderSignIn("google")}}
                        variant="outline"
                        className="w-full relative " 
                        disabled={isLoading} >
                        <FcGoogle className="size-5 absolute top-3 left-2.5"></FcGoogle>    Continue with Google
                    </Button>
                    <Button
                        size="lg" 
                        type="submit" 
                        onClick={()=>{handleProviderSignIn("github")}}
                        variant="outline"
                        className="w-full relative " 
                        disabled={isLoading} >
                        <FaGithub className="size-5 absolute top-3 left-2.5"/>  Continue with Github
                        
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                    Don't have an Account ? 
                    <span 
                    onClick={()=>setState("SignUp")}
                    className="text-sky-700 hover:underline cursor-pointer">Sign up</span>
                </p>
            </CardContent>
        </Card>
    )
}