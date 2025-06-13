"use client"

import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"

export default function SignUpPage() {
    return (
        <main className="flex min-h-screen items-center justify-center px-4">
            <div className={cn("w-full max-w-md flex flex-col gap-6")}>
                <form className="flex flex-col gap-6">
                    {/* Header */}
                    <div className="flex flex-col items-center gap-2">
                        <a href="#" className="flex flex-col items-center gap-2 font-medium">
                            <span className="sr-only">Panacea</span>
                        </a>
                        <h1 className="text-2xl">Create Your Account</h1>
                        <p className="text-center text-xs text-muted-foreground">
                            Already have an account?{" "}
                            <a href="/login" className="underline underline-offset-4">
                                Log in
                            </a>
                        </p>
                    </div>

                    {/* Name Fields */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="grid gap-2">
                            <Label htmlFor="firstName" className={"font-normal"}>First Name</Label>
                            <Input
                                id="firstName"
                                type="text"
                                placeholder="Jane"
                                required
                                className="h-12 rounded-lg shadow-none"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="lastName" className={"font-normal"}>Last Name</Label>
                            <Input
                                id="lastName"
                                type="text"
                                placeholder="Doe"
                                required
                                className="h-12 rounded-lg shadow-none"
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="grid gap-2">
                        <Label htmlFor="phone" className={"font-normal"}>Phone</Label>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="+880112233445"
                            required
                            className="h-12 rounded-lg shadow-none"
                        />
                    </div>

                    {/* Password */}
                    <div className="grid gap-2">
                        <Label htmlFor="password" className={"font-normal"}>Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="********"
                            required
                            className="h-12 rounded-lg shadow-none"
                        />
                    </div>

                    {/* Submit */}
                    <Button type="submit" className="h-12 w-full rounded-lg shadow-none bg-black">
                        Sign Up
                    </Button>
                </form>
            </div>
        </main>
    )
}
