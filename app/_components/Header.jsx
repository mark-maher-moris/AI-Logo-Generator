import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <div  className=" px-10 lg:px-20 xl:px-30 2xl:px-40 p-10 flex justify-between items-center shadow-sm">
            <Image src={"/logo.svg"} alt={"logo"} width={100} height={100} />
            <Button>Get Started</Button>
        </div>
    );
}