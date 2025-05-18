"use client";

import Link from "next/link";
import Logo from "../logo";
import { Button } from "../ui/button";

import { landingPageRoutes } from "./route";
import { usePathname } from "next/navigation";

import useAuthStore from "@/store/useAuthStore";
import UserAvatar from "../user-avatar";

const Nav = () => {
  const pathname = usePathname();

  const { isAuthenticated, user, logout } = useAuthStore();

  return (
    <nav className="w-full h-20 flex items-center justify-between px-2 md:px-24  bg-white">
      <Link href={"/"}>
        <Logo width={150} />
      </Link>
      <div className="hidden md:flex gap-x-4 text-zinc-700">
        {landingPageRoutes.map((r) => (
          <Link
            href={r.route}
            key={r.label}
            className={`font-semibold hover:text-violet-500 ${pathname === r.route ? "text-violet-500" : ""}`}
          >
            {r.label}
          </Link>
        ))}
      </div>

      {isAuthenticated && user ? (
        <div className="hidden md:flex gap-x-3">
          <Link href={"/u/dashboard"}>
            <UserAvatar username={user.username} />
          </Link>

          <Button
            variant={"secondary"}
            className="hover:bg-zinc-200 cursor-pointer"
            onClick={logout}
          >
            Sign out
          </Button>
        </div>
      ) : (
        <div className="hidden md:flex gap-x-3">
          <Link href={"/auth/signin"}>
            <Button
              variant={"secondary"}
              className="hover:bg-zinc-200 cursor-pointer"
            >
              Sign in
            </Button>
          </Link>
          <Link href={"/auth/signup"}>
            <Button
              variant={"secondary"}
              className="bg-violet-400 hover:bg-violet-500 cursor-pointer text-white"
            >
              Get started
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
