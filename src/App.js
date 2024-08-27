import MyCard from './components/MyCard'
function App() {

  return (
    <div className="App h-screen bg-slate-900 p-4 ">
      <div className='max-w-sm mx-auto bg-white md:max-w-xl overflow-hidden rounded-lg md:flex'>
        <div>
          <img className='w-full h-48 min-w-60 object-cover' src="https://images.pexels.com/photos/27860200/pexels-photo-27860200/free-photo-of-two-old-fishermen.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt='img'/>
        </div>
        <div className='p-2 '>
        <div className='uppercase text-sm text-indigo-500 font-medium'>
          An awesome card
        </div>
        <div className='text-sm'>
          <a href='#' className='hover:text-slate-300'>Tailwind is easy once you understand it</a>
          <p className='text-slate-500 pt-[2px]'>lorem10knkdn
          </p>
          
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
