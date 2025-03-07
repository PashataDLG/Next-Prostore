import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Sign in",
};

const SignInPage = () => {
    return (
        <div className="w-full max-w-md mx-auto">
            <Card>
                <CardHeader className="space-y-4">
                    <Link href="/" className="flex-center">
                        <Image
                            src="/images/logo.svg"
                            width={100}
                            height={100}
                            alt={`${APP_NAME} logo`}
                            priority={true}
                        />
                        <CardTitle className="text-center">Sign In</CardTitle>
                        <CardDescription className="text-center">
                            Sign in to your account
                        </CardDescription>
                    </Link>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Form here */}
                </CardContent>
            </Card>
        </div>
    );
};

export default SignInPage;
