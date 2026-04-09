
"use client";

import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ImageOff } from 'lucide-react';

export interface MediaItemType {
    id: number;
    type: string;
    title: string;
    desc: string;
    url: string;
    span: string;
}

const MediaItem = ({ item, className, onClick }: { item: MediaItemType, className?: string, onClick?: () => void }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [isBuffering, setIsBuffering] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '100px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsInView(entry.isIntersecting);
            });
        }, options);

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    useEffect(() => {
        let mounted = true;

        const handleVideoPlay = async () => {
            if (!videoRef.current || !isInView || !mounted) return;

            try {
                if (videoRef.current.readyState >= 3) {
                    setIsBuffering(false);
                    await videoRef.current.play();
                } else {
                    setIsBuffering(true);
                    await new Promise((resolve) => {
                        if (videoRef.current) {
                            videoRef.current.oncanplay = resolve;
                        }
                    });
                    if (mounted) {
                        setIsBuffering(false);
                        await videoRef.current.play();
                    }
                }
            } catch (error) {
                console.warn("Video playback failed:", error);
            }
        };

        if (isInView) {
            handleVideoPlay();
        } else if (videoRef.current) {
            videoRef.current.pause();
        }

        return () => {
            mounted = false;
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.removeAttribute('src');
                videoRef.current.load();
            }
        };
    }, [isInView]);

    if (hasError) {
        return (
            <div className={`${className} flex flex-col items-center justify-center bg-muted/20 border-2 border-dashed border-border p-4 text-center`}>
                <ImageOff className="w-8 h-8 text-muted-foreground mb-2" />
                <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest leading-none">Not Found</span>
                <span className="text-[8px] text-muted-foreground/40 mt-1 break-all line-clamp-1">{item.url}</span>
            </div>
        );
    }

    if (item.type === 'video') {
        return (
            <div className={`${className} relative overflow-hidden bg-black/5`}>
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    onClick={onClick}
                    playsInline
                    muted
                    loop
                    preload="auto"
                    style={{
                        opacity: isBuffering ? 0.8 : 1,
                        transition: 'opacity 0.2s',
                    }}
                >
                    <source src={item.url} type="video/mp4" />
                </video>
                {isBuffering && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                        <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className={`${className} relative cursor-pointer`} onClick={onClick}>
            <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={() => setHasError(true)}
                loading="eager"
            />
        </div>
    );
};

interface GalleryModalProps {
    selectedItem: MediaItemType;
    isOpen: boolean;
    onClose: () => void;
    setSelectedItem: (item: MediaItemType | null) => void;
    mediaItems: MediaItemType[];
}

const GalleryModal = ({ selectedItem, isOpen, onClose, setSelectedItem, mediaItems }: GalleryModalProps) => {
    const [dockPosition, setDockPosition] = useState({ x: 0, y: 0 });

    if (!isOpen) return null;

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 w-full z-[1001] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
            >
                <div className="absolute inset-0" onClick={onClose} />
                
                <div className="relative w-full max-w-5xl aspect-video bg-gray-950 rounded-2xl overflow-hidden shadow-2xl flex flex-col pointer-events-auto">
                    <div className="flex-1 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedItem.id}
                                className="w-full h-full flex items-center justify-center bg-black/40"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <MediaItem item={selectedItem} className="w-full h-full" onClick={onClose} />
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
                                    <h3 className="text-white text-2xl font-bold font-sora">
                                        {selectedItem.title}
                                    </h3>
                                    <p className="text-white/60 text-base mt-2 font-inter italic">
                                        {selectedItem.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                <motion.button
                    className="absolute top-8 right-8 p-3 rounded-full bg-white/10 text-white hover:bg-primary hover:text-black backdrop-blur-sm z-[1002] transition-colors"
                    onClick={onClose}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <X className='w-6 h-6' />
                </motion.button>
            </motion.div>

            <motion.div
                drag
                dragMomentum={false}
                initial={false}
                animate={{ x: dockPosition.x, y: dockPosition.y }}
                onDragEnd={(_, info) => {
                    setDockPosition(prev => ({
                        x: prev.x + info.offset.x,
                        y: prev.y + info.offset.y
                    }));
                }}
                className="fixed z-[1003] left-1/2 bottom-8 -translate-x-1/2 touch-none"
            >
                <motion.div
                    className="relative rounded-2xl bg-primary/10 backdrop-blur-3xl border border-primary/30 shadow-2xl"
                >
                    <div className="flex items-center -space-x-3 px-4 py-3">
                        {mediaItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedItem(item);
                                }}
                                style={{
                                    zIndex: selectedItem.id === item.id ? 30 : mediaItems.length - index,
                                }}
                                className={`
                                    relative group
                                    w-12 h-12 md:w-14 md:h-14 flex-shrink-0 
                                    rounded-xl overflow-hidden 
                                    cursor-pointer hover:z-20
                                    ${selectedItem.id === item.id
                                        ? 'ring-2 ring-primary shadow-lg scale-110'
                                        : 'hover:ring-2 hover:ring-white/50'}
                                `}
                                initial={{ rotate: index % 2 === 0 ? -10 : 10 }}
                                animate={{
                                    scale: selectedItem.id === item.id ? 1.25 : 1,
                                    rotate: selectedItem.id === item.id ? 0 : index % 2 === 0 ? -10 : 10,
                                    y: selectedItem.id === item.id ? -10 : 0,
                                }}
                            >
                                <MediaItem item={item} className="w-full h-full" onClick={() => setSelectedItem(item)} />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/20" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
};

interface InteractiveBentoGalleryProps {
    mediaItems: MediaItemType[]
    title: string
    description: string
}

const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({ mediaItems, title, description }) => {
    const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);

    return (
        <div className="container mx-auto px-6 py-12 max-w-7xl">
            <div className="mb-16 text-center">
                <motion.h2
                    className="text-4xl md:text-5xl font-sora font-light text-[#0a0a0a]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {title.split(' ').map((word, i) => (
                      <span key={i} className={word === 'Showcase' || word === 'Creative' || word === 'Work' || word === 'Gallery' ? "text-[#f89b34] font-bold italic" : ""}>
                        {word}{' '}
                      </span>
                    ))}
                </motion.h2>
                <motion.p
                    className="mt-4 text-[#f89b34] font-bold uppercase tracking-[4px] text-xs"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    {description}
                </motion.p>
            </div>
            
            <div className="relative min-h-[400px]">
              <AnimatePresence mode="wait">
                  {selectedItem ? (
                      <GalleryModal
                          selectedItem={selectedItem}
                          isOpen={true}
                          onClose={() => setSelectedItem(null)}
                          setSelectedItem={setSelectedItem}
                          mediaItems={mediaItems}
                      />
                  ) : (
                      <motion.div
                          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]"
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={{
                              hidden: { opacity: 0 },
                              visible: {
                                  opacity: 1,
                                  transition: { staggerChildren: 0.05 }
                              }
                          }}
                      >
                          {mediaItems.map((item) => (
                              <motion.div
                                  key={item.id}
                                  layoutId={`media-${item.id}`}
                                  className={`relative overflow-hidden rounded-2xl group cursor-pointer border border-border/10 shadow-sm ${item.span}`}
                                  onClick={() => setSelectedItem(item)}
                                  variants={{
                                      hidden: { opacity: 0, scale: 0.98 },
                                      visible: {
                                          opacity: 1,
                                          scale: 1,
                                          transition: { duration: 0.2 }
                                      }
                                  }}
                                  whileHover={{ y: -5 }}
                              >
                                  <MediaItem
                                      item={item}
                                      className="absolute inset-0 w-full h-full"
                                      onClick={() => setSelectedItem(item)}
                                  />
                                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                      <h3 className="relative text-white text-lg font-bold font-sora">
                                          {item.title}
                                      </h3>
                                      <p className="relative text-white/70 text-sm mt-1 line-clamp-2 font-inter">
                                          {item.desc}
                                      </p>
                                  </div>
                              </motion.div>
                          ))}
                      </motion.div>
                  )}
              </AnimatePresence>
            </div>
        </div>
    );
};

export default InteractiveBentoGallery;
