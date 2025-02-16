import Link from 'next/link';
import Image from 'next/image';
import Legend from '../../components/legend/legends';

export default function Home() {
    return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
                <h1>Version 5.0</h1>
            </div>
            <Legend
            />

            <div className="grid grid-cols-4 bg-purple-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>1º |</h1>
                <Image src="https://static.significados.com.br/flags/us.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold '>NRG</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">2160</div>
            </div>

            <div className="grid grid-cols-4 bg-yellow-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>2º |</h1>
                <Image src="https://static.significados.com.br/flags/br.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold '>LOUD</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">2128</div>
            </div>

            <div className="grid grid-cols-4 bg-purple-700 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>3º |</h1>
                <img src="https://i.imgur.com/iAGv6WN.png" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold '>Natus Vincere</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">2120</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>4º |</h1>
                <Image src="https://static.significados.com.br/flags/gb.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Fnatic</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1918</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>5º |</h1>
                <Image src="https://static.significados.com.br/flags/kr.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>DRX</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1610</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>6º |</h1>
                <Image src="https://static.significados.com.br/flags/ru.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Paper Rex</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1170</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>7º |</h1>
                <Image src="https://static.significados.com.br/flags/sg.svg" width={100} height={50} alt="logo"/>
                <h3 className='text-xl font-bold m-2'>TALON</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1065</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>8º |</h1>
                <Image src="https://static.significados.com.br/flags/lu.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Leviatán</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">930</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>9º |</h1>
                <Image src="https://static.significados.com.br/flags/ar.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>ZETA DIVISION</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">710</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>10º |</h1>
                <Image src="https://static.significados.com.br/flags/us.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>100 Thieves</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">520</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>11º |</h1>
                <Image src="https://static.significados.com.br/flags/th.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>FURIA Esports</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">464</div>
            </div>

    
        </main>
    
    </div>
);
}
