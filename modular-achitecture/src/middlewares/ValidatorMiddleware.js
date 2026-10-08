import { ValidationError } from "yup"

export const ValidatorMiddleware = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validate(req.body)
            next()
        } catch (error) {
            if (error instanceof ValidationError) {
                return res.status(400).json({ error: error.errors[0], status: 400 })
            }

            next(error)
        }
    }
}