import { z } from "zod";
// https://dev.to/majiedo/using-zod-with-react-hook-form-using-typescript-1mgk

export const formSchema = z.object({
  name: z.string().min(1, "Name Required"),
  email: z.string().email().min(1, "Email Required"),
  password: z.string().min(6, "Too Short").max(20),
  gender: z.string().min(1),
});
export type TNormalFormType = z.infer<typeof formSchema>;
