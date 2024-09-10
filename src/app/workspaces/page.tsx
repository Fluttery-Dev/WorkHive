"use client"
import { Button } from "@/components/ui/button";
import { useGetWorkspaces } from "@/features/workspace/api/use-get-workspaces";
import CreateWorkspaceDialog from "@/features/workspace/components/create-workspace-modal";
import { useModalStateAtom } from "@/store/atoms";
import { Loader } from "lucide-react";

export default function Workspaces(){
    const {data, loading} = useGetWorkspaces();
    const [modalState, setModalState] = useModalStateAtom();
    if(loading){
        return <Loader></Loader>
    }
    if(data?.length == 0){
        setModalState(true);
    }

    if(modalState){
        return <CreateWorkspaceDialog></CreateWorkspaceDialog>
    }
    
    return (
        <div>
          {data!.map((workspace) => (
            <div key={workspace._id}>
                <h2>{workspace._id}</h2>
                <h2>{workspace.name}</h2>
            </div>
          ))}
          <Button
          onClick={()=>{setModalState(true); console.log("fk u")}}
          >Create Workspace</Button>
        {/* <CreateWorkspaceDialog></CreateWorkspaceDialog> */}
        </div>
      );
    
}