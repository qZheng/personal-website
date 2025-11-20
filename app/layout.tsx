import type { Metadata } from "next";
import RootLayoutClient from "./layout.client";

export const metadata: Metadata = {
    title: "Lucas Zheng",
    description: "my personal website"
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <RootLayoutClient>{children}</RootLayoutClient>
}