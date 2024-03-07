import { API_ENDPOINT } from '../../config/constants';
// import { initialState, reducer_members } from './reducer';
import { MembersProvider } from "./context";

export const fetchMembers = async (members_dispatch: any) => {
  const token = localStorage.getItem("authToken") ?? "";

  try {
    console.log("Get Request");
    console.log("Dispach in member actions -> " + members_dispatch);
    // initialState.isLoading = true
    members_dispatch({ type: "FETCH_MEMBERS_REQUEST" });
    // let memmber_state = reducer_members(initialState, { type: "FETCH_MEMBERS_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
    });
    const data = await response.json();
    data.forEach((element: any) => {
      console.log("Data:" + element.name);  
    });
    // memmber_state.isLoading = false
    // memmber_state = reducer_members(memmber_state, { type: "FETCH_MEMBERS_SUCCESS", payload: data });
    members_dispatch({ type: "FETCH_MEMBERS_SUCCESS", payload: data });
  } catch (error) {
    console.log('Error fetching members:', error);
    members_dispatch({ type: "FETCH_MEMBERS_FAILURE", payload: 'Unable to load members' });
  }
};

export const addMember = async (members_dispatch: any, args: any) => {
  try {
    const token = localStorage.getItem("authToken") ?? "";
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
      body: JSON.stringify(args),
    });
    if (!response.ok) {
      throw new Error('Failed to create member');
    }
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message }
    }
    members_dispatch({ type: 'ADD_MEMBER_SUCCESS', payload: data });

    return { ok: true }
  } catch (error) {
    console.error('Operation failed:', error);
    return { ok: false, error }
  }
};

export const deleteMember = async (members_dispatch: any, id: number) => {
  try {
    const token = localStorage.getItem("authToken") ?? "";
    //send delete request
    const response = await fetch(`${API_ENDPOINT}/users/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
    });
    if (!response.ok) {
      throw new Error('Failed to delete member');
    }
    //check result
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message }
    }
    //update data on page
    members_dispatch({ type: 'DELETE_MEMBERS_SUCCESS', payload: id });
    return { ok: true }
  } catch (error) {
    console.error('Operation failed:', error);
    return { ok: false, error }
  }
};