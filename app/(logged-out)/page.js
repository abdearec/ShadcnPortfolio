import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import Link from "next/link";

function HomePage() {
  return (
    <>
      <h1 className="flex gap-3 items-center">
        <LogInIcon size={50} className="text-green-500" /> LoginPage
      </h1>
      <p>The best dashboard to manage inventory online</p>
      <div className="flex gap-2 items-center">
        <Button className="bg-green-500" asChild>
          <Link href="/login">Log in</Link>
        </Button>
        <small>or</small>
        <Button variant="outline" asChild>
          <Link href="/singup">Sign Up</Link>
        </Button>
      </div>
    </>
  );
}

export default HomePage;
