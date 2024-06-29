import type { Metadata } from "next";

export const metadata:Metadata = {
    title: "Mini Hosting - EricHost",
    description: "Discover our Mini Hosting plans tailored for small websites and startups, offering affordability and reliability.",
    alternates: {
        canonical: "http://erichost.com/mini-hosting",
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Mini Hosting",
        description: "Discover our Mini Hosting plans tailored for small websites and startups, offering affordability and reliability.",
        url: "http://erichost.com/mini-hosting",
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