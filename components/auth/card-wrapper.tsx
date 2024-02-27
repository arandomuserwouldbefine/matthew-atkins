"use client"

import { Card,CardContent,CardFooter,CardHeader } from "@/components/ui/card";
import { Header } from "@/components/auth/headers";
import { Social } from "@/components/auth/social";
import { BackButton } from "./back-button";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
}

export const CardWrapper = ({
    children,
    headerLabel,
}:CardWrapperProps) =>{
    return(
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>

            <CardContent>
                {children}
            </CardContent>

        </Card>
    )
}