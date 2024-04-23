import { API_ENDPOINT } from '../../config/constants';
import { CommentsDispatch, CommentListAvailableAction } from "./types"


export const fetchComments = async (
    dispatch: CommentsDispatch,
    projectID: string,
    taskID: string,
) => {

    const token = localStorage.getItem("authToken") ?? "";
    try {
        dispatch({ type: CommentListAvailableAction.FETCH_TASKS_COMMENTS_REQUEST });
        const response = await fetch(
            `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error("Failed to get comments");
        }

        const data = await response.json();
        dispatch({
            type: CommentListAvailableAction.FETCH_TASKS_COMMENTS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        console.error("Operation failed:", error);
        dispatch({
            type: CommentListAvailableAction.FETCH_TASKS_COMMENTS_FAILURE,
            payload: "Unable to load comments",
        });
    }
};

export const addComment = async (
    dispatch: CommentsDispatch,
    projectID: string,
    taskID: string,
    arg: any
) => {
    const token = localStorage.getItem("authToken") ?? "";
    try {

        dispatch({ type: CommentListAvailableAction.ADD_COMMENT_REQUEST });

        const response = await fetch(
            `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(arg),
            }
        );

        if (!response.ok) {
            throw new Error("Error: Failed to create comment");
        }

        dispatch({ type: CommentListAvailableAction.ADD_COMMENT_SUCCESS, });
        fetchComments(dispatch, projectID, taskID);
    } catch (error) {
        console.error("Error: Filed to create comment:", error);
        dispatch({
            type: CommentListAvailableAction.ADD_COMMENT_FAILURE,
            payload: "Error: Unable to create comment",
        });
    }
};
