
import Image from 'next/image';
import Legend from '../../components/legend/legends';
import Header from '../../components/header/header';

const footerLinks = [
    { href: '/ranking10', text: '2023/3' },
    { href: '/', text: 'Menu' },
    { href: '/ranking12', text: '2024/0' }
];


export default function Home() {
    return (
    <div className="bg-[#0f1923] text-white items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <header className="w-full p-5 flex flex-col items-center justify-center">
        <Header logoSrc="/nerdolalogo.png" links={footerLinks} />
    </header>

        <main className="row-start-2 items-center sm:items-start w-full">
            <div className='flex items-center justify-center m-5'>
                <h1>Version 10.0</h1>
            </div>
            <Legend
                
            />

            <div className="grid grid-cols-4 bg-gradient-to-r from-purple-400 to-purple-700 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105">
                <h1>1º |</h1>
                <Image src="https://static.significados.com.br/flags/gb.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold '>Fnatic</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">3142</div>
            </div>

            <div className="grid grid-cols-4 bg-yellow-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>2º |</h1>
                <Image src="https://static.significados.com.br/flags/us.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold '>Evil Geniuses</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">2580</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>3º |</h1>
                <Image src="https://static.significados.com.br/flags/sg.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold '>Paper Rex</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">2460</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>4º |</h1>
                <Image src="https://static.significados.com.br/flags/br.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>LOUD</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">2350</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>5º |</h1>
                <Image src="https://static.significados.com.br/flags/us.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>NRG</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1920</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>6º |</h1>
                <Image src="https://static.significados.com.br/flags/kr.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>DRX</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1860</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>7º |</h1>
                <Image src="https://static.significados.com.br/flags/ua.svg" width={100} height={50} alt="logo"/>
                <h3 className='text-xl font-bold m-2'>Natus Vincere</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1700</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>8º |</h1>
                <Image src="https://static.significados.com.br/flags/cn.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>EDward Gaming</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1269</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>9º |</h1>
                <Image src="https://static.significados.com.br/flags/tr.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>FUT Esposts</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">840</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>10º |</h1>
                <Image src="https://static.significados.com.br/flags/jp.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>ZETA DIVISION</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">830</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>11º |</h1>
                <Image src="https://static.significados.com.br/flags/ar.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Leviatán</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">800</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>12º |</h1>
                <Image src="https://static.significados.com.br/flags/ar.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>KRU</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">792</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>13º |</h1>
                <Image src="https://static.significados.com.br/flags/nl.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Team Liquid</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">760</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>14º |</h1>
                <Image src="https://static.significados.com.br/flags/cn.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Bilibili Gaming</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">720</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>15º |</h1>
                <Image src="https://static.significados.com.br/flags/th.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>TALON </h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">605</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>16º |</h1>
                <Image src="https://static.significados.com.br/flags/kr.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>T1</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">605</div>
            </div>
    
        </main>
    
    </div>
);
}
