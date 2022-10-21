import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// function* songSaga(action){
//     try{
//         const song = yield axios.get(`/api/song/${action.payload}`);
//         console.log('SONG DETAILS', song.data);
//         yield put ({type: 'SET_SONG', payload: song.data})
 
//     }catch{
//         console.log('an error occurred in song getter')
//     }
// }


//will need this later!! (for delete)
function* songSaga() {
    // yield takeLatest('REGISTER', songSaga);
  }
  


export default songSaga;