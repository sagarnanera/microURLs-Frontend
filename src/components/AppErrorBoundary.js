// import React from 'react';
// import { useErrorBoundary } from 'react-error-boundary';
// import { toast } from 'react-toastify';

// const ErrorFallback = ({ error }) => {
//     // Display toast notification when an error occurs
//     toast.error(error.message, {
//         position: toast.POSITION.TOP_RIGHT,
//     });

//     return null;
// };

// const AppErrorBoundary = ({ children }) => {
//     const { error } = useErrorBoundary();

//     return (
//         <>
//             {error && <ErrorFallback error={error} />}
//             {children}
//         </>
//     );
// };

// export default AppErrorBoundary;
