// reducer.js
const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_URLs':
            return [...action.payload];

        case 'ADD_URL':
            return [...state, action.payload];

        case 'UPDATE_URL':
            return state.map((url) => {
                if (url._id === action.payload._id) {
                    return {
                        ...url,
                        // Update the specific URL properties here
                        // For example, if you want to update the original URL:
                        customSlug: action.payload.customSlug,
                        // Add other properties as needed
                    };
                }
                return url;
            });

        case 'DELETE_URL':
            return state.filter((url) => url._id !== action.payload);

        default:
            return state;

    }
};

export default reducer;