import { Button } from "@/components/ui/button";
import { FileTextIcon } from "lucide-react";
import Link from "next/link";

function HomePage() {
  return (
    <>
      <h1 className="flex gap-3 items-center uppercase">
        <FileTextIcon size={50} className="text-emerald-500" /> bookkeeper
      </h1>
      <p>The best dashboard to manage inventory online</p>
      <div className="flex gap-2 items-center">
        <Button asChild>
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
