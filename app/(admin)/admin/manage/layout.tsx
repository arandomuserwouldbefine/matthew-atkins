import { EdgeStoreProvider } from '@/lib/edgestore';
import { AdminNav } from '../home/_components/adminNav';



export default function ManageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <AdminNav/>
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
    </>
  );
}