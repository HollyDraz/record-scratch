import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//saga for updating song in API 


// function* updateSong(action){
//     try{
//         yield put ({type: 'UPDATE_SONG', payload: action.payload})
//         console.log('updated song', action.payload);
//         yield put ({type: 'UPDATE_SONG', payload: action.payload})
//     }catch{
//         console.log('an error occurred in song put')
//     }
// }

// function* updateSong(action) {
//     try {
//      yield axios.put/api

    
//     } catch {
//         console.log('error in update song ');
//       // Handle your errors here
//     }
// }



//will need this later!! this is where the dispatch will land 
function* songSaga() {
    yield takeLatest('UPDATE_SONG', updateSong);
  }
  


export default songSaga;