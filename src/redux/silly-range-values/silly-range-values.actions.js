/** @format */

import { SillyRangeValuesActionTypes } from './silly-range-values.types';

const setCurrentSillyRangeValues = (sillyRangeValues) => {
  return {
    type: SillyRangeValuesActionTypes.SET_CURRENT_SILLYRANGEVALUES,
    payload: sillyRangeValues,
  };
};

export { setCurrentSillyRangeValues };
