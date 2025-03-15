import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/footer/footer';

export default function Home() {
  return (
    <div className="bg-[#0f1923] min-h-screen flex flex-col items-center justify-between">
      <header className="p-5 flex items-center justify-center">
        <Image src="/nerdolalogo.png" width={300} height={200} alt="logo" className='animate-slowbounce'/>
      </header>
      <main className="w-full flex flex-col sm:w-full flex flex-col gap-8 row-start-2 items-center justify-items-center ">

        <div className='text-white flex items-center justify-center m-5'>
            <h1>Página não encontrada</h1>
        </div>
        <Link href="/">
            <div className="bg-white flex text-black mt-2 p-5 w-[250px] items-center justify-center rounded-lg transition-all hover:scale-105">
                Voltar para Home
            </div>
        </Link>

      </main>
        <Image src="/torreta.png" width={100} height={100} alt="logo" className='mt-5 animate-pulse'/>
        <Footer/>
    </div>
    
  );
}
