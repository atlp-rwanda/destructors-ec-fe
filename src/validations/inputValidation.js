import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstname: yup.string().min(3).trim().required(),
  lastname: yup.string().min(3).trim().required(),
  email: yup.string().email().lowercase().trim().required(),
  phone: yup.string().matches(/^\+?[1-9][0-9]{7,14}$/),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase character")
    .matches(/[0-9]/, "Password must contain at least one numeric character")
    .required("Password is required")
    .trim(),
});


export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .lowercase()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
});

export const updatePasswordSchema = yup.object().shape({
  currentPassword:yup
    .string()
    .required('fill the field!'),
  newPassword: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required('fill the field!'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], "Passwords don't match.")
    .required('fill the field!'),

});
export const twoAuthSchema = yup.object({
  otp: yup.string().min(6).max(6).required(),
});

export const ResetSchema = yup.object().shape({
  password1: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[0-9])/,
      'Password must contain at least one lowercase letter and one numeric digit',
    ),
  password2: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Confirm Password is required')
    .oneOf([yup.ref('password1'), null], 'Passwords must match'),
});

export const ForgetPasswordSchema = yup.object().shape({
  email: yup.string().email().lowercase().trim().required(),
});
