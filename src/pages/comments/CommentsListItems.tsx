import { useParams } from "react-router-dom";
import { useCommentsDispatch, useCommentsState } from "../../context/comment/context";

import { useEffect } from "react";
import { fetchComments } from "../../context/comment/actions";
import { useMembersState } from "../../context/members/context";
import { Member } from "../../context/members/reducer";

export default function CommentListItems() {
    const commentDispatch = useCommentsDispatch();

    let { projectID, taskID } = useParams();
    console.log("Project ID:--", projectID)
    console.log("Task Id:--", taskID)
    

    useEffect(() => {
        console.log("Fetch Comments ->");
        fetchComments(commentDispatch, projectID ?? "", taskID ?? "");
    }, [projectID, taskID, commentDispatch])

    let state: any = useCommentsState();
    const { comments, isLoading, isError, errorMessage } = state
    console.log(comments);


    if (comments.length === 0 && isLoading) {
        return <span>Loading...</span>;
    }

    if (isError) {
        return <span>{errorMessage}</span>;
    }

    if (comments.length === 0) {
        return <p className='mt-5 font-bold text-blue-700'>Add first comment</p>;
    }

    const selectedTaskComments = comments.filter(
        (task: any) => `${task.task_id}` === taskID);

    console.log("Commets:", selectedTaskComments)

    if (selectedTaskComments.length === 0) {
        return <p className='mt-5 font-bold text-blue-700'>Add first comment</p>;
    }

    const members : any = useMembersState()?.members;
    console.log("Members:", members);


    return (
        <>
            {comments.map((comment: any) =>{
                const commentMember = members.filter(
                    (member: any) => member.id === comment.owner);
                    
                return (
                    <div className='comment my-3 bg-white-200 rounded p-3'
                        key={`${comment.owner}-${comment.createdAt}`} >
                        <fieldset className="rounded-md border-2 border-black-800 ">
                            <legend>{`${commentMember[0].name} - ${comment.createdAt}`}</legend>
                            <p>{comment.description}</p>
                        </fieldset>
                    </div>
    
    
                );

            } )}
        </>
    );



}


