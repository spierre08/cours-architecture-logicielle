import { AppError } from "./AppError.js";

export const HandleError = (error, req, res, next) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({ error: error.message, statusCode: error.statusCode });
    }

    return res.status(500).json({ error: "Internal Server Error", statusCode: 500 });
}