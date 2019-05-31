import {combinedReducers} from 'redux';
import {HomeReducer as home} from '../routes/Home/modules/home';
//combine all the functions from different routes into one
export const makeRootReducers = () =>{
    return combinedReducers({
        home
    });
}

export default makeRootReducers;