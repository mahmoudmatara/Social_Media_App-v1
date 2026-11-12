import z from "zod";

import {
  confirmEmailValidation,
  forgotPasswordValidation,
  loginValidation,
  resendConfirmEmailValidation,
  resetPasswordValidation,
  signupValidation,
} from "../authentication.validation";

export type SignupDto = z.infer<ReturnType<typeof signupValidation>>;
export type ConfirmEmailDto = z.infer<ReturnType<typeof confirmEmailValidation>>["body"];
export type ResendConfirmEmailDto = z.infer<ReturnType<typeof resendConfirmEmailValidation>>["body"];
export type LoginDto = z.infer<ReturnType<typeof loginValidation>>["body"];
export type ForgotPasswordDto = z.infer<ReturnType<typeof forgotPasswordValidation>>["body"];
export type ResetPasswordDto = z.infer<ReturnType<typeof resetPasswordValidation>>["body"];
