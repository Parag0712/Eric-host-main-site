import { Metadata } from "next";

export const metadata:Metadata = {
    title: "Reseller Hosting - EricHost",
    description: "Take advantage of our Reseller Hosting plans to start your own hosting business with reliable and scalable solutions.",
    alternates: {
        canonical: "http://erichost.com/reseller-hosting",
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Reseller Hosting",
        description: "Take advantage of our Reseller Hosting plans to start your own hosting business with reliable and scalable solutions.",
        url: "http://erichost.com/reseller-hosting",
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