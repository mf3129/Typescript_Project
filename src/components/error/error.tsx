import React from 'react';


type ErrorProps = {
    error: string;
    resetBoundaryError: () => void;
}

const ErrorPage = ({ error, resetBoundaryError }: ErrorProps ) => {
    console.log('Error occured', error);

    return (
        <div className='error-page'>
            {/* <img src={} /> */}
            <p className="error-msg">
                Something went wrong. Try clicking the refresh page button to reload the
                application.{' '}
            </p>
            <button className="button" onClick={resetBoundaryError}>
                Refresh Page
            </button>
        </div>
    );
}

export default ErrorPage;