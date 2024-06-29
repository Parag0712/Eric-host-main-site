import type { Metadata } from "next";


export const metadata: Metadata =  {
    title: "Terms & Conditions - EricHost",
    description: "Read EricHost's Terms & Conditions to understand our policies regarding hosting services, usage, payments, and more. Your guide to our service terms.",
    alternates: {
        canonical: "http://erichost.com/term&conditions",
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Terms & Conditions",
        description: "Read EricHost's Terms & Conditions to understand our policies regarding hosting services, usage, payments, and more. Your guide to our service terms.",
        url: "http://erichost.com/term&conditions",
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