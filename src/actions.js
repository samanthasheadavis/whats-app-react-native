import { getMessages, postMessage } from './services/api';

export const actionTypes = {
  SUBSCRIBE_GET_MESSAGES_TO_FIREBASE: 'SUBSCRIBE_GET_MESSAGES_TO_FIREBASE',
  UNSUBSCRIBE_GET_MESSAGES_FROM_FIREBASE: 'UNSUBSCRIBE_GET_MESSAGES_FROM_FIREBASE',
  UPDATE_MESSAGES: 'UPDATE_MESSAGES',
  POST_MESSAGE: 'POST_MESSAGE',
  POST_MESSAGE_SUCCESS: 'POST_MESSAGE_SUCCESS',
  POST_MESSAGE_ERROR: 'POST_MESSAGE_ERROR'
}

 export function addMessage(message){
   return {
     type: actionTypes.ADD_MESSAGE,
     payload: {
       message,
       incoming: false
     }
   }
 }

 export const postMessageToServer = (message) => (dispatch) => {
   dispatch({
     type: actionTypes.POST_MESSAGE,
     payload: {
       message,
       incoming: false
     }
   })
   postMessage(message)
     .then(() => {
       dispatch({
         type: actionTypes.POST_MESSAGE_SUCCESS
       })
     })
     .catch((error) => {
       dispatch({
         type: actionTypes.POST_MESSAGE_ERROR,
         error
       })
     });
 }

 export const subscribeToGetMessagesFromServer = () => (dispatch) => {
     dispatch({
       type: actionTypes.SUBSCRIBE_GET_MESSAGES_TO_FIREBASE
     })
     const unsubscribeFn = getMessages((snapshot) => {
       dispatch({
         type: actionTypes.UPDATE_MESSAGES,
         payload: {
           messages: Object.values(snapshot.val()),
           unsubscribeFn
         }
       });
     })
 };

 export const unSubscribeToGetMessagesFromServer = () =>
(dispatch, getState) => {
   if (getState().unsubscribeFn) {
     getState().unsubscribeFn();
     dispatch({
       type: actionTypes.UNSUBSCRIBE_GET_MESSAGES_FROM_FIREBASE
     })
   }
 }
