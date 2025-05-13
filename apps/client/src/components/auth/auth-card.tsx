'use client';

import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";

interface AuthCardProps {
    className?: string;
    props?: React.HTMLAttributes<HTMLDivElement>;
    children: React.ReactNode;
}

const AuthCard = ({children, className, props}: AuthCardProps) => {
    return (
    <div
      className="flex items-center justify-center p-2"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <div className={cn("flex flex-col md:w-1/2 gap-6", className)} {...props}>
        <Card className="overflow-hidden">
          <CardContent className="grid p-0 md:grid-cols-2">
            <div className="relative hidden md:flex items-center justify-center p-4">
              <img
                src="/metaverse-logo.svg"
                alt="Metaverse Logo"
                className="object-cover"
              />
            </div> 
            <div className="flex flex-col gap-4 p-4">
              {children}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    )
}

export default AuthCard;