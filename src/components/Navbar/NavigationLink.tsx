"use client"
import Link from "next/link"
import * as React from "react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Image from "next/image"
import domainimage from '../../../public/HomePage/feature_new-1.svg'
import { ServerImage } from "@/assests/config"

const Hosting: { title: string; href: string; description: string }[] = [
    { "title": "Shared Hosting", "href": "/", "description": "Shared Hosting Starting at ₹ 39/-" },
    { "title": "Business Hosting", "href": "/", "description": "Business Hosting Starting at ₹ 139/-" },
    { "title": "Unlimited Hosting", "href": "/", "description": "Unlimited Hosting Starting at ₹ 329/mo" },
    { "title": "Mini Hosting", "href": "/", "description": "Mini Hosting Starting at ₹ 29/-" },
    { "title": "Indian Cloud Hosting", "href": "/", "description": "Indian Cloud Hosting Starting at ₹ 69/-" },
    { "title": "Reseller Hosting", "href": "/", "description": "Reseller Hosting Starting at ₹ 799/-" }
];

const Domain: { title: string; href: string; description: string }[] = [
    { "title": "Domain Registration", "href": "/", "description": "Register Your Domain Name" },
    { "title": "Domain Transfer", "href": "/", "description": "Transfer Your Domain Easily" },
    { "title": "Domain Checker", "href": "/", "description": "Find the Your Perfect Domain Name" }
];

const Server: { title: string; href: string; description: string }[] = [
    { "title": "VPS Server", "href": "/", "description": "Get full control of your server" },
    { "title": "Managed VPS Server", "href": "/", "description": "Managed VPS Server" },
    { "title": "View VPS Server", "href": "/", "description": "VPS Server" },
];

const Support: { title: string; href: string; description: string }[] = [
    { "title": "Contact Us", "href": "/", "description": "Face any problem contact us" },
    { "title": "About Us Server", "href": "/", "description": "We are leading hosting company" },
    { "title": "Support", "href": "/",  "description": "We provide exceptional customer support 24/7" },
];

export function NavigationLink() {
    return (
        <NavigationMenu className="text-black w-full hidden lg:block">
            <NavigationMenuList>
                {/*  Menu  */}
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref className="">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <span className="text-[16px]">Home</span>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                {/* Hosting */}
                <NavigationMenuItem className="">
                    <NavigationMenuTrigger className="text-[16px]">Hosting</NavigationMenuTrigger>
                    <NavigationMenuContent className="w-full absolute ">
                        <ul className="grid w-[400px] p-8 md:w-[700px] gap-4 md:grid-cols-2 lg:w-[920px] ">
                            {Hosting.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Domain */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[16px]">Domain</NavigationMenuTrigger>

                    <NavigationMenuContent>
                        <ul className="grid w-[400px] p-4 md:w-[700px] gap-4 md:grid-cols-2 lg:w-[1000px] ">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={domainimage}
                                                layout="fill"
                                                alt="Domain"
                                                className="object-contain"
                                            />
                                        </div>

                                    </a>
                                </NavigationMenuLink>
                            </li>

                            {Domain.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Vps Server */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[16px]">Server</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] p-4 md:w-[700px] gap-4 md:grid-cols-2 lg:w-[1000px] ">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={domainimage}
                                                alt="Server"
                                                layout="fill"
                                                className="object-contain"
                                            />
                                        </div>

                                    </a>
                                </NavigationMenuLink>
                            </li>

                            {Server.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {/*  Menu  */}
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref className="">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <span className="text-[16px]">Blog</span>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                {/* Support */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[16px]">Support</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] p-4 md:w-[700px] gap-4 md:grid-cols-2 lg:w-[1000px] ">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={domainimage}
                                                layout="fill"
                                                alt="Domain"
                                                className="object-contain"
                                            />
                                        </div>

                                    </a>
                                </NavigationMenuLink>
                            </li>

                            {Support.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {/* Menu Over */}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "h-full flex flex-col gap-2 mb-2 justify-center select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-md font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-md leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
