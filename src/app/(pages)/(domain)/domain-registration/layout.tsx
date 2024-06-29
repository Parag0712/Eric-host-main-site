import type { Metadata } from "next";


export const metadata: Metadata =  {
    title: "Domain Registration - EricHost",
    description: "Register your domain with EricHost and get started with your online presence. Choose from a wide range of domain extensions.",
    alternates: {
        canonical: "http://erichost.com/domain-registration",
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Domain Registration",
        description: "Register your domain with EricHost and get started with your online presence. Choose from a wide range of domain extensions.",
        url: "http://erichost.com/domain-registration",
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