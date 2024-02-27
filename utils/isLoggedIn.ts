import { cookies } from "next/headers";
import { verifyPassword } from "./signCookie";
import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'
import { redirect } from 'next/navigation'

const isAuthenticated = async(cookieValue : string) =>{
    try{
        const encryptedValue = decodeURIComponent(cookieValue)
        const password: string = process.env.PASSWORD ?? '';
        const isLoggedIn = await verifyPassword(encryptedValue,password)
        return isLoggedIn
    }
    catch(e){
        return false;
    }
}

export const isAlreadyLoggedIn = async()=>{
    const authCookie = cookies().get("auth")?.value ?? ""
    const isLoggedIn = await isAuthenticated(authCookie)
    if(isLoggedIn){
        return redirect("/admin/home")
    }
    return null
}

export const isAllowed = async() =>{
    const authCookie = cookies().get("auth")?.value ?? ""
    const isLoggedIn = await isAuthenticated(authCookie)
    if(isLoggedIn){
        return null
    }
    return redirect("/admin/login")
}