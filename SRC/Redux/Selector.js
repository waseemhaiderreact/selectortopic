import { createSelector } from "reselect";
const homestate = (state) => state.reduxer;
export const counterselector = createSelector(
    homestate,
    data => data?.get('count')
) 