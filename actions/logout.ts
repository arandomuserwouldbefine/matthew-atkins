"use server"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export const logOut = async ()=>{
    cookies().delete("auth")
}