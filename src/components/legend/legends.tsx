
export default function Legend() {
 
    return (
    <div className="flex gap-5 justify-center">
        <div className='flex gap-2 items-center'>
            <div className="w-10 h-10 bg-green-500 rounded-lg"></div>
            <p>Lockin</p>
        </div>
        <div className='flex gap-2 items-center'>
            <div className="w-10 h-10 bg-purple-500 rounded-lg"></div>
            <p>1º Masters</p>
        </div>
        <div className='flex gap-2 items-center'>
            <div className="w-10 h-10 bg-purple-700 rounded-lg"></div>
            <p>2º Masters</p>
        </div>
        <div className='flex gap-2 items-center'>
            <div className="w-10 h-10 bg-yellow-500 rounded-lg"></div>
            <p>Champions</p>
        </div>
    </div>
  );
};