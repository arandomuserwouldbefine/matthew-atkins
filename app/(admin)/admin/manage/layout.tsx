import { AdminNav } from "../home/_components/adminNav";

export default function AdminLayout({
    children,
  }:{
    children: React.ReactNode;
  }) {
    return (
        <>
        <AdminNav >
        </AdminNav>
        {children}
        </>
    );
  }
  