import { AttractionsTwoTone, Title } from "@mui/icons-material";

function* selectedSong(action){
    try{
        const details = yield axios.get(`/api/song/${action.payload}`);
        console.log('SONG DETAILS', song.data);
        yield put ({type: 'SET_TITLE', payload: title.data})
        yield put ({type: 'SET_ARTIST', payload: artist.data })
    }catch{
        console.log('an error occurred in details getter')
    }
}

  
  // user will be on the redux state at:
  // state.user
  export default selectedSong;