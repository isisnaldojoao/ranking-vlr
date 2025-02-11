import Link from 'next/link';

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="p-5">
        <h1 className="text-xl font-bold">VCT Teams Nerdola´s Rankings</h1>
      </header>
      <main className="flex flex-col sm:grid grid-cols-2 gap-8 row-start-2 items-center sm:items-start">
        <div className="bg-white flex text-black p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
          <Link href="/ranking">2021/1</Link>
        </div>

        <div className="bg-white flex text-black p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
          <Link href="/ranking2">2021/2</Link>
        </div>

        <div className="bg-white flex text-black p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
          <Link href="/ranking3">2022/1</Link>
        </div>

        <div className="bg-white flex text-black p-5 w-[350px] items-center justify-center rounded-lg transition-all hover:scale-105">
          <Link href="/ranking4">2022/2</Link>
        </div>

        
      </main>
      
    </div>
  );
}
