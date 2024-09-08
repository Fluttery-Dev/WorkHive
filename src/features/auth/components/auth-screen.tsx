"use client";
import { useState } from "react";
import { SignInFlow } from "../types";
import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";

export const AuthScreen = ()=>{
    const [state, setState] = useState<SignInFlow>("SignIn")
    
    return (
        <div className="h-full flex items-center justify-center bg-[#5C3B58] text-2xl font-bold">
            <div className="md:h-auto md:w-[420px]">
                {state == 'SignIn'? <SignInCard setState={setState}></SignInCard>: <SignUpCard setState={setState}></SignUpCard>}
            </div>
        </div>
    )
}