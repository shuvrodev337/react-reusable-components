import { z } from "zod";

// Zod Validation with react hook form
// https://dev.to/majiedo/using-zod-with-react-hook-form-using-typescript-1mgk

export const reUsableFormSchema = z.object({
  name: z.string().min(1, "Name Required"),
  email: z.string().email().min(1, "Email Required"),
  password: z.string().min(6, "Too Short").max(20),
});
export type TReUsableFormType = z.infer<typeof reUsableFormSchema>;
