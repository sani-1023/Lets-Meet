import NavBar from "@/components/NavBar";
import { SignIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { neobrutalism } from "@clerk/themes";
import Image from "next/image";
import React from "react";

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative">
      <NavBar />

      <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
        <div className="w-full"> {children}</div>
      </section>
    </main>
  );
};

export default HomeLayout;
