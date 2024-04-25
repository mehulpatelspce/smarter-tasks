import CommentList from "./CommentList";
import NewComment from "./NewComment";



const Comments = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight mr-2">Member's Comment</h2>
        <NewComment/>
      </div>
      <CommentList/>
    </>
  )
}
export default Comments;