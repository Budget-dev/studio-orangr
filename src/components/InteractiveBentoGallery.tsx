
"use client";

import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react';

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

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '50px',
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

    if (item.type === 'video') {
        return (
            <div className={`${className} relative overflow-hidden`}>
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
                        transform: 'translateZ(0)',
                        willChange: 'transform',
                    }}
                >
                    <source src={item.url} type="video/mp4" />
                </video>
                {isBuffering && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                )}
            </div>
        );
    }

    return (
        <img
            src={item.url}
            alt={item.title}
            className={`${className} object-cover cursor-pointer`}
            onClick={onClick}
            loading="lazy"
            decoding="async"
        />
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
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                }}
                className="fixed inset-0 w-full z-[1001] flex items-center justify-center p-4"
            >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-lg" onClick={onClose} />
                
                <div className="relative w-full max-w-5xl aspect-video bg-white/5 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
                    <div className="flex-1 relative bg-gray-900/40">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedItem.id}
                                className="w-full h-full flex items-center justify-center"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            >
                                <MediaItem item={selectedItem} className="w-full h-full object-contain" onClick={onClose} />
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-white text-2xl font-bold">
                                        {selectedItem.title}
                                    </h3>
                                    <p className="text-white/80 text-base mt-2">
                                        {selectedItem.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                <motion.button
                    className="absolute top-8 right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm z-[1002]"
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
                dragElastic={0.1}
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
                    className="relative rounded-2xl bg-[#f89b34]/20 backdrop-blur-2xl border border-[#f89b34]/30 shadow-2xl"
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
                                        ? 'ring-2 ring-[#f89b34] shadow-lg scale-110'
                                        : 'hover:ring-2 hover:ring-white/50'}
                                `}
                                initial={{ rotate: index % 2 === 0 ? -10 : 10 }}
                                animate={{
                                    scale: selectedItem.id === item.id ? 1.25 : 1,
                                    rotate: selectedItem.id === item.id ? 0 : index % 2 === 0 ? -10 : 10,
                                    y: selectedItem.id === item.id ? -10 : 0,
                                }}
                                whileHover={{
                                    scale: 1.4,
                                    rotate: 0,
                                    y: -15,
                                    transition: { type: "spring", stiffness: 400, damping: 25 }
                                }}
                            >
                                <MediaItem item={item} className="w-full h-full" onClick={() => setSelectedItem(item)} />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/20" />
                                {selectedItem.id === item.id && (
                                    <motion.div
                                        layoutId="activeGlow"
                                        className="absolute -inset-2 bg-[#f89b34]/20 blur-xl"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                )}
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
    const [items, setItems] = useState(mediaItems);
    const [isDragging, setIsDragging] = useState(false);

    return (
        <div className="container mx-auto px-6 py-12 max-w-7xl">
            <div className="mb-16 text-center">
                <motion.h2
                    className="text-4xl md:text-5xl font-sora font-light text-[#0a0a0a]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {title.split(' ').map((word, i) => (
                      <span key={i} className={word === 'Showcase' || word === 'Creative' || word === 'Work' ? "text-[#f89b34] font-bold italic" : ""}>
                        {word}{' '}
                      </span>
                    ))}
                </motion.h2>
                <motion.p
                    className="mt-4 text-[#f89b34] font-bold uppercase tracking-[4px] text-xs"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {description}
                </motion.p>
            </div>
            
            <div className="relative">
              <AnimatePresence mode="wait">
                  {selectedItem ? (
                      <GalleryModal
                          selectedItem={selectedItem}
                          isOpen={true}
                          onClose={() => setSelectedItem(null)}
                          setSelectedItem={setSelectedItem}
                          mediaItems={items}
                      />
                  ) : (
                      <motion.div
                          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]"
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={{
                              hidden: { opacity: 0 },
                              visible: {
                                  opacity: 1,
                                  transition: { staggerChildren: 0.1 }
                              }
                          }}
                      >
                          {items.map((item, index) => (
                              <motion.div
                                  key={item.id}
                                  layoutId={`media-${item.id}`}
                                  className={`relative overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing ${item.span}`}
                                  onClick={() => !isDragging && setSelectedItem(item)}
                                  variants={{
                                      hidden: { y: 50, scale: 0.9, opacity: 0 },
                                      visible: {
                                          y: 0,
                                          scale: 1,
                                          opacity: 1,
                                          transition: {
                                              type: "spring",
                                              stiffness: 350,
                                              damping: 25,
                                              delay: index * 0.05
                                          }
                                      }
                                  }}
                                  whileHover={{ scale: 1.02 }}
                                  drag
                                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                  dragElastic={1}
                                  onDragStart={() => setIsDragging(true)}
                                  onDragEnd={(e, info) => {
                                      setIsDragging(false);
                                      const moveDistance = info.offset.x + info.offset.y;
                                      if (Math.abs(moveDistance) > 100) {
                                          const newItems = [...items];
                                          const draggedItem = newItems[index];
                                          const targetIndex = moveDistance > 0 ?
                                              Math.min(index + 1, items.length - 1) :
                                              Math.max(index - 1, 0);
                                          newItems.splice(index, 1);
                                          newItems.splice(targetIndex, 0, draggedItem);
                                          setItems(newItems);
                                      }
                                  }}
                              >
                                  <MediaItem
                                      item={item}
                                      className="absolute inset-0 w-full h-full"
                                      onClick={() => !isDragging && setSelectedItem(item)}
                                  />
                                  <motion.div
                                      className="absolute inset-0 flex flex-col justify-end p-6"
                                      initial={{ opacity: 0 }}
                                      whileHover={{ opacity: 1 }}
                                      transition={{ duration: 0.2 }}
                                  >
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                      <h3 className="relative text-white text-lg font-bold">
                                          {item.title}
                                      </h3>
                                      <p className="relative text-white/70 text-sm mt-1 line-clamp-2">
                                          {item.desc}
                                      </p>
                                  </motion.div>
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
