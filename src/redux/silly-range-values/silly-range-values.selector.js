/** @format */

const { createSelector } = require('reselect');

const selectSillyRangeValues = (state) => state.sillyRangeValues;

const selectCurrentSillyRangeValues = createSelector(
  [selectSillyRangeValues],
  (sillyRangeValues) => sillyRangeValues.sillyRangeValues
);

export { selectCurrentSillyRangeValues };
