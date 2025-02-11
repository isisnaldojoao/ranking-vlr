import Image from "next/image";
import Link from 'next/link';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

export default function Home() {
    return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <header className="w-full p-5 flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold">VCT Teams Nerdola´s Rankings</h1>
        <h3>Versão 0.0</h3>
        <Link 
            className="w-1/4 bg-white text-black p-5 h-[50px] flex items-center justify-start rounded-lg transition-all hover:scale-105 self-start"
            href={"/"}>
            Home
        </Link>
    </header>

        <main className=" row-start-2 items-center sm:items-start w-full">
            <div className="bg-gray-500 h-[50px] m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>1º |</h1>
                <img/>
                <h3>Sentinels</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1320</div>
            </div>

            <div className="bg-gray-500 h-[50px] m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>2º |</h1>
                <img/>
                <h3>FNATIC</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">680</div>
            </div>

            <div className="bg-gray-500 h-[50px] m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>3º |</h1>
                <img/>
                <h3>NUTURN</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">680</div>
            </div>

            <div className="bg-gray-500 h-[50px] m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>4º |</h1>
                <img/>
                <h3>Vikings</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">520</div>
            </div>

            <div className="bg-gray-500 h-[50px] m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>5º |</h1>
                <img/>
                <h3>X10 Esports</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">520</div>
            </div>

            <div className="bg-gray-500 h-[50px] m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>6º |</h1>
                <img/>
                <h3>Team Liquid</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">440</div>
            </div>

            <div className="bg-gray-500 h-[50px] m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>7º |</h1>
                <img/>
                <h3>Crazy Raccoon</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">400</div>
            </div>

            <div className="bg-gray-500 h-[50px] m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>8º |</h1>
                <img/>
                <h3>KRU</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">360</div>
            </div>

            <div className="bg-gray-500 h-[50px] m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>9º |</h1>
                <img/>
                <h3>Version1</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">240</div>
            </div>

            <div className="bg-gray-500 h-[50px] m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>10º |</h1>
                <img/>
                <h3>Sentinels</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">240</div>
            </div>

    
        </main>
    
    </div>
);
}
