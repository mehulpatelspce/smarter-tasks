interface Member {
    id: number;
    name: string;
    email: string;
    password: string;
    
}
export interface MembersState {
    members: Member[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
}

export type MembersActions =
    | { type: 'FETCH_MEMBERS_REQUEST' }
    | { type: 'FETCH_MEMBERS_SUCCESS'; payload: Member[] }
    | { type: 'FETCH_MEMBERS_FAILURE'; payload: string }
    | { type: 'ADD_MEMBER_SUCCESS'; payload: Member }
    | { type: 'DELETE_MEMBER_SUCCESS'; payload: number }

export const initialState: MembersState = {
    members: [],
    isLoading: false,
    isError: false,
    errorMessage: ''
};

export const members_reducer = (members_state: MembersState = initialState,
    action: MembersActions): MembersState => {
        
        switch (action.type) {
        case "FETCH_MEMBERS_REQUEST":
            return {
                ...members_state,
                isLoading: true
            };
        case "FETCH_MEMBERS_SUCCESS":
            return {
                ...members_state,
                isLoading: false,
                members: action.payload,
            };
        case "FETCH_MEMBERS_FAILURE":
            return {
                ...members_state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload
            };
        case 'ADD_MEMBER_SUCCESS':
            console.log("Add Member = ", action.payload)
            return { 
                ...members_state, 
                members: [...members_state.members, 
                    action.payload] };

        case 'DELETE_MEMBER_SUCCESS':
            return { ...members_state, 
                members: members_state.members.filter(memeber => memeber.id !== action.payload) 
            };

        default:
            return members_state;
    }
}