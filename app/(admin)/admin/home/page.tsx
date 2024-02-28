import { isAllowed } from "@/utils/isLoggedIn"

import {AdminNav} from './_components/adminNav'

export default async function AdminHome (){
    // await isAllowed()
    return(
        <>
            <AdminNav />
        
        </>
    )
}