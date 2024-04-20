import { ProjectsActions } from "../../types";

import React, { createContext, useContext, useReducer } from "react";
import { reducer_projects, initialState, ProjectsState } from "./reducer";

type ProjectsDispatch = React.Dispatch<ProjectsActions>;

const ProjectsStateContext = createContext<ProjectsState | undefined>(undefined);
const ProjectsDispatchContext = createContext<ProjectsDispatch | undefined>(undefined);

export const ProjectsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer_projects, initialState);

    return (
        <ProjectsStateContext.Provider value={state}>
            <ProjectsDispatchContext.Provider value={dispatch}>
                {children}
            </ProjectsDispatchContext.Provider>
        </ProjectsStateContext.Provider>
    );
};

export const useProjectsState = () => useContext(ProjectsStateContext);
export const useProjectsDispatch = () => useContext(ProjectsDispatchContext);

console.log("useProjectsState in context -> " + useProjectsState);
console.log("useProjectsDispatch in context -> " + useProjectsDispatch);
