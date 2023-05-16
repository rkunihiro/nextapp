import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Home",
};

async function getDate() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return new Date().toISOString();
}

export default async function Page() {
    const date = await getDate();

    return (
        <>
            <div>Hello,World!</div>
            <div>{date}</div>
            <div>
                <Link href="/sub">Sub</Link>
            </div>
        </>
    );
}
