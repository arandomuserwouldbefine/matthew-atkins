import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { adminLoginRoute,adminDashboardRoutes } from './routes'
// Limit the middleware to paths starting with `/api/`


export function middleware(request: NextRequest) {
  if(adminDashboardRoutes.includes(request.nextUrl.pathname)){
    console.log(request.nextUrl.pathname)
    if(!isAuthenticated(request)){
        return NextResponse.redirect(new URL('/admin/login', request.url))
    }
    return null;
  }
  

}