import { Suspense } from "react";
import MemberList from "./MemberList";
import NewMember from "./NewMember";
import ErrorBoundary from "../../components/ErrorBoundary";

const Members = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight mr-2">Members</h2>
        <NewMember />
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <MemberList />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
export default Members;