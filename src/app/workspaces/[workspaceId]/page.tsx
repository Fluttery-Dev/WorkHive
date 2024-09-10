interface WorkspaceIdPageProps{
    params:{
        workspaceId: string;
    }
}

export default function workSpaceIdPage ({params}:WorkspaceIdPageProps){
    return (
        <div>
            ID {params.workspaceId}
        </div>
    )
}