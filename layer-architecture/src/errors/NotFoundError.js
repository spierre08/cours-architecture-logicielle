export const NotFoundError = (message) => {
    const error = new Error(message);
    error.statusCode = 404;
    return error;
}