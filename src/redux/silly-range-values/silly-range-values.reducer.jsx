/** @format */

import { SillyRangeValuesActionTypes } from './silly-range-values.types';

const INITIAL_STATE = {
    sillyRangeValues: {
      storageValue: 0,
      computationValue: 0,
    },
};

const sillyRangeValuesReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case SillyRangeValuesActionTypes.SET_CURRENT_SILLYRANGEVALUES:
            return {
                ...state,
                sillyRangeValues: payload,
            };

        default:
            return state;
    }
};

export default sillyRangeValuesReducer;
