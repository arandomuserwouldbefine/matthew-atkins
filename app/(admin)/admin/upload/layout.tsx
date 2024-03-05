"use client"
import { EdgeStoreProvider } from '@/lib/edgestore';
import { AdminNav } from '../home/_components/adminNav';
import {NextUIProvider} from "@nextui-org/react";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminNav/>
        <NextUIProvider>
          <EdgeStoreProvider>{children}</EdgeStoreProvider>
      </NextUIProvider>
    </>
  );
}