"use client"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import logo from "../../../public/logo.svg";
import navData from "../../data/Navbar/data.json";
import { buttonVariants } from "../ui/button";
import { NavigationLink } from "./NavigationLink";
interface RouteProps {
    href: string;
    label: string;
}

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<string | null>(null);

    const handleClick = useCallback(
        (link: any) => {
            if (isVisible === link.text) {
                setIsVisible(null); // Close the menu if it's already open
            } else {
                setIsVisible(link.text); // Open the clicked menu
            }
        },
        [isVisible, setIsOpen]
    );
    // Render Nav Links
    const renderNavLink = (link: any) => (
        <Link
            href={link.href}
            className={cn(buttonVariants({ variant: "ghost", className: "text-[16px] text-left flex  justify-start" }), "w-[100%] text-left")}
            onClick={(e) => {
                setIsOpen(false);
            }}
        >
            {link.text}
        </Link>
    );

    const renderDropdown = (link: any) => {
        const isMenuOpen = isVisible === link.text;

        return (
            <div className="relative group  ">
                <button
                    className={cn(buttonVariants({ variant: "ghost", className: "text-[16px]  text-left flex  justify-between" }), "w-[100%] text-left")}
                    onClick={() => { handleClick(link) }}
                >
                    {link.text}
                    <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </button>
                {link.options && (
                    <div
                        className={` min-w-[220px] transition-all duration-300 ${isMenuOpen
                            ? "h-auto opacity-100 pointer-events: auto"
                            : "h-0 overflow-hidden opacity-0 pointer-events: none"
                            }`}
                    >
                        <ul className="block text-md text-black py-2 ">
                            {link.options.map((subLink: any) => (
                                <li key={subLink.title} className="w-[100%]">
                                    <Link
                                        href={subLink.href}
                                        className={cn(buttonVariants({ variant: "ghost", className: "text-left items-start" }), "text-[15px] w-[100%]")}
                                        onClick={(e) => {
                                            setIsOpen(false);
                                        }}
                                    >
                                        {subLink.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    };

    return (
        <header className="sticky  border-b-[1px] top-0 z-1 w-full lg:py-2">
                <NavigationMenu className="mx-auto">
                    <NavigationMenuList className=" max-w-[1340px]   lg:max-w-[1300px] xl:max-w-[1200px] 2xl:max-w-[1440px]   w-screen  h-14 px-4  flex justify-between ">
                        <NavigationMenuItem className="font-bold flex">
                            <Link href="/" className="flex items-center">
                                <Image src={logo} className="lg:h-auto h-6" alt="eric-host" />
                            </Link  >
                        </NavigationMenuItem>
                        {/* mobile */}
                        <span className="flex lg:hidden">

                            <Sheet
                                open={isOpen}
                                onOpenChange={setIsOpen}
                            >
                                <SheetTrigger className="px-2 ">
                                    <Menu
                                        className="flex lg:hidden h-5 w-5"
                                        onClick={() => setIsOpen(true)}
                                    >
                                    </Menu>
                                </SheetTrigger>

                                <SheetContent side={"left"} className="flex  flex-col items-stretch justify-between">
                                    <div>
                                        <SheetHeader>
                                            <SheetTitle className="font-bold text-xl">
                                                <Link href="/" className="flex mb-5">
                                                    <Image src={logo} className=" h-7" alt="eric-host" />
                                                </Link  >
                                            </SheetTitle>
                                        </SheetHeader>

                                        <nav>
                                            <ul className="grid grid-cols-1  gap-2">
                                                {navData.navbar.map((link) => (
                                                    <li key={link.text} className="">
                                                        {link.options.length > 0
                                                            ? renderDropdown(link)
                                                            : renderNavLink(link)}
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>

                                    <div className="flex flex-col justify-center items-center gap-2 mt-4 w-full">
                                        <a
                                            rel="noreferrer noopener"
                                            href="https://clients.erichost.com/login"
                                            className={`w-full border ${buttonVariants({
                                                variant: "secondary",
                                            })}`}
                                        >
                                            Login
                                        </a>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </span>
                        <NavigationLink />

                        <div className="hidden lg:flex gap-2">
                            <a
                                rel="noreferrer noopener"
                                href="https://clients.erichost.com/login"
                                target="_blank"
                                className={`border ${buttonVariants({ variant: "secondary" })}`}
                            >
                                <UserRound className="mr-2 w-5 h-5" />
                                Login
                            </a>
                        </div>
                    </NavigationMenuList>
                </NavigationMenu>
        </header>
    );
};