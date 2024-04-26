import { useParams } from "react-router-dom";
import { useCommentsDispatch, useCommentsState } from "../../context/comment/context";

import { useEffect } from "react";
import { fetchComments } from "../../context/comment/actions";
import { useMembersState } from "../../context/members/context";

const formatCommentDate = (commentDate: string) => {
    const commentDateObject : Date= new Date(commentDate);
    const year = commentDateObject.getFullYear();
    const month = String(commentDateObject.getMonth() + 1);
    const day = String(commentDateObject.getDate());
    return `${day}-${month}-${year}`;
  };

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

    const members: any = useMembersState()?.members;
    console.log("Members:", members);


    return (
        <>
            {/* <div className="mt-4 ">
                <Link 
                    to={`comments/new`}
                >Add New Comment</Link>
            </div> */}
            <b>List of Comments:</b>
            {comments.map((comment: any) => {
                const commentMember = members.filter(
                    (member: any) => member.id === comment.owner);

                return (
                    <div className='comment my-3 bg-white-200 rounded p-3'
                        key={`${comment.owner}-${comment.createdAt}`} >
                        <fieldset className="rounded-md border-2 border-black-800 ">
                            <legend>{`${commentMember[0].name}: ${formatCommentDate(comment.createdAt)}`}</legend>
                            <p>{comment.description}</p>
                        </fieldset>
                    </div>


                );

            })}
        </>
    );



}


