import { BiRestaurant } from 'react-icons/bi';
import { ImLocation2 } from 'react-icons/im';
import { FaCarAlt } from 'react-icons/fa';
import { MdLocalCarWash, MdLocalAirport } from 'react-icons/md';
const Map = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-6  mt-6 bg-base-100 py-6 rounded-2xl">
      <div className="md:flex">
        <div className="md:w-1/3">
          <h2 className="text-3xl font-semibold">About this area</h2>
        </div>
        <div className="md:w-2/3 mt-6 md:mt-0 text-base font-normal">
          <div className="">
            <iframe className="w-full rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29715.069840025528!2d91.9480330869555!3d21.414157069695396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc880c658b5f1%3A0xbe5e1e83da2852a3!2sSayeman%20Beach%20Resort!5e0!3m2!1sen!2sbd!4v1699360472865!5m2!1sen!2sbd"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
          <div className="md:flex justify-between mt-8 leading-8">
            <div>
              <h2 className="text-2xl font-bold flex gap-1 items-center">
                <ImLocation2/>
                What&apos;s nearby</h2>
              <p className='ml-8'>Sugandha Beach - 7 min drive</p>
              <h2 className="text-2xl font-bold mt-6 flex gap-1 items-center">
                <FaCarAlt/>
                Getting around</h2>
              <p className='ml-8 mb-2 flex items-center gap-1'> <MdLocalAirport className='text-2xl font-bold'/>Cox&apos;s Bazar (CXB) - 16 min drive</p>
              <p className='ml-8 flex items-center gap-1'> <MdLocalCarWash className='text-2xl font-bold'/>Free airport shuttle</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold flex gap-1 items-center">
                <BiRestaurant/>
                Restaurants</h2>
                <div className='ml-8'>

              <p>Salt - 1 min drive</p>
              <p>Popeyes Chicken & Sea Food - 5 min walk</p>
              <p>Poushee Hotel and Restaurant - 4 min drive</p>
              <p>Sun Dancer Cafe&apos; N Restaurant - 19 min</p>
              <p>walk</p>
              <p>Mermaid Cafe - 15 min walk</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
