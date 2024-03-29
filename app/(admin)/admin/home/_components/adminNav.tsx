"use client"

import { LogOutBtn } from "@/components/auth/logOut"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu";

  
import Link from "next/link"

export const AdminNav =  ()=>{
    return(
        <>
            <div className="w-full flex items-center justify-between p-3 border border-e-2">
                <div className="font-bold">
                    <h1 className="text-2xl">Welcome Matt Atkins</h1>
                </div>
                <div className="flex space-x-5 items-start font-semibold sm:text-sm md:text-base ">
                    <Link href="/admin/upload">Upload Image</Link>
                    <Link href="/admin/manage">Manage Images</Link>

                </div>
                <LogOutBtn /> 
            </div>
            
        </>
        
        )
}

