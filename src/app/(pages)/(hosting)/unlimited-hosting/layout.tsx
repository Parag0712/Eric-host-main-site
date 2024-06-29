import type { Metadata } from "next";

export const metadata:Metadata = {
    title: "Unlimited Hosting - EricHost",
    description: "Unlock the potential of your website with our Unlimited Hosting plans, offering unlimited resources and premium features.",
    alternates: {
        canonical: "http://erichost.com/unlimited-hosting",
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Unlimited Hosting",
        description: "Unlock the potential of your website with our Unlimited Hosting plans, offering unlimited resources and premium features.",
        url: "http://erichost.com/unlimited-hosting",
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