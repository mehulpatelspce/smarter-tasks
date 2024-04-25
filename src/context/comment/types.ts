export type CommentDetails = {
    id: number;
    description: string,
    createdAt: string,
    updatedAt: string,
    task_id: number,
    owner: number
};

export type Comment = Omit<CommentDetails, "id" | "task_id" | "updatedAt" | "createdAt" >;

export type CommentDetailsPayload = {
    description: string;
    owner: string;
};



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
    | { type: CommentListAvailableAction.FETCH_TASKS_COMMENTS_SUCCESS; payload: CommentDetails[] }
    | { type: CommentListAvailableAction.FETCH_TASKS_COMMENTS_FAILURE; payload: string }
    | { type: CommentListAvailableAction.ADD_COMMENT_REQUEST }
    | { type: CommentListAvailableAction.ADD_COMMENT_SUCCESS , payload: CommentDetails}
    | { type: CommentListAvailableAction.ADD_COMMENT_FAILURE; payload: string };


