import { type Metadata } from "next";

import { Header } from "@components/header";

import "./styles.scss";

export const dynamic = "auto";
export const dynamicParams = true;
export const revalidate = false;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "all";

export const metadata = {
    title: "Next.js App Router example",
    description: "Next.js App Router example",
} satisfies Metadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <head>
                <meta name="format-detection" content="email=no,telephone=no" />
            </head>
            <body>
                <Header title={metadata.title} />
                <main>{children}</main>
            </body>
        </html>
    );
}
