import { createStore } from 'redux';
import Reducer from './Reduxer';
const Mainstore = createStore(Reducer);


export default Mainstore;