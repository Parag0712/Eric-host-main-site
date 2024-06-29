import type { Metadata } from "next";


export const metadata: Metadata =  {
    title: "About Us - EricHost",
    description: "Learn more about EricHost, our mission, vision, and the dedicated team committed to providing top-tier hosting solutions.",
    alternates: {
        canonical: "http://erichost.com/about-us",
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "About Us",
        description: "Learn more about EricHost, our mission, vision, and the dedicated team committed to providing top-tier hosting solutions.",
        url: "http://erichost.com/about-us",
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