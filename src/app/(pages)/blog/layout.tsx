import type { Metadata } from "next";


export const metadata: Metadata =   {
    title: "Blog - EricHost",
    description: "Explore insightful articles and updates on hosting trends, tips, and news on the EricHost Blog. Stay informed and enhance your hosting experience.",
    alternates: {
        canonical: "http://erichost.com/blog",
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Blog",
        description: "Explore insightful articles and updates on hosting trends, tips, and news on the EricHost Blog. Stay informed and enhance your hosting experience.",
        url: "http://erichost.com/blog",
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