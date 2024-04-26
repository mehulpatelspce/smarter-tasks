import { useParams } from "react-router-dom";
import { useCommentsDispatch } from "../../context/comment/context";
import CommentListItems from "./CommentsListItems";
import NewComment from "./NewComment";
import { useEffect } from "react";
import { fetchComments } from "../../context/comment/actions";

const Comments = () => {
  const commentDispatch = useCommentsDispatch();

    let { projectID, taskID } = useParams();
    console.log("Project ID:--", projectID)
    console.log("Task Id:--", taskID)

  useEffect(() => {
    console.log("Fetch Comments after add->");
    fetchComments(commentDispatch, projectID ?? "", taskID ?? "");
}, [projectID, taskID, commentDispatch]);


  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight mr-2">Member's Comment</h2>
        <NewComment/>
      </div>
      <CommentListItems/>
    </>
  )
}
export default Comments;