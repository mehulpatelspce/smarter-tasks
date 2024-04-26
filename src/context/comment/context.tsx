import React, { createContext, useContext, useReducer } from "react";
import { CommentsActions } from "./types"
import { initialState, CommentsState, comment_reducer } from "./reducer";

type CommentsDispatch = React.Dispatch<CommentsActions>;

const CommentsStateContext = createContext<CommentsState | undefined>(undefined);
const CommentsDispatchContext = createContext<CommentsDispatch | undefined>(undefined);
// const CommentsStateContext = createContext<CommentsState>(initialState);
// const CommentsDispatchContext = createContext<CommentsDispatch>(() => {});

export const CommentsProvider: React.FC<React.PropsWithChildren> = ({ children }) =>
    {
      const [state, dispatch] = useReducer(comment_reducer, initialState);
      return (
        <CommentsStateContext.Provider value={state}>
          <CommentsDispatchContext.Provider value={dispatch}>
            {children}
          </CommentsDispatchContext.Provider>
        </CommentsStateContext.Provider>
      );
    };
    
    export const useCommentsState = () => useContext(CommentsStateContext);
    export const useCommentsDispatch = () => useContext(CommentsDispatchContext);
    