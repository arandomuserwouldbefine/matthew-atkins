import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { adminLoginRoute,adminDashboardRoutes,adminLogOutRoute } from './routes'
// Limit the middleware to paths starting with `/api/`


export function middleware(request: NextRequest) {
  let pathName = request.nextUrl.pathname
  if(adminDashboardRoutes.includes(pathName)){
    if(!isAuthenticated(request)){
        return NextResponse.redirect(new URL('/admin/login', request.url))
    }
    return null;
  }

  if(adminLoginRoute.includes(pathName)){
    if(isAuthenticated(request)){
        return NextResponse.redirect(new URL("/admin/home",request.url))
    }
  }



}