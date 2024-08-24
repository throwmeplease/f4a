import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main
            className={`bg-gradient-to-t from-purple-900 via-purple-800 to-black flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <Button className={'bg-gray-900 text-white'} variant="outline">login</Button>
        </main>
    );
}
