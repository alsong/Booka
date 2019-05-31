import update from 'react-addons-update';
import constants from './actionConstants';

const {SET_NAME} = constants;

export function setName() {
    return{
        type: SET_NAME,
        payload:"Alsong"
    }
}

function handlesetName(state,action) {
    //Update the state
    return update(state,{
        //name which i will pass as a prop in my component
        name:{
            $set: action.payload
        }
    })
}

//acknowledge redux the handler for the action
const ACTION_HANDLERS = {
    SET_NAME:handlesetName
}
//app initial state
const initialState = {};

export function HomeReducer(state = initialState, action) {
    //Create action handlers
    const handlers = ACTION_HANDLERS(action.type);
    return handlers ? handlers(state, action) : state;
}
