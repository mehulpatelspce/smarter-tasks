import { useMembersState } from "../../context/members/context";
import { initialState } from "../../context/members/reducer";

export default function MemberListItems() {

  let members_state: any = useMembersState();
  console.log("Member State:::->" + members_state);
  
  if (members_state == undefined) {
    members_state = initialState;
  }
  console.log("Member State:->" + members_state);

  const { members, isLoading, isError, errorMessage } = members_state
  console.log("Member List Items : " + isLoading);
  console.log("Member State:->" + members_state.members);

  if (isLoading && members.length === 0) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <>
      {members.map((member: any) => (
        <div key={member.id}
          className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {member.name}
            {member.email}
          </h5>
        </div>
      ))}
    </>
  );
}