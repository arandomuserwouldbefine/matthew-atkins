import { LoginForm } from "@/components/auth/login-form";
import { isAlreadyLoggedIn } from "@/utils/isLoggedIn";

 const LoginPage = async() =>{
    await isAlreadyLoggedIn()

    return(
        <LoginForm />
    )
 }

 export default LoginPage;