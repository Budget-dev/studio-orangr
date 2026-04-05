"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface AICreativeGalleryProps {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
}

const AICreativeGallery = ({
  heading = "AI Production Showcase",
  demoUrl = "/contact",
  items = [
    {
      id: "item-1",
      title: "Cinematic Milk Splash Commercial",
      summary: "High-speed fluid simulation and photorealistic lighting for premium dairy brand storytelling.",
      url: "/contact",
      image: "https://1234567890.sirv.com/WhatsApp%20Video%202026-04-01%20at%2012.26.30%20PM%20(8).mp4",
    },
    {
      id: "item-2",
      title: "Supply Chain & Analytics Visualization",
      summary: "From complex logistics to successful global partnerships, we visualize the entire business ecosystem with cinematic AI.",
      url: "/contact",
      image: "https://1234567890.sirv.com/WhatsApp%20Video%202026-04-01%20at%2012.26.30%20PM%20(7).mp4",
    },
    {
      id: "item-3",
      title: "Gourmet Burger Experience",
      summary: "High-impact restaurant advertisement showcasing photorealistic food textures and cinematic ingredient motion.",
      url: "/contact",
      image: "https://1234567890.sirv.com/WhatsApp%20Video%202026-04-01%20at%2012.26.30%20PM%20(5).mp4",
    },
    {
      id: "item-4",
      title: "Architectural AI Visuals",
      summary: "Bringing future properties and spaces to life with hyper-realistic AI architectural renders.",
      url: "/contact",
      image: "https://picsum.photos/seed/aivideo3/1200/800",
    },
    {
      id: "item-5",
      title: "Digital Avatar Storytelling",
      summary: "Compelling brand storytelling through photorealistic AI-driven characters and digital twins.",
      url: "/contact",
      image: "https://picsum.photos/seed/aivideo4/1200/800",
    },
  ],
}: AICreativeGalleryProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div className="max-w-2xl">
            <h2 className="mb-3 text-3xl font-black md:mb-4 md:text-5xl lg:mb-6 uppercase tracking-tighter text-secondary">
              {heading.split(' ').map((word, i) => (
                <span key={i} className={word === 'Showcase' || word === 'AI' ? "text-primary italic" : ""}>{word} </span>
              ))}
            </h2>
            <Link
              href={demoUrl}
              className="group flex items-center gap-1 text-sm font-bold md:text-base lg:text-lg text-primary uppercase tracking-widest"
            >
              Start Your Production
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white disabled:opacity-30"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white disabled:opacity-30"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            loop: true,
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
          className="relative"
        >
          <CarouselContent className="ml-4 md:ml-20">
            {items.map((item) => {
              const isVideo = item.image.includes('.mp4');
              return (
                <CarouselItem key={item.id} className="pl-4 basis-full md:basis-[452px]">
                  <div className="group flex flex-col justify-between h-full bg-[#FAFAF8] rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all p-6">
                    <div>
                      <div className="flex aspect-[3/2] overflow-hidden rounded-2xl bg-black">
                        <div className="flex-1">
                          <div className="relative h-full w-full origin-bottom transition duration-500 group-hover:scale-110">
                            {isVideo ? (
                              <video
                                src={item.image}
                                className="h-full w-full object-cover object-center"
                                autoPlay
                                muted
                                loop
                                playsInline
                              />
                            ) : (
                              <img
                                src={item.image}
                                alt={item.title}
                                className="h-full w-full object-cover object-center"
                                data-ai-hint="ai production"
                              />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <div className="mb-2 line-clamp-2 text-xl font-black text-secondary uppercase tracking-tight group-hover:text-primary transition-colors">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 text-sm text-muted-foreground italic leading-relaxed">
                        {item.summary}
                      </div>
                      <Link href={item.url} className="flex items-center text-xs font-black uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
                        Project Details{" "}
                        <ArrowRight className="ml-2 size-4" />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { AICreativeGallery };