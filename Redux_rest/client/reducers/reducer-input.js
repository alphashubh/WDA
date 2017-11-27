export default function(state={}, action){
    switch(action.type){
        case "TAKING_INPUT":
            return state=Object.assign({},state,action.payload); 
            break;
        
    }
    return state;
}