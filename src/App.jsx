import logo from './assets/images/more/logo1.png';
import Banner from './components/Banner';
import ShowCoffee from './components/CoffeeHome.jsx';
function App() {

  return (
    <>
      {/* <p className='text-blue-500'>Welcome to the world of premiun coffee</p> */}
      <div className="bg-[url('./assets/images/more/15.jpg')] w-full h-20">
        <div className='flex justify-center items-center'>
          <img src={logo} className='w-16' alt="" />
          <h2 className='text-3xl text-white'>Espresso Emporium</h2>
        </div>
      </div>
      <div className="bg-[url('./assets/images/more/3.png')] h-[800px] w-full grid lg:grid-cols-3 place-items-center">
        <div></div>
        <div></div>
        <div className=''>
          <h2 className='text-3xl text-white'>Would you like a Delicious Cup of Coffee ?</h2>
          <p className='text-white text-lg py-8'>It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
          <button className='bg-[#E3B577] px-5 py-1 text-lg hover:bg-transparent hover:text-white hover:border hover:border-white'>Learn More</button>
        </div>
      </div>
      <Banner />
      <div className="bg-[url('./assets/images/more/1.png')] h-[100vh] mt-24">
        <ShowCoffee />
      </div>
    </>
  )
}

export default App;
