// "use client";
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTumblr, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="z-10 relative pt-12 pb-6 text-white"
      style={{
        backgroundImage: "url('/footer-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className="bg-black bg-opacity-90">
        {/* Grid Layout */}
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto px-6 py-10 max-w-7xl text-white">

          {/* Subscribe */}
          <div>
            <h3 className="mb-2 font-bold text-lg">SUBSCRIBE TO MAIL!</h3>
            <p className="mb-4 text-sm">
              Get our Daily email newsletter with Special Services, Updates, Offers and more
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="flex-1 bg-white px-4 py-2 rounded-l outline-none text-black text-sm"
              />
              <button className="bg-[color:var(--color-primary)] px-4 rounded-r font-semibold text-white text-sm">
                SIGNUP
              </button>
            </div>
            <div className="flex space-x-4 mt-6 text-lg">
              <FaFacebookF />
              <FaGoogle />
              <FaTumblr />
              <FaLinkedinIn />
              <FaTwitter />
            </div>
          </div>

          {/* Services */}
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

          {/* About */}
          <div>
            <h3 className="mb-4 font-bold text-lg">ABOUT US</h3>
            <p className="mb-4 text-sm">
              Hello we are Comre. We are here to provide you the best offers through our coupons. Hello we are We are here to provide you coupons.
            </p>
            <ul className="space-y-2 text-sm">
              <li>📍 65-71 Wembley Hill Rd, Wembley HA9 8DP, UK</li>
              <li>📞 Customer Support: <strong>44 1234 563789</strong></li>
              <li>📧 Email: <strong>mail@NationalCab.com</strong></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="px-6 pt-4 border-gray-700 border-t text-gray-400 text-xs text-center">
          <p className="space-x-4 mb-2">
            <span>FAQ</span> | <span>NEWS</span> | <span>CLIENT SUPPORT</span>
          </p>
          <p>COPYRIGHTS © 2015 NATIONAL CAB. ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
}
