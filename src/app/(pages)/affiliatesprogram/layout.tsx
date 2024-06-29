import type { Metadata } from "next";


export const metadata: Metadata =   {
    title: "Affiliates Program - EricHost",
    description: "Join the EricHost Affiliates Program and earn commissions by referring customers to our reliable hosting services. Start earning today!",
    alternates: {
        canonical: "http://erichost.com/affiliatesprogram",
    },
    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Affiliates Program",
        description: "Join the EricHost Affiliates Program and earn commissions by referring customers to our reliable hosting services. Start earning today!",
        url: "http://erichost.com/affiliatesprogram",
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