
const ContactUs = () => {
    return (
        <div>
          <div className="px-24 pt-6">
            <p className="text-lg text-slate-500 pl-4">OurSports/Contact</p>
            <h2 className="capitalize pb-20  text-5xl font-semibold text-left  pt-14">
              {" "}
              Contact
            </h2>
          </div>
          <div>
            <div className="bg-rooms-bg w-full h-[500px] bg-center bg-cover">
              <div className="text-center flex items-center justify-center">
                <div className="text-center my-32 ">
                  <h2 className="text-4xl md:text-5xl block p-4  text-blue-300 font-extrabold bg-black">
                    Welcome to visit our website{" "}
                  </h2>
    
                  {/* <h2 className="text-4xl md:text-5xl text-blue-400 mx-20 pb-4 font-extrabold bg-black">
                    
                  </h2> */}
                  <button className="border-2 border-blue-400 h-12 mx-auto mt-8 text-white bg-blue-400 hover:bg-[#ffffff09] font-bold text-xl w-[300px]">
                    INFORMATION & BOOKING
                  </button>
                </div>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115602.33281614627!2d-3.867635874346354!3d40.41329003138435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc42e3783261bc8b%3A0xa6ec2c940768a3ec!2sSpain!5e0!3m2!1sen!2sbd!4v1696844978179!5m2!1sen!2sbd"
              loading="lazy"
              className="border-0 w-[100%] h-[450px] loading-[lazy] "
            ></iframe>
          </div>
        </div>
      );
};

export default ContactUs;