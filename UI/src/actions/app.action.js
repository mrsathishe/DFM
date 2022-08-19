export const INCREMENT = 'INCREMENT';

export const increment = (value) => ({
    type: INCREMENT,
    payload: {
        value: ++value
    }
});

export const addIncrement = (value) => dispatch => {
    dispatch(increment(value));
    /** example to use in api connects */
    /* serviceReq(brandId).then(result => {
        if (result && result.length) {
            dispatch(servicereqSuccess({ result: 0, categoriesExpand }));
        }
    }).catch(error => {
        dispatch(failure(error));
    }); */
}