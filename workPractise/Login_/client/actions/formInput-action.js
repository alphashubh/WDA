import axios from 'axios';
import {browserHistory} from 'react-router';

export const formInputData = (input) => {
    return dispatch => {

        axios.post("http://localhost:3000/userdetail", {
            type: input.productType,
            description: input.productDescription
        })
            .then((response) => {
                console.log("post ************", response.data);
                alert("Error Sent successfully")
               // browserHistory.push('/timeline');
            })
            .catch((error) => {
                //    console.log(error);
            })

    }

}