import * as yup from 'yup';

export const productSchema = yup.object().shape({
    name: yup.string().min(3).required(),
    description: yup.string().min(10).required(),
    price: yup.number().integer().required(),
    categoryId: yup.string().required(),
    expiryDate: yup.date().nullable().required(),
    bonus: yup.number().integer().required(),
    quantity: yup.number().required(),
    
})
