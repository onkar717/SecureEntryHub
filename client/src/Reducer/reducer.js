export const initialState = null;

export const reducer = (state, action) => {
    switch (action.type) {
        case 'USER':
            return {
                ...state,
                isAuthenticated: action.payload,
            };
        // Add more cases for additional action types if needed
        // case 'OTHER_ACTION':
        //    return { ...state, /* handle other action */ };
        default:
            return state;
    }
};