import { SAVE_NOTIFIACTIONS } from './types';
import { FETCH_NOTIFIACTIONS } from './types';

import axios from 'axios';

export const createNotification = data => dispatch => {
    axios.post('api/create', data)
        .then((resp) => {
            dispatch({
                type: SAVE_NOTIFIACTIONS,
                payload: resp.data
            })
        })
        .catch(err => console.log(err));
};

export const fetchNotification = () => dispatch => {
    axios.get('api/get')
        .then((resp) => {
            dispatch({
                type: FETCH_NOTIFIACTIONS,
                payload: resp.data
            });
        })
        .catch((err) => console.log(err));
};