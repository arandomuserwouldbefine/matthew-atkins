import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { isAllowed, isAlreadyLoggedIn } from "@/utils/isLoggedIn";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default async function Home() {
  await isAllowed()
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 text-center">
      <div className="space-y-6">
        <h1 className={cn(
          "text-6xl font-semibold text-white drop-shadow-md ",
          font.className
          )}>Admin Auth</h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <LoginButton>
          <Button variant="secondary" size="lg">Sign In</Button>
          </LoginButton>
      </div>
    </main>
  );
}
