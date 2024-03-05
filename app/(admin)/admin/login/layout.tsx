const AuthLayout = ({
    children
}: {children: React.ReactNode})=> {
    return(
        <div className="h-full flex items-center justify-center bg-gradient-to-r from-white to-slate-200">
            {children}
        </div>        
    )
}

export default AuthLayout;