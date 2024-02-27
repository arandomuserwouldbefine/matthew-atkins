import { verifyPassword } from "./signCookie";

export const isAuthenticated = async(cookieValue : string) =>{
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