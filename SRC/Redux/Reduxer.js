import { combineReducers } from 'redux'
import reduxerhome from './Home/HomeRedux'

const Reduxer = combineReducers({
    reduxer: reduxerhome
});

export default Reduxer;