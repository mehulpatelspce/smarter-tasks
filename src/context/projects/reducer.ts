import { ProjectsActions } from "../../types";

export interface Project {
    id: number;
    name: string;
}

export interface ProjectsState {
    projects: Project[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
}

// export type ProjectsActions = { type: 'FETCH_PROJECTS_REQUEST' }
//     | { type: 'FETCH_PROJECTS_SUCCESS'; payload: Project[] }
//     | { type: 'FETCH_PROJECTS_FAILURE'; payload: string }
//     | { type: 'ADD_PROJECT_SUCCESS'; payload: Project }

// Define the initial state
export const initialState: ProjectsState = {
    projects: [],
    isLoading: false,
    isError: false,
    errorMessage: ''
};
export const reducer_projects = (state: ProjectsState = initialState, action: ProjectsActions): ProjectsState => {
    console.log(action.type);
    switch (action.type) {
        case "FETCH_PROJECTS_REQUEST":
            console.log("Fetch Data 2:")
            return {
                ...state,
                isLoading: true
            };
        case "FETCH_PROJECTS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                projects: action.payload,
            };
        case "FETCH_PROJECTS_FAILURE":
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload
            };
        case 'ADD_PROJECT_SUCCESS':
            console.log("Project payload:", action.payload);
            return { ...state, projects: [...state.projects, action.payload] };
        default:
            return state;
    }
}