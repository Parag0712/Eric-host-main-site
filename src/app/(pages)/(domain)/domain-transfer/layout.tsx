import type { Metadata } from "next";


export const metadata: Metadata =  {
    title: "Domain Transfer - EricHost",
    description: "Transfer your domain to EricHost seamlessly and enjoy reliable domain management and support. Make the switch hassle-free.",
    alternates: {
        canonical: "http://erichost.com/domain-transfer",
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Domain Transfer",
        description: "Transfer your domain to EricHost seamlessly and enjoy reliable domain management and support. Make the switch hassle-free.",
        url: "http://erichost.com/domain-transfer",
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