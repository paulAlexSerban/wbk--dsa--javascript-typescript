const UNKNOWN = 'UNKNOWN';

function experimentFunction(error) {
    let errorsObj = {
        [error.PERMISSION_DENIED]: {
            title: 'Permission denied',
            text: 'You do not have permission',
        },
        [error.POSITION_UNAVAILABLE]: {
            title: 'Position unavailable',
            text: 'Your position is not available',
        },
        [error.TIMEOUT]: {
            title: 'Timeout error',
            text: 'There is a timeout error',
        },
        [UNKNOWN]: {
            title: 'Unknown error',
            text: 'Unknown error',
        },
    };

    const errCode = error.code || UNKNOWN;

    return (errorsObj = {
        ...errorsObj[errCode],
        label: 'this.el.getAttribute("data-button-ok-label")',
        modeSet: 'error',
        parent: 'this.input',
    });
}

const errorObj = {
    PERMISSION_DENIED: 1,
    POSITION_UNAVAILABLE: 2,
    TIMEOUT: 3,
    code: 1,
    message: 'User denied Geolocation',
};

console.log(experimentFunction(errorObj));

/**
 * open-closed principle from the SOLID principles
 */
