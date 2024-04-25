import {  CommentDetails, CommentListAvailableAction, CommentsActions } from "./types"


export interface CommentsState {
  comments: CommentDetails [];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export const initialState: CommentsState = {
    comments: [],
    isLoading: false,
    isError: false,
    errorMessage: ''
  };

  export const comment_reducer = (state: CommentsState = initialState, action: CommentsActions): CommentsState => {
    console.log("state:", state);
    console.log("Action:", action);
    
    switch (action.type) {
      case CommentListAvailableAction.FETCH_TASKS_COMMENTS_REQUEST:
        return {
          ...state,
          isLoading: true
        };
      case CommentListAvailableAction.FETCH_TASKS_COMMENTS_SUCCESS:
        console.log("payload:", action.payload)
        return {
          ...state,
          isLoading: false,
          comments: action.payload,
        };
      case CommentListAvailableAction.FETCH_TASKS_COMMENTS_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
          errorMessage: action.payload
        };
      case CommentListAvailableAction.ADD_COMMENT_REQUEST:
        return {
          ...state,
          isLoading: true
        };
      case CommentListAvailableAction.ADD_COMMENT_SUCCESS:
        return { ...state,isLoading:false  , comments: [...state.comments, action.payload] };
      case CommentListAvailableAction.ADD_COMMENT_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
          errorMessage: action.payload
        };
      default:
        return state;
    }
  }