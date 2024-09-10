import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

export const useCreateWorkspace = () => {
  const createWorkspaceMutation = useMutation(api.workspace.create);
  const [isPending, setIsPending] = useState(false);
  const [err, setErr] = useState<string >("");
  const [workSpaceId, setWorkspaceId] = useState<string>("");
const router = useRouter()
  const createWorkspace = useCallback(async (name: string, accessCode: string) => {
    setIsPending(true);
    try {
      const id = await createWorkspaceMutation({ name, accessCode });
      setWorkspaceId(id);
    } catch (error) {
      setErr(error as string || "Failed to create workspace");
    } finally {
      setIsPending(false);
    }
  }, [createWorkspaceMutation]);
  

  useEffect(() => {
    if (workSpaceId) {
      console.log("Workspace ID updated:", workSpaceId);
    }
  }, [workSpaceId]);

  return {
    createWorkspace,
    isPending,
    err,
    workSpaceId,
  };
};