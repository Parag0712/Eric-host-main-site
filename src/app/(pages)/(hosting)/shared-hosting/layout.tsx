import { Metadata } from "next";

export const metadata:Metadata = {
    title: "Shared Hosting - EricHost",
    description: "Experience reliable and affordable Shared Hosting plans, perfect for personal websites and small businesses.",
    alternates: {
        canonical: "http://erichost.com/shared-hosting",
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Shared Hosting",
        description: "Experience reliable and affordable Shared Hosting plans, perfect for personal websites and small businesses.",
        url: "http://erichost.com/shared-hosting",
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