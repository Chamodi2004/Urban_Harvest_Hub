import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-ecoGreen text-white py-8 mt-10">

      <div className="max-w-7xl mx-auto px-6">

        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

         
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">
              Urban Harvest Hub
            </h2>

            <p className="mt-2 text-sm">
              Sustainable living for everyone.
            </p>
          </div>

          {/* Footer Navigation */}
          <nav aria-label="Footer Navigation" className="text-lg">
            <ul className="flex flex-wrap justify-center gap-6">
              <li>
                <Link
                  to="/"
                  className="hover:text-gray-300 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:rounded"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/events"
                  className="hover:text-gray-300 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:rounded"
                >
                  Events
                </Link>
              </li>

              <li>
                <Link
                  to="/booking"
                  className="hover:text-gray-300 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:rounded"
                >
                  Booking
                </Link>
              </li>
            </ul>
          </nav>

        </div>

        
        <div className="border-t border-white/30 mt-6 pt-4 text-center text-sm">

          <p>
            © 2026 Urban Harvest Hub.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;