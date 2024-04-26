import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCommentsDispatch } from "../../context/comment/context";
import { addComment, fetchComments } from "../../context/comment/actions";
import { CommentDetailsPayload } from "../../context/comment/types";

const NewCommentForm = () => {
  
  let { projectID, taskID } = useParams();
  let userID = JSON.parse(localStorage.getItem("userData") ?? "").id;
  
  const {
    register,
    handleSubmit,
    formState: { },
  } = useForm<CommentDetailsPayload>();

  const commentDispatch = useCommentsDispatch();

  const onSubmit: SubmitHandler<CommentDetailsPayload> = async (data) => {

    data['owner'] = userID;
    try {
      addComment(commentDispatch, projectID ?? "", taskID ?? "", data);
      fetchComments(commentDispatch, projectID ?? "", taskID ?? "");
    } catch (error) {
      console.error("Operation failed:", error);
    }
  };
  return (
    <>
                  <div className="mt-2">
                    <hr/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        type="text"
                        required
                        placeholder="Enter comment"
                        autoFocus
                        id="commentBox"
                        {...register('description', { required: true })}
                        className="border rounded-md py-2 px-3 m-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                      />

                      <button
                        type="submit"
                        id="addCommentBtn"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Submit
                      </button>
                      
                    </form>
                  </div>
                
    </>
  );
};
export default NewCommentForm;