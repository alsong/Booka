import update from 'react-addons-update';
import constants from './actionConstants';
import {Dimensions} from 'react-native';

//Constants
const {GET_CURRENT_LOCATION} = constants;
const {width , height} = Dimensions.get('window');
const ASPECT_RATIO  = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA;


//Actions
export function GetCureentLocation() {
    return(dispatch)=>{
        //get current position
        navigator.geolocation.getCurrentPosition(
            //result that we get
            (position)=>{
                //do simple redux staff
                dispatch({
                    type: GET_CURRENT_LOCATION,
                    payload:position
                });
            },
            (error)=>console.log(error.message),
            {enableHighAccuracy:true,timeout:20000,maximumAge:1000}
        );
    }
}


//ActionHandlers
function handleGetCurrentLocation(state,action) {
    return update(state,{
        region:{
            latitude:{
                $set:action.payload.coords.latitude
            },
            longitude:{
                $set:action.payload.coords.longitude
            },
            latitudeDelta:{
                $set:LATITUDE_DELTA
            },
            longitudeDelta:{
                $set:LONGITUDE_DELTA
            }
        }
    })
}

//acknowledge redux the handler for the action
const ACTION_HANDLERS = {
    GET_CURRENT_LOCATION:handleGetCurrentLocation
}
//app initial state
const initialState = {
    //set the initial state of region as empty
    region:{}
};

export function HomeReducer(state = initialState, action) {
    //Create action handlers
    const handlers = ACTION_HANDLERS(action.type);
    return handlers ? handlers(state, action) : state;
}
