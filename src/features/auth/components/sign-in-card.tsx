import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { SignInFlow } from "../types"
import { useState } from "react"

interface SignInCardProps{
    setState: (state: SignInFlow) => void;
}

export const SignInCard = ({setState}: SignInCardProps)=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            
            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5">
                    <Input
                        disabled = {false}
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        placeholder="Email"
                        type="email"
                        required
                    ></Input>

                    <Input
                        disabled = {false}
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        placeholder="Password"
                        type="password"
                        required
                    ></Input>
                    <Button size="lg" type="submit" className="w-full" disabled={false} >
                        Continue
                    </Button>
                </form> 
                <Separator></Separator>
                <div className="space-y-2">
                    <Button
                        size="lg" 
                        type="submit" 
                        onClick={()=>{}}
                        variant="outline"
                        className="w-full relative " 
                        disabled={false} >
                        <FcGoogle className="size-5 absolute top-3 left-2.5"></FcGoogle>    Continue with Google
                    </Button>
                    <Button
                        size="lg" 
                        type="submit" 
                        onClick={()=>{}}
                        variant="outline"
                        className="w-full relative " 
                        disabled={false} >
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