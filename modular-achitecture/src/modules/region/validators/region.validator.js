import yup from "yup"

export class RegionValidator {
    static uniqueSchemaValidator = yup.object({
        regionName: yup.string().required('Le nom de la région est requis').min(3, 'Le nom de la région doit contenir au moins 3 caractères').max(50, 'Le nom de la région ne peut pas dépasser 50 caractères')
    })
}