import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//saga for updating song in API 


// function* updateSong(action){
//     try{
//          yield axios.put(`/api/song/${action.payload}`);
//         console.log('updated song', action.payload);
//         yield put ({type: 'SET_SONG', payload: action.payload})
//     }catch{
//         console.log('an error occurred in song put')
//     }
// }




//will need this later!! this is where the dispatch will land 
function* songSaga() {
    // yield takeLatest('UPDATE_SONG', updateSong);
  }
  


export default songSaga;