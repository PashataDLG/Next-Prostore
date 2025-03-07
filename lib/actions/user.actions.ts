"use server";

import { signInFromSchema } from "../validators";
import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

// Sign in user with credentials
export async function signInWithCredentials(
    prevState: unknown,
    formData: FormData
) {
    try {
        const user = signInFromSchema.parse({
            email: formData.get("email"),
            password: formData.get("password"),
        });

        await signIn("credentials", user);

        return { success: true, message: "Signed In Successfully" };
    } catch (error) {
        if (isRedirectError(error)) {
            throw error;
        }
    }

    return { successful: false, message: "Invalid email or password" };
}

//Sign User Out
export async function signOutUser() {
    await signOut();
}