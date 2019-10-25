
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const VIEWPOST = "VIEW_POST";
export const EDITPOST = "EDIT_POST";
export const DELETEPOST = "DELETE_POST";
export const SAVEPOST = "SAVE_POST";
export const NEWPOST = "NEW_POST";

export const VISIBILITY = {
  SHOWART: "SHOW_ART",
  SHOWPOST: "SHOW_POST"
}

export function login(username, password) {
  return {
    type: LOGIN, 
    username: username,
    password: password
  }
}

export function logout(username) {
  return {
    type: LOGOUT, 
    username: username
  }
}

export function viewpost(post_id) {
  return {
    type: VIEWPOST, 
    post_id: post_id
  }
}
export function editposet(post_id, title, content) {
  return {
    type: EDITPOST,
    title: title, 
    post_id: post_id,
    content: content
  }
}
export function deletepost(post_id) {
  return {
    type: DELETEPOST, 
    post_id: post_id
  }
}
export function savepost(post_id, title, content) {
  return {
    type: SAVEPOST,
    title: title, 
    post_id: post_id,
    content: content
  }
}
export function newpost(title, content) {
  return {
    type: NEWPOST,
    title: title,
    content: content
  }
}


