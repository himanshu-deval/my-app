import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import UserMenu from "./user-menu";

const Header = () => {
  return (
    <div>
      <header className="container mx-auto">
        <nav className="px-6 py-4 flex justify-between items-center ">
          <Link href="/">
            <Image
              width={200}
              height={50}
              alt="Zscrum Logo"
              src={"/logo2.png"}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <div className={"flex items-center gap-4"}>
            <Link href="/project/create">
              <Button variant="destructive" className="flex items-center gap-2">
                <PenBox size={18} />
                <span>Create Project</span>
              </Button>
            </Link>

            <SignedOut>
              <SignInButton forceRedirectUrl="/onboarding">
                <Button variant={"outline"}>Log In</Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserMenu />
            </SignedIn>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
