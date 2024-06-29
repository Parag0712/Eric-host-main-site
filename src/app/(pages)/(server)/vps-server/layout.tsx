import type { Metadata } from "next";


export const metadata: Metadata =  {
    title: "VPS Server - EricHost",
    description: "Explore our VPS Server plans that offer flexibility, control, and powerful resources for your growing business needs.",
    alternates: {
        canonical: "http://erichost.com/vps-server",
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "VPS Server",
        description: "Explore our VPS Server plans that offer flexibility, control, and powerful resources for your growing business needs.",
        url: "http://erichost.com/vps-server",
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