import { z } from "zod";

export const ContactSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  senderEmail: z.string().email("Invalid Email").min(1, "Please enter Email"),
  message: z
    .string()
    .min(10, "The message is too short, at least 10 characters.")
    .max(500, "Maximum message length is 500 characters."),
});

export type ContactInput = z.infer<typeof ContactSchema>;

export type ActionResponse = {
  success: boolean;
  errors?: {
    firstName?: string[];
    lastName?: string[];
    senderEmail?: string[];
    message?: string[];
    server?: string[];
  };
};
