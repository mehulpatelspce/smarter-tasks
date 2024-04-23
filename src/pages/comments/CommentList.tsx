import { useMembersState } from '../../context/members/context';
import { useCommentsState } from '../../context/comment/context';
import { Comment } from '../../context/comment/types';
import { useTasksState } from '../../context/task/context';
import { useParams } from 'react-router-dom';
import { useProjectsState } from '../../context/projects/context';

export default function CommentList() {
    const commentState = useCommentsState();
    const projectState = useProjectsState();
    const taskState = useTasksState();
    let { projectID, taskID } = useParams();
    console.log("Project ID:", projectID)
    console.log("Task Id:", taskID)

    const { comments, isLoading, isError, errorMessage } = commentState;
  
    if (comments.length === 0 && isLoading) {
      return <p className='mt-3 font-bold text-yellow-400'>loading...</p>;
    }
  
    if (isError) {
      return <p className='mt-3 text-pink-500'>{errorMessage}</p>;
    }

    if (comments.length === 0) {
      return <p className='mt-5 font-bold text-blue-700'>Add first comment</p>;
    }
  
    const selectedTaskComments = commentState.comments.filter(
      (task) => `${task.task_id}` === taskID);

      console.log("Commets:", selectedTaskComments)
    
    
    
    // const getCommentorComment = (commentor : any) => {
    //   const assignee = memberState?.members?.filter(
    //     (member) => member.id === commentor
    //   )?.[0];
    //   return assignee?.name;
    // }
    
    return (
      <div className='mt-3'>
        <h2 className='font-bold'>Task Comments</h2>
        <NewComment />
        {selectedTaskComments.map((comment : Comment)=>{
          return(
            <div className='comment my-3 bg-slate-400 rounded p-3' key={`${comment.commentorName} - ${comment.createdAt}`} >
              <div className='flex justify-between'>
              <h2 className='font-semibold'>comment.commentorName</h2>
              </div>
              <p>{comment.description}</p>
            </div>
          )
        })}
      </div>
    )
  }