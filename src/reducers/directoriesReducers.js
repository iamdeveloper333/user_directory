export function directoriesReducers 
(state={directories:[]}, action){
  switch(action.type){
    case "GET_DATA":
    return {directories:[...action.payload]}
    break;
    case "POST_DATA":
    return {directories:[...state.directories,...action.payload]}
    break;
     case "DELETE_DATA":
     const currentDataToDelete = [...state.directories];
    const ItemToDelete = 
    currentDataToDelete.find(
      function(data){
        return data.username === action.payload;
      }
    )
    let FinalArr = [...currentDataToDelete.slice()].filter(function(val){
      return val!==ItemToDelete
    })
    return {directories: FinalArr}
    break;

    case "UPDATE_DATA":
    const currentDataToUpdate = [...state.directories]
    
    break;
 
  }
  return state
}
