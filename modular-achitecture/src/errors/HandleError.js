import { AppError } from "./AppError.js";

export const HandleError = (error, req, res, next) => {
    if (error instanceof AppError) {
        const statusCode = Number.isInteger(error.statusCode) ? error.statusCode : 500;
        return res.status(statusCode).json({ error: error.message, statusCode });
    }

    console.error(error);
    return res.status(500).json({ error: "Internal Server Error", statusCode: 500 });
}