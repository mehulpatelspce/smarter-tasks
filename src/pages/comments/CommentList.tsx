import { useCommentsDispatch, useCommentsState } from '../../context/comment/context';
import { useParams } from 'react-router-dom';
import { fetchComments } from '../../context/comment/actions';
import { useEffect } from 'react';
import CommentListItems from './CommentsListItems';


const CommentList: React.FC = () => {

  const commentDispatch = useCommentsDispatch();

  let { projectID, taskID } = useParams();
  console.log("Project ID:", projectID)
  console.log("Task Id:", taskID)

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
  useEffect(() => {
    fetchComments(commentDispatch, projectID ?? "", taskID ?? "");
  }, [])


  return (
    <div className="m-5">
      <CommentListItems />
    </div>
  );
};
export default CommentList;

