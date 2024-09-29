'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from 'react';
import { State } from "@/lib/type";
import { login, loginWithGoogle, Signup } from "@/lib/action";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { ModeToggle } from "./ui/theme-provider";




export function LoginForm() {
    const initialState: State = { message: "", errors: {} };
    const [state, formAction] = useActionState(login, initialState);

    return (
        <div className="w-full  lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">

            <div className="flex  h-screen items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">

                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-muted-foreground">
                            Enter your email below to login to your account
                        </p>
                    </div>


                    <form action={formAction} className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="m@example.com"
                                aria-describedby="email-error"
                            />
                            <div id="email-error" aria-live="polite" aria-atomic="true">
                                {state.errors?.email &&
                                    state.errors.email.map((error: string) => (
                                        <p className="mt-2 text-sm text-red-500" key={error}>
                                            {error}
                                        </p>
                                    ))}
                            </div>
                        </div>


                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="******"
                                aria-describedby="password-error"
                            />
                            <div id="password-error" aria-live="polite" aria-atomic="true">
                                {state.errors?.password &&
                                    state.errors.password.map((error: string) => (
                                        <p className="mt-2 text-sm text-red-500" key={error}>
                                            {error}
                                        </p>
                                    ))}
                            </div>
                        </div>


                        <Button type="submit" className="w-full ">
                            Login
                        </Button>

                    </form>
                    <form action={loginWithGoogle} >
                        <Button type="submit" variant="outline" className="w-full p-5">
                            <FcGoogle className="size-8" />
                        </Button>

                    </form>


                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/auth/signup" className="underline">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>


            <div className="hidden bg-muted lg:block">
                <Image
                    src="/quiz.svg"
                    alt="Image"
                    width="1920"
                    height="1080"
                    className="h-full w-full object-cover dark:brightness-[0.8] "
                />
            </div>
        </div>
    );
}
export function SignUpForm() {
    const initialState: State = { message: "", errors: {} };
    const [state, formAction] = useActionState(Signup, initialState);
    return (
        <div className="w-full  lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">

            <div className="flex  h-screen items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">

                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Sign Up</h1>
                        <p className="text-muted-foreground">
                            Enter your details below to signup
                        </p>
                    </div>


                    <form action={formAction} className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="first-name">First name</Label>
                                <Input id="first-name" placeholder="Max" name="firstName" aria-describedby="firstName-error" />
                                <div id="firstName-error" aria-live="polite" aria-atomic="true">
                                    {state.errors?.firstName &&
                                        state.errors.firstName.map((error: string) => (
                                            <p className="mt-2 text-sm text-red-500" key={error}>
                                                {error}
                                            </p>
                                        ))}
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="last-name">Last name</Label>
                                <Input id="last-name" placeholder="Robinson" name="lastName" aria-describedby="lastName-error" />
                                <div id="lastName-error" aria-live="polite" aria-atomic="true">
                                    {state.errors?.lastName &&
                                        state.errors.lastName.map((error: string) => (
                                            <p className="mt-2 text-sm text-red-500" key={error}>
                                                {error}
                                            </p>
                                        ))}
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="m@example.com"
                                aria-describedby="email-error"
                            />
                            <div id="email-error" aria-live="polite" aria-atomic="true">
                                {state.errors?.email &&
                                    state.errors.email.map((error: string) => (
                                        <p className="mt-2 text-sm text-red-500" key={error}>
                                            {error}
                                        </p>
                                    ))}
                            </div>
                        </div>


                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="******"
                                aria-describedby="password-error"
                            />
                            <div id="password-error" aria-live="polite" aria-atomic="true">
                                {state.errors?.password &&
                                    state.errors.password.map((error: string) => (
                                        <p className="mt-2 text-sm text-red-500" key={error}>
                                            {error}
                                        </p>
                                    ))}
                            </div>
                        </div>


                        <Button type="submit" className="w-full ">
                           signup
                        </Button>

                    </form>
                    <form action={loginWithGoogle} >
                        <Button type="submit" variant="outline" className="w-full p-5">
                            <FcGoogle className="size-8" />
                        </Button>

                    </form>


                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/auth/login" className="underline">
                            Login
                        </Link>
                    </div>
                </div>
            </div>


            <div className="hidden bg-muted lg:block">
                <Image
                    src="/quiz.svg"
                    alt="Image"
                    width="1920"
                    height="1080"
                    className="h-full w-full object-cover dark:brightness-[0.8] "
                />
            </div>
        </div>
    );
}
