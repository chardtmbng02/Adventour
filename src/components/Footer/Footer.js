import "./Footer.css";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer
      id="chefftr"
      className="bottom-0 left-0 flex flex-col w-full gap-8 px-8 py-16 md:gap-12 footer-banner"
    >
      <div className="grid grid-cols-2 gap-8 2xsm:grid-cols-2 md:grid-cols-4 text-center ">
        <div className="flex flex-col gap-6">
          <label className="text-black font-bold uppercase">Heritage Sites</label>
          <ul className="flex flex-col gap-6 text-white">
            <li>Barasoain</li>
            <li>St. John The Baptish</li>
            <li>Casa Real Shrine</li>
            <li>Meyto Shrine</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <label className="text-black font-bold uppercase">Resorts</label>
          <ul className="flex flex-col gap-6 text-white">
            <li>Jed's Island Resort</li>
            <li>Klir Waterpark Resort</li>
            <li>Malolos Club Royale</li>
            <li>Amana Waterpark</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <label className="text-black font-bold uppercase">Ecological Sites</label>
          <ul className="flex flex-col gap-6 text-white">
            <li>Verdivia Falls</li>
            <Link to="/contact" className="text-white hover:text-red-600"><li>Bustos Dam</li></Link>
            <li>Angat Dam</li>
            <li>Bakas</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <label className="text-black font-bold uppercase">
            Shops
          </label>
          <ul className="flex flex-col gap-6 text-white">
            <li>Eurobake Restaurant</li>
            <li>Bistro Maloleño</li>
            <li>Kopi Brood Cafe</li>
            <li>Señora Carmen Resto</li>
          </ul>
        </div>
      </div>
      <div className="w-full h-px m-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>

      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="mx-auto">
          <span className="font-bold">AdvenTourist</span>
          <p className="text-white">&copy; Dec 2023 Christine May Pariñas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
