import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Business-hosting - EricHost",
    description: "Discover the team behind EricHost and why we are the best option for your business hosting needs.",
    alternates: {
        canonical: "http://erichost.com/business-hosting",
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Business-hosting",
        description: "Discover the team behind EricHost and why we are the best option for your business hosting needs.",
        url: "http://erichost.com/business-hosting",
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