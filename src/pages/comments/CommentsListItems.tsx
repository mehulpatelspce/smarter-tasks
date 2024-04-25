import { useParams } from "react-router-dom";
import { useCommentsState } from "../../context/comment/context";
import NewComment from "./NewComment";

export default function CommentListItems() {

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

    return (
        <>
            {comments.map((comment: any) => (
                <div className='comment my-3 bg-slate-400 rounded p-3'
                    key={`${comment.owner} - ${comment.createdAt}`} >
                    <fieldset className="border">
                        <legend>{`${comment.owner} - ${comment.createdAt}`}</legend>
                        <p>{comment.description}</p>
                    </fieldset>
                </div>


            ))}
        </>
    );


    // return (
    //     <>
    //         {comments.map((comment: any) => (
    //             <div key={comment.id} className='comment my-3 bg-slate-400 rounded p-3 block p-6 border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'                               >
    //                 {/* <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
    //                     {comment.description}
    //                 </h5> */}
    //                 <div className='flex justify-between'>
    // //                         <h2 className='font-semibold'>{`${comment.owner}`}</h2>
    // //                     </div>
    // //                     <p>{comment.description}</p>
    //             </div>



    //         ))}
    //     </>
    // );

    // return (
    //     <div className='mt-3'>
    //         <h2 className='font-bold'>Task Comments</h2>

    //         {selectedTaskComments.map((comment: any) => {
    //             return (
    //                 <div className='comment my-3 bg-slate-400 rounded p-3'
    //                     key={`${comment.owner} - ${comment.createdAt}`} >
    //                     <fieldset className="border">
    //                         <legend>{`${comment.owner} - ${comment.createdAt}`}</legend>

    //                         <p>{comment.description}</p>
    //                     </fieldset>

    //                 </div>
    //             )
    //         })}
    //     </div>
    // );


}


