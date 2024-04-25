import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useCommentsDispatch } from "../../context/comment/context";
import { fetchComments } from "../../context/comment/actions";

const CommentContainer = () => {
    console.log("Comments Container:")
  const commentDispatch = useCommentsDispatch();
  let {projectID,  taskID } = useParams();
  useEffect(() => {
    fetchComments(commentDispatch, projectID ?? "", taskID ?? "");
  }, [commentDispatch]);
  return <Outlet />;
};

export default CommentContainer;