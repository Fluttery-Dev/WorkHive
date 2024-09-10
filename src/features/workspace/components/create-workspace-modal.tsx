"use client"
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { useState } from "react"
import { useCreateWorkspace } from "../api/use-create-workspace";
import { TriangleAlert } from "lucide-react";
import { useRouter } from "next/navigation";
import { useModalStateAtom } from "@/store/atoms";

export default function CreateWorkspaceDialog(){
    const router = useRouter();
    const [modalState, setModalState] = useModalStateAtom();
    const {createWorkspace, workSpaceId, isPending, err} = useCreateWorkspace();
    const [name, setName] = useState("");
    const [accessCode, setAccessCode] = useState("");

    const handleCreateWorkspace = async(e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        await createWorkspace(name, accessCode);
        router.push(`/workspaces/${workSpaceId}`)
    }
    return (
        <Dialog open={modalState} onOpenChange={setModalState}>
            <DialogContent className="bg-inherit">
                <DialogHeader>
                    <DialogTitle>Create Workspace</DialogTitle>
                </DialogHeader>
                {!!err && (
                    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
                    <TriangleAlert className="size-4"></TriangleAlert>
                    <p>{err}</p>
                </div>
                )}
                <form className="space-y-4" onSubmit={handleCreateWorkspace}>
                    <Input 
                    placeholder="Workspace name e.g. 'Work', 'Personnel', 'Home'" 
                    required
                    autoFocus
                    minLength={3}
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                    disabled={isPending}
                    className="focus:border-black"
                    />
                    <Input
                    placeholder="AccessCode" 
                    required
                    minLength={3}
                    onChange={(e)=>setAccessCode(e.target.value)}
                    value={accessCode}
                    disabled={isPending}
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