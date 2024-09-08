import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { SignInFlow } from "../types"
import React, { useState } from "react"
import { useAuthActions } from "@convex-dev/auth/react"
import { TriangleAlert } from "lucide-react"

interface SignUpCardProps{
    setState: (state: SignInFlow) => void;
}

export const SignUpCard = ({setState}: SignUpCardProps)=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [err, setErr] = useState("");
    const {signIn} =  useAuthActions();

    const onPasswordSignUp = (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(password != confirmPassword){
            setErr("Passwords do not match");
            return;
        }
        setIsLoading(true);
        signIn("password", {name, email, password, flow:"signUp"})
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
                    Sign up to Continue
                </CardTitle>
                <CardDescription>
                    Use your email or another service to SignUp
            </CardDescription>
            </CardHeader>
            {!!err &&(
                <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
                    <TriangleAlert className="size-4"></TriangleAlert>
                    <p>{err}</p>
                </div>
            )}
            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5" onSubmit={onPasswordSignUp}>
                    <Input
                        disabled = {isLoading}
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                        placeholder="Full Name"
                        type="text"
                        required
                    ></Input>
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

                    <Input
                        disabled = {isLoading}
                        value={confirmPassword}
                        onChange={(e)=>{setConfirmPassword(e.target.value)}}
                        placeholder="Confirm Password"
                        type="password"
                        required
                    ></Input>
                    <Button size="lg" type="submit" className="w-full" disabled={isLoading}>
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
                    Already have an Account ? 
                    <span 
                    onClick={()=>setState("SignIn")}
                    className="text-sky-700 hover:underline cursor-pointer">Sign in</span>
                </p>
            </CardContent>
        </Card>
    )
}