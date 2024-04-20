import { useMembersState, useMembersDispatch } from "../../context/members/context";
import { deleteMember } from "../../context/members/actions";
import { TrashIcon } from '@heroicons/react/24/outline'

export default function MemberListItems() {

  let members_state: any = useMembersState();

  const dispatchMembers = useMembersDispatch();
  
  const { members, isLoading, isError, errorMessage } = members_state
  console.log("Members:", members)

  if (isLoading && members.length === 0) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  const deleteMemberHandler =async (id : number) => {
    console.log(id);
    const response =await deleteMember(dispatchMembers,id);
    console.log(response);

  };

  return (
    <>
      {members.map((member: any) => (
        <div key={member.id}
          className="member block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 
          dark:hover:bg-gray-700" >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {member.name}<br/>
            {member.email}
          </h5>
          <button onClick={()=> { deleteMemberHandler(member.id) }}>
            <TrashIcon className="h-8 w-8 text-red-600 hover:bg-red-500 hover:text-white border-red-600 border-2 hover:border-red-700 p-1 rounded-md transition duration-1200" aria-hidden="true" />
          </button>
        </div>
      ))}
    </>
  );
}