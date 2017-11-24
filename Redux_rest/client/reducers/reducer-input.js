export default function(state={name:""}, action){
    switch(action.type){
        case "TAKING_INPUT":
            return state={...state,name:action.payload}
            break;
        
    }
    return state;
}