
export function postDirectories(data){
  return {
          type:"POST_DATA",
          payload: data
        }
}
export function getDirectories(data){
  return {
          type:"GET_DATA",
          payload: data
        }
}
export function deleteDirectories(username){
  return {
          type:"DELETE_DATA",
          payload: username
        }
}
export function updateDirectories(data){
  return {
          type:"UPDATE_DATA",
          payload: data
        }
}
