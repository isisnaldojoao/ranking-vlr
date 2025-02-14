import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="p-5 flex items-center justify-center">
        <h1 className="text-xl font-bold">VCT Teams Nerdola´s Rankings</h1>
        <Image src="/champions.png" width={100} height={100} alt="logo" className='animate-slowbounce'/>
      </header>
      <main className="flex flex-col sm:grid grid-cols-2 gap-8 row-start-2 items-center sm:items-start">
        <Link href="/ranking">
          <div className="bg-white flex text-black p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
            2021/1
          </div>
        </Link>

        <Link href="/ranking2">
          <div className="bg-white flex text-black p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
            2021/2
          </div>
        </Link>

        <Link href="/ranking3">
          <div className="bg-white flex text-black p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
          2021/3
          </div>
        </Link>

        <Link href="/ranking4">
          <div className="bg-white flex text-black p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
            2022/1
          </div>
        </Link>

        <Link href="/ranking5">
          <div className="bg-white flex text-black p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
            2022/2
          </div>
        </Link>

        <Link href="/ranking6">
          <div className="bg-yellow-500 flex text-white p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
            2022/3
          </div>
        </Link>

      </main>
        <Image src="/torreta.png" width={100} height={100} alt="logo" className='mt-5 animate-pulse'/>
    </div>
  );
}
