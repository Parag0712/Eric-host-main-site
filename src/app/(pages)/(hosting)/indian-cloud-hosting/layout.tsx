import type { Metadata } from "next";

export const metadata:Metadata = {
    title: "Indian Cloud Hosting - EricHost",
    description: "Explore our Indian cloud hosting services designed to provide reliable and efficient solutions for your business.",
    alternates: {
        canonical: "http://erichost.com/indian-cloud-hosting",
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Indian Cloud Hosting",
        description: "Explore our Indian cloud hosting services designed to provide reliable and efficient solutions for your business.",
        url: "http://erichost.com/indian-cloud-hosting",
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