'use server';
import { revalidatePath } from "next/cache";
import { loginSchema, SignUpSchema } from "./schema";
import { State } from "./type";
import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";
import { headers } from "next/headers";


export const login = async (prevState: State, formData: FormData):  Promise<State> => {
    const data = Object.fromEntries(formData.entries())
    const supabase = createClient();

    const validatedFields = loginSchema.safeParse(data)
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }
    const { email, password } = validatedFields.data
    try {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        console.log({ email, password })
    } catch (error) {
        return {
            message: 'Database Error: Failed to Create Invoice.',
        };
    }
    revalidatePath('/');
    redirect('/');

}
export const Signup = async (prevState: State, formData: FormData): Promise<State> => {
    const data = Object.fromEntries(formData.entries())
    const supabase = createClient();
    
    const validatedFields = SignUpSchema.safeParse(data)
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }
    const { email, password, firstName, lastName } = validatedFields.data
    try {
        const { error,data } = await supabase.auth.signUp({email,password})
        console.log(data)
    } catch (error) {
        return {
            message: 'Database Error: Failed to Create Invoice.',
        };
    }
    revalidatePath('/');
    redirect('/');

}

export async function loginWithGoogle() {
    const supabase = createClient();
    const origin = headers().get("origin");

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: `${origin}/auth/callback`,
        },
    });

    if (error) {
        console.error("Error during Google sign-in:", error);
        // Handle the error appropriately
        return;
    }

    if (data?.url) {
        // Redirect to the Google OAuth URL
        redirect(data.url);
    }
}
