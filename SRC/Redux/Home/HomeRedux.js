import { fromJS } from 'immutable'
const initalstate = fromJS({
    count: 0
});

const HomeRedux = (state = initalstate, action) => {
    switch (action.type) {
        case 'INCREAMENT':
            console.log('click');
            return state.set('count', state.get('count') + 2);
        default:
            return state;
    }
}

export default HomeRedux;