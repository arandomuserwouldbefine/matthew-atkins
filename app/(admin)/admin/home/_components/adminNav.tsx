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
  } from "@/components/ui/navigation-menu"

  
import Link from "next/link"

export const AdminNav = async ()=>{
    return(
        <>
            <div className="w-full flex items-center justify-between p-3 bg-slate-200">
                <div className="font-semibold">
                    <h1>Matt Atkins</h1>
                </div>
                <LogOutBtn /> 
            </div>
        </>
        
        )
}

