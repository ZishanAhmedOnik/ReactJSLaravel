import { SAVE_NOTIFACTIONS } from '../actions/types';

const initalState = {
    name: ''
}

export default function (state = initalState, action) {
    switch (action.type) {
        case SAVE_NOTIFACTIONS:
            console.log("done :D :D :D");

        default:
            return state;
    }
}