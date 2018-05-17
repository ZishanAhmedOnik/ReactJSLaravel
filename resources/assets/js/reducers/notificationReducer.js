import { SAVE_NOTIFIACTIONS } from '../actions/types';
import { FETCH_NOTIFIACTIONS } from '../actions/types';

const initialState = {
    items: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SAVE_NOTIFIACTIONS:
            return {
                ...state,
                items: [ action.payload, ...state.items ]
            };

        case FETCH_NOTIFIACTIONS:
            return {
                ...state,
                items: action.payload
            };

        default:
            return state;
    }
}