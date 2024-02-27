import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
    const authCookie = cookies().has("auth")
    if (req.url.includes('/admin') && !authCookie && !req.url.includes('/admin/login')) {
        return NextResponse.redirect(new URL('/admin/login', req.url));
    }
    if (req.url.includes("/admin/logout")) {
        const response = NextResponse.redirect(new URL('/admin/login', req.url))
            cookies()
            response.cookies.delete("auth")
            
    
        return response;
        }
    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/logout'],
    api: {
        bodyParser: false, // Disable body parsing
    },
};
