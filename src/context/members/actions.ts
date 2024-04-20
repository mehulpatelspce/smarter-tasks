import { API_ENDPOINT } from '../../config/constants';


export const fetchMembers = async (members_dispatch: any) => {
  const token = localStorage.getItem("authToken") ?? "";

  try {
    // initialState.isLoading = true
    members_dispatch({ type: "FETCH_MEMBERS_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
    });
    const data = await response.json();
    console.log("Fecth Member Success = ", data)
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
    console.log("Add Member:" + data)
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message }
    }
    members_dispatch({ type: 'ADD_MEMBER_SUCCESS', payload: data.user });
    console.log("ADD_MEMBER_SUCCESS", data)
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