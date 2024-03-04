import { EdgeStoreProvider } from '@/lib/edgestore';
import { AdminNav } from '../home/_components/adminNav';


export const revalidate = 0 // revalidate at most every hour
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