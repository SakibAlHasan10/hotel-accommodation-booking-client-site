// import { FaFacebookF, FaInstagram } from "react-icons/fa";
// import { CiYoutube } from "react-icons/ci";
const Footer = () => {
  return (
    <div className="bg-blue-900 text-white text-base pt-16 pb-8">
      <div className="max-w-screen-lg mx-auto px-6">

      <footer className="footer text-white">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Resurgent</a>
          <a className="link link-hover">Hotel</a>
          <a className="link link-hover">Transport</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Rooms</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">
                Enter your email address
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
        <p className="border-b-2 mt-12 mb-6 border-[#b3b2b2]"></p>
        <div className="flex text-[#d5cfcf] items-center justify-between">
            <h2 className=" text-3xl font-semibold">Booking</h2>
            <p>Copyright © Booking 2023.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
