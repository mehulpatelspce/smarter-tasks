import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCommentsDispatch } from "../../context/comment/context";
import { addComment, fetchComments } from "../../context/comment/actions";
import { CommentDetailsPayload } from "../../context/comment/types";

const NewComment = () => {
  let [isOpenNewComment, setIsOpenNewComment] = useState(true);

  let {projectID,  taskID } = useParams();
  // let navigate = useNavigate();
  let userID = JSON.parse(localStorage.getItem("userData")?? "").id;
  // Use react-hook-form to create form submission handler and state.
  const {
    register,
    handleSubmit,
    formState: {  },
  } = useForm<CommentDetailsPayload>();

  function closeModalNewComment() {
    setIsOpenNewComment(false);
    // navigate("../../");
  }

  const commentDispatch = useCommentsDispatch();
  
  const onSubmit: SubmitHandler<CommentDetailsPayload> = async (data) => {
    
    data['owner'] = userID;
    // data['task_id'] = taskID
    console.log("Data Load:", data)
    try {
      // Invoke the actual API and create a task.
      addComment(commentDispatch, projectID ?? "", taskID ?? "", data);
      // fetchComments(commentDispatch, projectID ?? "", taskID ?? "");
      

      closeModalNewComment();
    } catch (error) {
      console.error("Operation failed:", error);
    }
  };
  return (
    <>
      <Transition appear show={isOpenNewComment} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalNewComment}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create new comment
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        type="text"
                        required
                        placeholder="Enter comment"
                        autoFocus
                        id="commentBox"
                        // Register the comment field
                        {...register('description', { required: true })}
                        className="w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                      />
                      
                      <button
                        type="submit"
                        // Set an id for the submit button
                        id="addCommentBtn"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Submit
                      </button>
                      <button
                        onClick={closeModalNewComment}
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Cancel
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default NewComment;