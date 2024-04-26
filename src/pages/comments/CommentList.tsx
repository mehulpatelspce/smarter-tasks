import CommentListItems from './CommentsListItems';

const CommentList: React.FC = () => {

  return (
    <div className="m-5">
      <h2 className='text-m font-bold text-l text-blue-800'>Comments</h2>
      <CommentListItems />
    </div>
  );
};
export default CommentList;

