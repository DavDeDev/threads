import { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google";

// import '../'

export const metadata: Metadata = {
    title: 'Threads',
    description: 'A place to share your thoughts in Next.js 13',
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout(
    {
        children
    }
        :
        {
            children: React.ReactNode
        }) {
    return (
        <ClerkProvider>
            <body className={`${inter.className} bg-dark-1` }>
                {children}
            </body>
        </ClerkProvider>
    )
}