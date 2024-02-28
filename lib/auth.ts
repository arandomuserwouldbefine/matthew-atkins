import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export const isAuthenticated = (request: NextRequest)=>{
    let authCookie = request.cookies.get("auth")
    if(authCookie) return true
    return false
}
