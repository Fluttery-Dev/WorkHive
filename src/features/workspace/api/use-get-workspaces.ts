import { useQuery } from "convex/react"
import { api } from "../../../../convex/_generated/api"

export const useGetWorkspaces = ()=>{
    const data = useQuery(api.workspace.get);
    const loading = data === undefined;
    return {data, loading};
}