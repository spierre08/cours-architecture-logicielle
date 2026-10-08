import yup from "yup"

export class ProductValidator {

    static createSchemaValidator = yup.object({
        product_name: yup.string().required("Le nom du produit est requis"),
        price: yup.number().required("Le prix est requis").positive("    Le prix doit être un nombre positif"),
        description: yup.string().required("La description est requise")
    })

    static updateSchemaValidator = yup.object({
        product_name: yup.string().optional(),
        price: yup.number().optional().positive("Le prix doit être un nombre positif"),
        description: yup.string().optional()
    })
}