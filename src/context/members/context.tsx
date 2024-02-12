import React, { createContext, useContext, useReducer } from "react";
import { reducer_members, initialState, MembersState, MembersActions } from "./reducer";

type MemberDispatch = React.Dispatch<MembersActions>;

export const MembersStateContext = createContext<MembersState | undefined>(undefined);
export const MembersDispatchContext = createContext<MemberDispatch | undefined>(undefined);

export const MembersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    console.log("Intial Member State:" + initialState);
    const [stateMember, dispatchMembers] = useReducer(reducer_members, initialState);
    return (
        <MembersStateContext.Provider value={stateMember}>
            <MembersDispatchContext.Provider value={dispatchMembers}>
                {children}
            </MembersDispatchContext.Provider>
        </MembersStateContext.Provider>
    );
};

export const useMembersDispatch = () => useContext(MembersDispatchContext);
export const useMembersState = () => useContext(MembersStateContext);

