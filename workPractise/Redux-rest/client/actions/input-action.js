import axios from 'axios';

export const takingInput = (input) => {
    return dispatch =>{
            dispatch({
                type: "TAKING_INPUT",
                 payload: input
            })
        axios.post("http://localhost:3000/user", {
            inputName:input.name,
            userName:input.username
        })
        .then((response) =>{
            //console.log(response.data);
        })
        .catch((error) =>{
        //    console.log(error);
            })
        
    }
    
}

