import React, { useEffect } from 'react';
import { fetchMembers } from '../../context/members/actions';
import MemberListItems from './MemberListItems';
import { useMembersDispatch } from '../../context/members/context';

const MemberList: React.FC = () => {
  const dispatchMembers = useMembersDispatch();
  useEffect(() => {
    fetchMembers(dispatchMembers)
  }, [])
  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      <MemberListItems />
    </div>
  );
};
export default MemberList;