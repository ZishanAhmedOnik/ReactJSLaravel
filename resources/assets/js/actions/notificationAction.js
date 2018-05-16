import { SAVE_NOTIFACTIONS } from './types';

import axios from 'axios';

export const createNotification = data => dispatch => {
    axios.get('http://localhost:8000/api/test')
        .then((data) => {
            console.log(data);
        })
        .catch((err) => console.log(err));
}