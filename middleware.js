import { NextResponse } from 'next/server'

export function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/redirect')) {
        return NextResponse.redirect(new URL('/products', request.url))
    }

}