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
import { useIsMobile } from "@/hooks/use-mobile";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

const DEFAULT_ITEMS: GalleryItem[] = [
  {
    id: "yt-1",
    title: "Cinematic Brand Narrative",
    summary: "Professional AI-driven brand storytelling with high-fidelity visual composition.",
    url: "/contact",
    image: "https://www.youtube.com/watch?v=MdO8OfPhXn0",
  },
  {
    id: "yt-2",
    title: "Dynamic Product Showcase",
    summary: "Hyper-realistic product rendering and cinematic motion for luxury markets.",
    url: "/contact",
    image: "https://www.youtube.com/watch?v=slkVfPFy2qc",
  },
  {
    id: "yt-3",
    title: "AI Visual Innovation",
    summary: "Exploring the boundaries of generative videography for modern digital platforms.",
    url: "/contact",
    image: "https://www.youtube.com/watch?v=XjSoPFkvS-0",
  },
  {
    id: "yt-4",
    title: "Atmospheric Cinematography",
    summary: "Deep atmospheric lighting and complex environment generation powered by AI.",
    url: "/contact",
    image: "https://www.youtube.com/watch?v=iklgAqUod8c",
  },
  {
    id: "yt-5",
    title: "Global Supply Chain Vision",
    summary: "Visualizing global logistics and successful partnerships through a cinematic lens.",
    url: "/contact",
    image: "https://www.youtube.com/watch?v=l8nC8GtoFgs",
  },
  {
    id: "yt-6",
    title: "Next-Gen Social Shorts",
    summary: "High-impact short-form content designed for maximum engagement on Reels and TikTok.",
    url: "/contact",
    image: "https://www.youtube.com/shorts/bBu5SjsMbHY",
  },
  {
    id: "yt-7",
    title: "Creative AI Motion",
    summary: "Fluid simulations and dynamic motion graphics optimized for mobile viewing.",
    url: "/contact",
    image: "https://www.youtube.com/shorts/LWkr8HuKvxU",
  },
  {
    id: "yt-8",
    title: "High-Speed Cinematics",
    summary: "Rapid-fire visual storytelling with hyper-realistic textures and lighting.",
    url: "/contact",
    image: "https://www.youtube.com/shorts/AizTkzhBekU",
  },
  {
    id: "yt-9",
    title: "Future of Digital Media",
    summary: "Immersive AI productions that redefine brand presence in the digital era.",
    url: "/contact",
    image: "https://www.youtube.com/shorts/etffHurdDsc",
  },
];

interface AICreativeGalleryProps {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
}

const AICreativeGallery = ({
  heading = "AI Production Showcase",
  demoUrl = "/contact",
  items = DEFAULT_ITEMS,
}: AICreativeGalleryProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const isMobile = useIsMobile();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!carouselApi) return;
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

  if (!isMounted) return null;

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
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
          {!isMobile && (
            <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
              <Button
                size="icon"
                variant="outline"
                onClick={() => carouselApi?.scrollPrev()}
                disabled={!canScrollPrev}
                className="rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white disabled:opacity-30"
              >
                <ArrowLeft className="size-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => carouselApi?.scrollNext()}
                disabled={!canScrollNext}
                className="rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white disabled:opacity-30"
              >
                <ArrowRight className="size-5" />
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="w-full">
        {isMobile ? (
          <div className="px-6 space-y-8">
            {items.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="relative"
          >
            <CarouselContent className="ml-4 md:ml-20">
              {items.map((item) => (
                <CarouselItem key={item.id} className="pl-4 basis-full md:basis-[452px]">
                  <GalleryCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
      </div>
    </section>
  );
};

function GalleryCard({ item }: { item: GalleryItem }) {
  const isYouTube = item.image.includes('youtube.com') || item.image.includes('youtu.be');
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\/shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };
  
  const isVideo = item.image.toLowerCase().endsWith('.mp4') || item.image.includes('video') || item.image.includes('.mov') || isYouTube;
  const youtubeId = isYouTube ? getYouTubeId(item.image) : null;

  return (
    <div className="group h-full bg-[#FAFAF8] rounded-[32px] overflow-hidden border border-border/50 shadow-sm hover:shadow-2xl transition-all">
      <div className="relative aspect-[9/16] md:aspect-[3/4] overflow-hidden bg-black shadow-inner">
        <div className="absolute inset-0 h-full w-full origin-bottom transition duration-500 group-hover:scale-105">
          {isYouTube && youtubeId ? (
            <div className="relative w-full h-full">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1`}
                className="absolute inset-0 w-full h-full pointer-events-none scale-[1.01]"
                allow="autoplay; encrypted-media"
                style={{ border: 'none', objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-transparent z-10" />
            </div>
          ) : isVideo ? (
            <video
              className="h-full w-full object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              key={item.image}
            >
              <source src={item.image} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover object-center"
              data-ai-hint="ai production"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
}

export { AICreativeGallery };
