import React, { useEffect } from 'react';
// import React, {useEffect, createContext, useContext, useReducer } from "react";

import { fetchMembers } from '../../context/members/actions';
import MemberListItems from './MemberListItems';
// import { MembersActions } from "../../context/members/reducer";
import { useMembersDispatch } from '../../context/members/context';


const MemberList: React.FC = () => {
  console.log("Before Calling useMembersDispatch")
  const dispatchMembers = useMembersDispatch();
  console.log("dispatch members::-> " + dispatchMembers);
  useEffect( () => {
    fetchMembers(dispatchMembers)
  }, [])
  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      <MemberListItems />
    </div>
  );
};
export default MemberList;