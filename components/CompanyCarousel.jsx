"use client"

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Comapnies from "../app/data/companies.json";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const CompanyCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full py-10"
    >
      <CarouselContent className="flex gap-5 sm:gap-20 items-center">
        {Comapnies.map(({ name, path, id }) => {
          return (
            <CarouselItem key={id} className="basis-1/3 sm:basis-1/6">
              <Image
                src={path}
                alt={name}
                className="h-9 sm:h-14 w-auto object-contain"
                width={200}
                height={56}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default CompanyCarousel;
