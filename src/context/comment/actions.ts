import { API_ENDPOINT } from '../../config/constants';
import { CommentListAvailableAction } from "./types"


export const fetchComments = async (
    dispatch: any,
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
        console.log("Comments fetch payload:", data);
        dispatch({
            type: CommentListAvailableAction.FETCH_TASKS_COMMENTS_SUCCESS,
            payload: data
        });

    } catch (error) {
        console.error("Operation failed:", error);
        dispatch({
            type: CommentListAvailableAction.FETCH_TASKS_COMMENTS_FAILURE,
            payload: "Unable to load comments",
        });
    }
};

export const addComment = async (dispatch: any, projectID: string, taskID: string, arg: any
) => {
    const token = localStorage.getItem("authToken") ?? "";
    try {

        dispatch({ type: CommentListAvailableAction.ADD_COMMENT_REQUEST });
        // arg['owner'] = userID
        console.log("Arg:", arg);
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
        const data = await response.json();
        console.log("Add comment Response:", data);

        if (!response.ok) {
            throw new Error("Error: Failed to create comment");
        }

        dispatch({ type: CommentListAvailableAction.ADD_COMMENT_SUCCESS, payload: data});
        
        // fetchComments(dispatch, projectID, taskID);

       

    } catch (error) {
        console.error("Error: Filed to create comment:", error);
        dispatch({
            type: CommentListAvailableAction.ADD_COMMENT_FAILURE,
            payload: "Error: Unable to create comment",
        });
    }
};
