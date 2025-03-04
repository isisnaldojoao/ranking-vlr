
import Image from 'next/image';
import Legend from '../../components/legend/legends';
import Header from '../../components/header/header';

const footerLinks = [
    { href: '/ranking18', text: '2024/6' },
    { href: '/', text: 'Home' },
    { href: '/ranking20', text: '2025/1' }
];
export default function Home() {
    return (
    <div className="bg-[#0f1923] text-white items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <header className="w-full p-5 flex flex-col items-center justify-center">
        <Header logoSrc="/nerdolalogo.png" links={footerLinks} />
    </header>

        <main className="row-start-2 items-center sm:items-start w-full">
            <div className='flex items-center justify-center m-5'>
                <h1>Version 15.0</h1>
            </div>
            <Legend
                
            />

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105">
                <h1>1º |</h1>
                <Image src="https://static.significados.com.br/flags/es.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold '>Team Heretics</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">2110</div>
            </div>

            <div className="grid grid-cols-4 bg-yellow-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>2º |</h1>
                <Image src="https://static.significados.com.br/flags/cn.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold '>EDward Gaming</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">2084</div>
            </div>

            <div className="grid grid-cols-4 bg-purple-700 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>3º |</h1>
                <Image src="https://static.significados.com.br/flags/kr.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold '>Gen.G Esports</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">2016</div>
            </div>

            <div className="grid grid-cols-4 bg-purple-400 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>4º |</h1>
                <Image src="https://static.significados.com.br/flags/us.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Sentinels</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1690</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>5º |</h1>
                <Image src="https://static.significados.com.br/flags/sg.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Paper Rex</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1570</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>6º |</h1>
                <Image src="https://static.significados.com.br/flags/gb.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Fnatic</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1400</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>7º |</h1>
                <Image src="https://static.significados.com.br/flags/us.svg" width={100} height={50} alt="logo"/>
                <h3 className='text-xl font-bold m-2'>G2 Esports</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1386</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>8º |</h1>
                <Image src="https://static.significados.com.br/flags/ar.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Leviatán</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">1224</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>9º |</h1>
                <Image src="https://static.significados.com.br/flags/tr.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>FUT Esports</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">980</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>10º |</h1>
                <Image src="https://static.significados.com.br/flags/us.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>100 Thieves</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">860</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>11º |</h1>
                <Image src="https://static.significados.com.br/flags/cn.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>FunPlus Phoenix </h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">844</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>12º |</h1>
                <Image src="https://static.significados.com.br/flags/cn.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Trace Esports</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">816</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>13º |</h1>
                <Image src="https://static.significados.com.br/flags/kr.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>DRX</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">600</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>14º |</h1>
                <Image src="https://static.significados.com.br/flags/th.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>TALON</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">500</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>15º |</h1>
                <Image src="https://static.significados.com.br/flags/ar.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>KRU Esports</h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">488</div>
            </div>

            <div className="grid grid-cols-4 bg-gray-500 h-[100px] gap-4 m-5 flex items-center justify-center rounded-lg transition-all hover:scale-105 ">
                <h1>16º |</h1>
                <Image src="https://static.significados.com.br/flags/fr.svg" width={100} height={50} alt="logo"/>
                <h3  className='text-xl font-bold m-2'>Team Vitality </h3>
                <div className="bg-white p-2 rounded-lg text-black ml-2">384</div>
            </div>
    
        </main>
    
    </div>
);
}
