'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {

return (
    <footer className="w-full p-5 text-white flex flex-row items-center justify-between gap-5 bg-[#ff4656]">
        <div className='flex gap-2'>
            <Link
            target='blank'
            href={"https://x.com/nerdola_vlr"}
            >
                <Image src="/twitter (1).svg" width={40} height={40} alt="logo" className='bg-black p-2 rounded-full' />
            </Link>
            <Link
            target='blank'
            href={"https://www.twitch.tv/nerdola_vlr"}
            >
            <Image src="/twitch (1).svg" width={40} height={40} alt="logo"  className='bg-purple-700 p-2 rounded-full'/>
            </Link>
        </div>
        <div className='flex flex-row gap-2'>
            <h1>Feito por:</h1>
            <Link
                target='blank'
                href={'https://dev-portifolio-gold.vercel.app/'}
                className='font-bold'
            >John</Link>
        </div>
        
    </footer>
    );
}