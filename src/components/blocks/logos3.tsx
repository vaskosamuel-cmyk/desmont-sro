"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Pracujeme s overenými materiálmi",
  logos = [
    {
      id: "logo-1",
      description: "Baumit",
      image: "/logos/logo-baumit.png",
      className: "h-10 w-auto object-contain grayscale opacity-50 transition-opacity duration-300 hover:opacity-100",
    },
    {
      id: "logo-2",
      description: "Ceresit",
      image: "/logos/logo-ceresit.png",
      className: "h-10 w-auto object-contain grayscale opacity-50 transition-opacity duration-300 hover:opacity-100",
    },
    {
      id: "logo-3",
      description: "Ytong",
      image: "/logos/logo-ytong.png",
      className: "h-10 w-auto object-contain grayscale opacity-50 transition-opacity duration-300 hover:opacity-100",
    },
    {
      id: "logo-4",
      description: "Knauf",
      image: "/logos/logo-knauf.png",
      className: "h-10 w-auto object-contain grayscale opacity-50 transition-opacity duration-300 hover:opacity-100",
    },
    {
      id: "logo-5",
      description: "Mapei",
      image: "/logos/logo-mapei.png",
      className: "h-10 w-auto object-contain grayscale opacity-50 transition-opacity duration-300 hover:opacity-100",
    },
    {
      id: "logo-6",
      description: "Isover",
      image: "/logos/logo-isover.png",
      className: "h-10 w-auto object-contain grayscale opacity-50 transition-opacity duration-300 hover:opacity-100",
    },
  ],
  className = "",
}: Logos3Props) => {
  return (
    <section className={`py-12 overflow-hidden shrink-0 w-full ${className}`}>
      <div className="container flex flex-col items-center text-center">
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A]/40 mb-10 px-6 text-center">
          {heading}
        </span>
      </div>
      <div className="pt-2">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl w-full">
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1, startDelay: 0 })]}
            className="w-full"
          >
            <CarouselContent className="ml-0 flex items-center gap-12 sm:gap-16">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-auto justify-center pl-0"
                >
                  <div className="mx-6 flex shrink-0 items-center justify-center min-h-[40px]">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={logo.className}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#F5F5F5] to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#F5F5F5] to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
