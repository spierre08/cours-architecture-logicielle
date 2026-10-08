import yup from "yup"

export class VilleValidator {

    static createSchemaValidator = yup.object({
        villeName: yup.string().required("Le nom de la ville requis"),
        regionId: yup.string().required("La région est requise")
    })

    static updateSchemaValidator = yup.object({
        villeName: yup.string().optional(),
        regionId: yup.string().optional()
    })
}