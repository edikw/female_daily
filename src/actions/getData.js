import axios from 'axios';

export function doFetchData(data) {
  return {
    type: 'GET_DATA',
    data: data
  };
}

export function doSaveData(data){
    return{
        type: 'SAVE_DATA',
        data: data
    }
}

export function getData() {
  return dispatch => {
    return axios.get('https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp').then(res => {
      dispatch(doSaveData(res.data))
      return res.data
    });
  }
}