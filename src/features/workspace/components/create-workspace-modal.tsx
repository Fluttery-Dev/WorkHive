"use client"
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { useState } from "react"

export default function CreateWorkspaceDialog(){
    const [modalState, setModalState] = useState(true);
    const [name, setName] = useState("");
    const [accessCode, setAccessCode] = useState("");

    const handleCreateWorkspace = (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

    }
    return (
        <Dialog open={modalState} onOpenChange={setModalState}>
            <DialogContent className="bg-inherit">
                <DialogHeader>
                    <DialogTitle>Create Workspace</DialogTitle>
                </DialogHeader>
                <form className="space-y-4" onSubmit={handleCreateWorkspace}>
                    <Input
                    placeholder="Workspace name e.g. 'Work', 'Personnel', 'Home'" 
                    required
                    autoFocus
                    minLength={3}
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                    disabled={false}
                    className="focus:border-black"
                    />
                    <Input
                    placeholder="AccessCode" 
                    required
                    minLength={3}
                    onChange={(e)=>setAccessCode(e.target.value)}
                    value={accessCode}
                    disabled={false}
                    className="focus:border-black"
                    />
                    <div className="flex justify-end">
                        <Button>Create</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}