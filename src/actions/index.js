
import { UPDATE_IAMHOME } from '../constants/index';

export const updateIAmHome = (iamhome) => {
    // console.log(` ::: UPDATEIAMHOME ::: `);

    return {type: UPDATE_IAMHOME, payload: iamhome};
};

