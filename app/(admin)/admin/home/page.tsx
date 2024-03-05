import {AdminNav} from './_components/adminNav'

export default async function AdminHome (){
    return(
        <>
            <AdminNav />
            <h1 className='font-semibold text-3xl text-center mt-8'>Welcome Admin</h1>
        </>
    )
}