import {atom, useAtom} from "jotai"
const modalStateAtom = atom(false);

export const useModalStateAtom = ()=>{
    return useAtom(modalStateAtom);
}