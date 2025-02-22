import Link from 'next/link';
import Image from 'next/image';
import Legend from '../../components/legend/legends';

export default function Home() {
    return (
    <div className="bg-black text-white items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <header className="w-full p-5 flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold">VCT Teams Nerdola´s Rankings</h1>
        
        <Link 
            className="w-1/4 bg-white text-black p-5 h-[50px] flex items-center justify-start rounded-lg transition-all hover:scale-105 self-start"
            href={"/"}>
            Home
        </Link>
    </header>

        <main className="row-start-2 items-center sm:items-start w-full">
            <div className='flex items-center justify-center m-5'>
                <h1>Version 12.0</h1>
            </div>
            <Legend
                
            />

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105">
                <h1>1º |</h1>
                <Image src="https://static.significados.com.br/flags/sg.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold '>Paper Rex</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">2050</div>
            </div>

            <div className="grid grid-cols-4 bg-purple-700 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>2º |</h1>
                <Image src="https://static.significados.com.br/flags/gb.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold '>Fnatic</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1768</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>3º |</h1>
                <img src="https://static.significados.com.br/flags/br.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold '>LOUD</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1432</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>4º |</h1>
                <Image src="https://static.significados.com.br/flags/kr.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>DRX</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1260</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>5º |</h1>
                <Image src="https://static.significados.com.br/flags/cn.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>EDward Gaming</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1188</div>
            </div>

            <div className="grid grid-cols-4 bg-purple-400 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>6º |</h1>
                <Image src="https://static.significados.com.br/flags/us.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Sentinels</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1096</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>7º |</h1>
                <Image src="https://static.significados.com.br/flags/ua.svg" width={100} height={50} alt="logo"/>
                <h3 className='text-xl font-bold m-2'>Natus Vincere</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">990</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>8º |</h1>
                <Image src="https://static.significados.com.br/flags/kr.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Gen G. Esports</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">720</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>9º |</h1>
                <Image src="https://static.significados.com.br/flags/tr.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>FUT Esposts</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">710</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>10º |</h1>
                <Image src="https://static.significados.com.br/flags/cn.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Bilibili Gaming</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">660</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>11º |</h1>
                <Image src="https://static.significados.com.br/flags/us.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>NRG</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">512</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>12º |</h1>
                <Image src="https://static.significados.com.br/flags/jp.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>ZETA DIVISION</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">504</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>13º |</h1>
                <Image src="https://static.significados.com.br/flags/cn.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>FunPlus Phoenix</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">470</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>14º |</h1>
                <Image src="https://static.significados.com.br/flags/es.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>GiantX</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">470</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>15º |</h1>
                <Image src="https://static.significados.com.br/flags/ar.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>KRU Esports</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">344</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>16º |</h1>
                <Image src="https://static.significados.com.br/flags/us.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>100 Thieves</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">272</div>
            </div>
    
        </main>
    
    </div>
);
}
