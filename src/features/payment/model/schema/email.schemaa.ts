import { InferType, object, string } from "yup";

export const emailSchema = object({
  email: string().email("Введите корректный email").required("Это поле обязательно для заполнения"),
});

export type EmailType = InferType<typeof emailSchema>;