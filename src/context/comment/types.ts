export type CommentDetails = {
    id: number;
    description: string,
    createdAt: string,
    updatedAt: string,
    task_id: number,
    commentorName: string
};

export type Comment = Omit<CommentDetails, "id" | "updatedAt">;

export type CommentDetailsPayload = {
    description: string;
};

export interface CommentsState {
    comments: Comment[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
}

export enum CommentListAvailableAction {
    FETCH_TASKS_COMMENTS_REQUEST = "FETCH_TASKS_COMMENTS_REQUEST",
    FETCH_TASKS_COMMENTS_FAILURE = "FETCH_TASKS_COMMENTS_FAILURE",
    FETCH_TASKS_COMMENTS_SUCCESS = "FETCH_TASKS_COMMENTS_SUCCESS",

    ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST",
    ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS",
    ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE",

}

export type CommentsActions =
    | { type: CommentListAvailableAction.FETCH_TASKS_COMMENTS_REQUEST }
    | { type: CommentListAvailableAction.FETCH_TASKS_COMMENTS_SUCCESS; payload: Comment[] }
    | { type: CommentListAvailableAction.FETCH_TASKS_COMMENTS_FAILURE; payload: string }
    | { type: CommentListAvailableAction.ADD_COMMENT_REQUEST }
    | { type: CommentListAvailableAction.ADD_COMMENT_SUCCESS }
    | { type: CommentListAvailableAction.ADD_COMMENT_FAILURE; payload: string };

export type CommentsDispatch = React.Dispatch<CommentsActions>;
