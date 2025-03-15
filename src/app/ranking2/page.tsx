import Link from 'next/link';
import Image from 'next/image';
import Legend from '../../components/legend/legends';

export default function Home() {
    return (
    <div className="bg-[#0f1923] text-white items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <header className="w-full p-5 flex flex-col items-center justify-center">
        <Image src="/nerdolalogo.png" width={300} height={200} alt="logo" className='animate-slowbounce'/>
        
        <div className='flex items-center justify-center gap-2'>
            <Link 
                className="w-2/4 bg-[#ff4656]  text-white p-5 h-[50px] flex items-center justify-start rounded-lg transition-all hover:scale-105 self-start"
                href={"/ranking"}>
                2021/1
            </Link>
            <Link 
                className="w-2/4 bg-[#ff4656]   text-white p-5 h-[50px] flex items-center justify-start rounded-lg transition-all hover:scale-105 self-start"
                href={"/"}>
                Menu
            </Link>
            <Link 
                className="w-2/4 bg-[#ff4656] text-white p-5 h-[50px] flex items-center justify-start rounded-lg transition-all hover:scale-105 self-start"
                href={"/ranking3"}>
                2021/3
            </Link>
        </div>

    </header>

    <main className="row-start-2 items-center sm:items-start w-full">
            <div className='flex items-center justify-center m-5'>
                <h1>Version 1.0</h1>
            </div>
            <Legend
                
            />

            <div className="grid grid-cols-4 bg-purple-700 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>1º |</h1>
                <Image src="https://static.significados.com.br/flags/ru.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold '>Gambit Esports</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1560</div>
            </div>

            <div className="grid grid-cols-4 bg-purple-400 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>2º |</h1>
                <Image src="https://static.significados.com.br/flags/us.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold '>Sentinels </h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1480</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>3º |</h1>
                <Image src="https://static.significados.com.br/flags/us.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Team Envy</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">920</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>4º |</h1>
                <Image src="https://static.significados.com.br/flags/kr.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>NUTURN</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">740</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>5º |</h1>
                <Image src="https://static.significados.com.br/flags/gb.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Fnatic</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">680</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>6º |</h1>
                <Image src="https://static.significados.com.br/flags/us.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>100 Thieves</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">620</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>7º |</h1>
                <Image src="https://static.significados.com.br/flags/br.svg" width={100} height={50} alt="logo"/>
                <h3 className='text-xl font-bold m-2'>Team Vikings</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">600</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>8º |</h1>
                <Image src="https://static.significados.com.br/flags/ar.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>KRU Esports</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">560</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>9º |</h1>
                <Image src="https://static.significados.com.br/flags/jp.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Crazy Raccoon</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">560</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>10º |</h1>
                <Image src="https://static.significados.com.br/flags/nl.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Team Liquid</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">560</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>11º |</h1>
                <Image src="https://static.significados.com.br/flags/jp.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>ZETA DIVISION</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">540</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>12º |</h1>
                <Image src="https://static.significados.com.br/flags/kr.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Visions Strikers</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">528</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>13º |</h1>
                <Image src="https://static.significados.com.br/flags/de.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>G2 Esports</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">480</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>14º |</h1>
                <Image src="https://static.significados.com.br/flags/th.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>X10 Esports</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">440</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>15º |</h1>
                <Image src="https://static.significados.com.br/flags/at.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Acend</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">432</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>16º |</h1>
                <Image src="https://static.significados.com.br/flags/br.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Sharks Esports</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">340</div>
            </div>

    
        </main>
    
    </div>
);
}