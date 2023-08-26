"use client"
import { useState } from "react";
import UnderlineLink from "@modules/common/components/underline-link";
import Image from "next/image";

const categories = [
  {
    name: "Clothes",
    imageSrc: "/Clothes.png",
    link: "/category1",
  },
  {
    name: "Hand bags",
    imageSrc: "/Handbag.png",
    link: "/category2",
  },
  {
    name: "Jewelry",
    imageSrc: "/Jewelry.png",
    link: "/category3",
  },
];

const FooterCTA = () => {
  const [activeCategory, setActiveCategory] = useState(-1);

  const handleCardClick = (index:number) => {
    if (activeCategory === index) {
      setActiveCategory(-1);
    } else {
      setActiveCategory(index);
    }
  };

  return (
    <div className="bg-amber-100 w-full">
      <div className="content-container flex flex-col gap-y-8 py-16 relative">
        <div>
          <h3 className="text-2xl-semi">Shop the latest styles</h3>
          <div className="mt-6">
            <UnderlineLink href="/store">Explore products</UnderlineLink>
          </div>
        </div>

        <div className="md:w-full">
          <div className="flex flex-col md:flex-row md:gap-x-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`relative w-full aspect-square mb-4 md:mb-0 md:w-[33%] md:aspect-[1/1] overflow-hidden transition-transform ${
                  activeCategory === index ? "scale-105" : ""
                }`}
                onClick={() => handleCardClick(index)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={category.imageSrc}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className={`absolute inset-0 flex flex-col items-center justify-end p-4 bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 ${
                  activeCategory === index ? "opacity-100" : ""
                }`}>
                  <div className="mb-2">
                    <UnderlineLink href={category.link}>{category.name}</UnderlineLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;
