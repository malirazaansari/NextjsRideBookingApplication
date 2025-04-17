import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTumblr, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="z-10 relative bg-[color:var(--color-background)] pt-12 pb-6 border-gray-800 border-t text-[color:var(--color-foreground)]"
    style={{ backgroundImage: "url('/footer-bg.jpg')" }}
    >
      {/* Grid Layout */}
      <div className="gap-10 grid grid-cols-1 md:grid-cols-3 mx-auto px-6 max-w-7xl text-white">

        {/* Subscribe Section */}
        <div>
          <h3 className="mb-2 font-bold text-lg">SUBSCRIBE TO MAIL!</h3>
          <p className="mb-4 text-sm">Get our Daily email newsletter with Special Services, Updates, Offers and more</p>
          <div className="flex">
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="flex-1 bg-[color:var(--color-secondary)] px-4 py-2 border-none rounded-l outline-none text-sm"
            />
            <button className="bg-[color:var(--color-accent)] px-4 rounded-r font-semibold text-white text-sm">
              SIGNUP
            </button>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 text-white text-lg">
            <FaFacebookF />
            <FaGoogle />
            <FaTumblr />
            <FaLinkedinIn />
            <FaTwitter />
          </div>
        </div>

        {/* Services Offered */}
        <div>
          <h3 className="mb-4 font-bold text-lg">WE GLAD TO OFFER</h3>
          <ul className="space-y-2 text-sm">
            <li>➤ 24 / 7 Taxi Service To Any Where Around The City</li>
            <li>➤ Sending Taxi Booking Alert By SMS</li>
            <li>➤ GPS Tracking System For Location Guessing</li>
            <li>➤ Instant Printed Bills In Car On Departure</li>
            <li>➤ Magazine And News Papers For Reading On Ride</li>
            <li>➤ Credit And Debit Card Payment Available</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="mb-4 font-bold text-lg">ABOUT US</h3>
          <p className="mb-4 text-sm">Hello we are Comre. We are here to provide you the best offers through our coupons. Hello we are We are here to provide you coupons.</p>
          <ul className="space-y-2 text-sm">
            <li>
              📍 65-71 Wembley Hill Rd, Wembley HA9 8DP, UK
            </li>
            <li>
              📞 Customer Support: <strong>44 1234 563789</strong>
            </li>
            <li>
              📧 Email: <strong>mail@NationalCab.com</strong>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 pt-4 border-gray-800 border-t text-gray-400 text-xs text-center">
        <p className="space-x-4 mb-2">
          <span>FAQ</span> | <span>NEWS</span> | <span>CLIENT SUPPORT</span>
        </p>
        <p>COPYRIGHTS © 2015 NATIONAL CAB. ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
}
