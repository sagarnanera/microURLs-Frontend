// userReducer.js
const initialState = {};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...action.payload };

        case 'UPDATE_USER':
            return { ...state, ...action.payload };

        case 'DELETE_USER':
            return { ...initialState };

        default:
            return state;
    }
};

export default userReducer;
