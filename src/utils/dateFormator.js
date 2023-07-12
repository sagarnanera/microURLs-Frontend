function formatDate(date) {
    const options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };
    return new Date(date).toLocaleDateString('en-US', options);
}

export default formatDate;