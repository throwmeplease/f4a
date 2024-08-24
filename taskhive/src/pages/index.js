import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main
            className={`bg-gradient-to-t from-purple-900 via-purple-800 to-black flex min-h-screen flex-col items-center justify-evenly p-24 ${inter.className}`}
        >
            <p className={'text-white text-9xl'}>TaskHive</p>
            <Link href="/login">
                <Button className={'bg-black text-white'} variant="outline">login</Button>
            </Link>
        </main>
    );
}
