export const selectUser = (user) =>{
    console.log("User is selected:", user.first);
    return{
        type:"USER_SELECTED",
        payload: user
    }
}