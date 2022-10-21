//function that yields the info for a specific song 



//reducer for song 
const selectedSong = (state = {}, action ) => {
    if(action.type === 'SET_SONG'){
        console.log('in details reducer', action.payload)
        return action.payload;
    }
    return state;

}

//reducer for update song 




  export default selectedSong;