import type { Metadata } from "next";


export const metadata: Metadata =  {
    title: "Contact Us - EricHost",
    description: "Get in touch with EricHost for any inquiries, support, or information. We are here to assist you with all your hosting needs.",
    alternates: {
        canonical: "http://erichost.com/contact",
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Contact Us",
        description: "Get in touch with EricHost for any inquiries, support, or information. We are here to assist you with all your hosting needs.",
        url: "http://erichost.com/contact",
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