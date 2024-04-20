import { Member } from "./context/members/reducer";
import { Project } from "./context/projects/reducer";

export type MembersActions =
    | { type: 'FETCH_MEMBERS_REQUEST' }
    | { type: 'FETCH_MEMBERS_SUCCESS'; payload: Member[] }
    | { type: 'FETCH_MEMBERS_FAILURE'; payload: string }
    | { type: 'ADD_MEMBER_SUCCESS'; payload: Member }
    | { type: 'DELETE_MEMBER_SUCCESS'; payload: number }


export type ProjectsActions = { type: 'FETCH_PROJECTS_REQUEST' }
    | { type: 'FETCH_PROJECTS_SUCCESS'; payload: Project[] }
    | { type: 'FETCH_PROJECTS_FAILURE'; payload: string }
    | { type: 'ADD_PROJECT_SUCCESS'; payload: Project }