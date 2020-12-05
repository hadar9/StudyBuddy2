import axios from 'axios';
import {
  GET_USER_PROFILE,
  CLOSE_USER_PROFILE,
  PROFILE_ERROR,
  CLEAR_BUDDY,
  GET_PROFILES_WITH_USERNAME,
  CLOSE_PROFILES_WITH_USERNAME,
  GET_MYBUDDIES,
} from '../actions/types';

//Get all profiles with the username
export const getprofiels = (username) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({
      username,
    });

    const res = await axios.post('/api/buddies/profiels', body, config);
    dispatch({
      type: GET_PROFILES_WITH_USERNAME,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
//Get all my buddies
export const getmybuddies = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/buddies/mybuddies');
    dispatch({
      type: GET_MYBUDDIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//close all profiels
export const closeprofiles = () => async (dispatch) => {
  dispatch({
    type: CLOSE_PROFILES_WITH_USERNAME,
  });
};

//Get specific profile with the user id
export const getuserprofile = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({
      id,
    });

    const res = await axios.post('/api/buddies/userprofile', body, config);
    dispatch({
      type: GET_USER_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
//close spesfic user profiel
export const closeuserprofile = () => async (dispatch) => {
  dispatch({
    type: CLOSE_USER_PROFILE,
  });
};
/*
// add buddy
export const addbuddy = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({
      id,
    });

    const res = await axios.post('api/buddies/addbuddy', body, config);
    dispatch({
      type: ADD_BUDDY,
      payload: res.data,
    });
    dispatch(setalert('changes saved!', 'success'));
  } catch (error) {
    dispatch({
      type: BUDDIES_ERROR,
    });
  }
};

// confirm buddy
export const confirmbuddy = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({
      id,
    });

    const res = await axios.post('api/buddies/confirmbuddy', body, config);
    dispatch({
      type: CONFIRM_BUDDY,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: BUDDIES_ERROR,
    });
  }
};

// delete buddy
export const deletebuddy = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({
      id,
    });

    const res = await axios.post('api/buddies/deletebuddy', body, config);
    dispatch({
      type: DELET_BUDDY,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: BUDDIES_ERROR,
    });
  }
};
*/
