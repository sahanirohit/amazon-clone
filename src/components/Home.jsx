import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="home max-w-[1400px] mx-auto">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
        className="w-full banner__img z-[-1] mb-[-250px]"
      />

      {/* Product id, title, price, rating, images */}
      <div className="home__row flex z-[1] mx-[5px]">
        <Product
          id="1"
          title="Magic Bullet Blender, Small, Silver, 11 Piece Set"
          price={38.49}
          rating={5}
          image="https://m.media-amazon.com/images/I/71FDSqRpGtL._AC_SX679_.jpg"
        />
        <Product
          id="2"
          title="Preethi Eco Twin Jar Mixer Grinder, 550-Watt"
          price={123.12}
          rating={5}
          image="https://m.media-amazon.com/images/I/71Y57TQsSTL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row flex z-[1] mx-[5px]">
        <Product
          id="3"
          title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p)"
          price={208}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/91fAU6mxFsL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
        />
        <Product
          id="4"
          title="Z-Edge U24C 24-inch Curved Gaming Monitor, Full HD 1080P 1920x1080 LED"
          price={159}
          rating={5}
          image="https://m.media-amazon.com/images/I/81dqkYh5JSL._AC_SX679_.jpg"
        />
        <Product
          id="5"
          title="ASUS VG278QR 27” Gaming Monitor 165Hz Full HD (1920 x 1080)"
          price={229}
          rating={5}
          image="https://m.media-amazon.com/images/I/81eGtZyyavL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row flex z-[1] mx-[5px]">
        <Product
          id="6"
          title="MSI GV15 15.6 144Hz Gaming Laptop: Intel Core i5-11400H GTX 1650 8GB 256GB NVMe SSD, Wi-Fi 6, USB Type-C, Nahimic 3 Audio Immersion, Win 11: Black 11SC-633"
          price={574.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81cP2qZckeL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
