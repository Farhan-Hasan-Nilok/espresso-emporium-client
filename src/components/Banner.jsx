import cup from '../assets/images/icons/1.png'
import badge from '../assets/images/icons/2.png'
import beans from '../assets/images/icons/3.png'
import can from '../assets/images/icons/4.png'
const Banner = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 bg-[#ECEAE3] p-10 md:place-items-center gap-5">
            <div>
                <img src={cup} alt="" />
                <h3 className='text-2xl text-[#331A15]'>Awesome Aroma</h3>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div>
                <img src={badge} alt="" />
                <h3 className='text-2xl text-[#331A15]'>High Quality</h3>
                <p>We served the coffee to you maintaining the best quality</p>
            </div>
            <div>
                <img src={beans} alt="" />
                <h3 className='text-2xl text-[#331A15]'>Pure Grades</h3>
                <p>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div>
                <img src={can} alt="" />
                <h3 className='text-2xl text-[#331A15]'>Proper Rosting</h3>
                <p>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
    );
};

export default Banner;