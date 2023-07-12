export const setURLs = (urlData) => ({
    type: 'SET_URLs',
    payload: urlData,
});

export const addURL = (urlData) => ({
    type: 'ADD_URL',
    payload: urlData,
});

export const updateURLs = (urlData) => ({
    type: 'UPDATE_URL',
    payload: urlData,
});

export const deleteURLs = (urlData) => ({
    type: 'DELETE_URL',
    payload: urlData,
});
