import Link from 'next/link';
import Image from 'next/image';
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

        <main className="row-start-2 items-center sm:items-start w-full">
            <div className="grid grid-cols-4 bg-gray-500 h-[100px] p-1 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>1º |</h1>
                <Image src="https://static.significados.com.br/flags/ru.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold '>Gambit</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">2770</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] p-2 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>2º |</h1>
                <Image src="https://static.significados.com.br/flags/at.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold '>Acend</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">2032</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] p-2 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>3º |</h1>
                <Image src="https://static.significados.com.br/flags/us.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold '>Sentinels</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1566</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] p-2 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>4º |</h1>
                <Image src="https://static.significados.com.br/flags/ar.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>KRU</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1470</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] p-2 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>5º |</h1>
                <Image src="https://static.significados.com.br/flags/lu.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Team Liquid</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1250</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] p-2 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>6º |</h1>
                <Image src="https://static.significados.com.br/flags/us.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Team Envy</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1170</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] p-2 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>7º |</h1>
                <Image src="https://static.significados.com.br/flags/th.svg" width={100} height={50} alt="logo"/>
                <h3 className='text-xl font-bold m-2'>X10 CRIT</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1040</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] p-2 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>8º |</h1>
                <Image src="https://static.significados.com.br/flags/gb.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Fnatic</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1030</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] p-2 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>9º |</h1>
                <Image src="https://static.significados.com.br/flags/ph.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Team Secret</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">840</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] p-2 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>10º |</h1>
                <Image src="https://static.significados.com.br/flags/br.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Team Vikings</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">830</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] p-2 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>11º |</h1>
                <Image src="https://static.significados.com.br/flags/jp.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Crazy Raccoon</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">800</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] p-2 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>12º |</h1>
                <Image src="https://static.significados.com.br/flags/kr.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Visions Strikers</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">784</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] p-2 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>13º |</h1>
                <Image src="https://static.significados.com.br/flags/br.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>FURIA Esports</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">650</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] p-2 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>14º |</h1>
                <Image src="https://static.significados.com.br/flags/kr.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>NUTURN Gaming</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">630</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] p-2 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>15º |</h1>
                <Image src="https://static.significados.com.br/flags/us.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>100 Thieves</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">600</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] p-2 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>16º |</h1>
                <Image src="https://static.significados.com.br/flags/us.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Cloud9</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">592</div>
            </div>

    
        </main>
    
    </div>
);
}
