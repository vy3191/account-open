
export const SET_IS_REVIEW = 'SET_IS_REVIEW';

export const setIsReview = (editOn) => ({
  type: SET_IS_REVIEW,
  meta: {
    editOn
  }
});
