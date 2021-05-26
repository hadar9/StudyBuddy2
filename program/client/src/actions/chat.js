import { ClassSharp } from '@material-ui/icons';
import axios from 'axios';
import {
    MSG_SENT,
    MSG_RECEIVED,
    GROUPS_FOUND,
    MSG_ERROR,
    CHOOSE_GROUP,
    SET_RECIPIENT,
    SET_CURRENT_GROUP,
  } from '../actions/types';


  export const setcurrentgroupid = (data) => async (dispatch) =>
  {  
      try {
          dispatch({
              type: SET_CURRENT_GROUP,
              payload: data,
          });
      } catch (error) {
        dispatch({
          type: MSG_ERROR,
        });
      }
  }
  export const selectrecipient = (data) => async (dispatch) =>
  {  
      try {
          dispatch({
              type: SET_RECIPIENT,
              payload: data,
          });
      } catch (error) {
        dispatch({
          type: MSG_ERROR,
        });
      }
  }
  

export const choosegroup = (group) => async (dispatch) =>
{
    const config = {
        headers: {
        'Content-Type': 'application/json',
        },
    };
    const body = JSON.stringify({
        group,
    });

    try {
        const res = await axios.post('api/chat/choosegroup', body, config);
        dispatch({
            type: CHOOSE_GROUP,
            payload: res.data,
        });
    } catch (error) {
      dispatch({
        type: MSG_ERROR,
      });
    }
}

export const findgroups = (user) => async (dispatch) => {
    const config = {
        headers: {
        'Content-Type': 'application/json',
        },
    };
    const body = JSON.stringify({
        user,
    });
    try {
        const res = await axios.post('api/chat/findgroups', body, config);
        dispatch({
            type: GROUPS_FOUND,
            payload: res.data,
        });
    } catch (error) {
      dispatch({
        type: MSG_ERROR,
      });
    }
}  

export const send = (group,sender, message) => async (dispatch) => {
    console.log("in send action:",group,message);

    const config = {
        headers: {
        'Content-Type': 'application/json',
        },
    };
    const body = JSON.stringify({
        group,
        sender,
        message,
    });
    try {
        const res = await axios.post('api/chat/send', body, config);

      dispatch({
        type: MSG_SENT,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: MSG_ERROR,
      });
    console.log("error in send action");
    }

};

export const receive = ({ group }) => async (dispatch) => {
const config = {
    headers: {
    'Content-Type': 'application/json',
    },
};
const body = JSON.stringify({
    group
});
try {
    const res = await axios.post('api/chat/receive', body, config);

//   dispatch({
//     type: MSG_SENT,
//     payload: res.data,
//   });
} catch (error) {
//   dispatch({
//     type: MSG_ERROR,
//   });
}

};