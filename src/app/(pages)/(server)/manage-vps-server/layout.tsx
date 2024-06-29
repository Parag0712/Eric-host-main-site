import type { Metadata } from "next";


export const metadata: Metadata =  {
    title: "Managed VPS Server - EricHost",
    description: "Experience top-tier performance and reliability with our Managed VPS Server plans, tailored to meet your business needs.",
    alternates: {
        canonical: "http://erichost.com/manage-vps-server",
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Managed VPS Server",
        description: "Experience top-tier performance and reliability with our Managed VPS Server plans, tailored to meet your business needs.",
        url: "http://erichost.com/manage-vps-server",
        siteName: "erichost",
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>
            {children}
        </>
    );
}