"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        name: string;
        testimonial: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        addAnimation();
    }, []);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    let touchStartX: number | null = null;

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!touchStartX) return;
        const touchEndX = e.touches[0].clientX;
        const swipeDistance = touchEndX - touchStartX;
        const threshold = 50; // Adjust this threshold according to your needs
        if (Math.abs(swipeDistance) >= threshold) {
            if (swipeDistance > 0) {
                handleSwipeRight();
            } else {
                handleSwipeLeft();
            }
            touchStartX = null;
        }
    };

    const handleSwipeLeft = () => {
        // Handle swipe left action
        console.log("Swiped left");
    };

    const handleSwipeRight = () => {
        // Handle swipe right action
        console.log("Swiped right");
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                className
            )}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className=" text-black bg-white w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0  px-8 py-6 md:w-[600px]"

                        key={idx}
                    >
                        <blockquote className="flex flex-col gap-2">
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                            ></div>
                            <div className="relative z-20 mt-6  flex flex-row items-center">
                                <span className="flex flex-col gap-1">
                                    <span className="font-bold text-sm md:text-lg leading-[1.6] text-black font-poppins">
                                        {item.name}
                                    </span>
                                </span>
                            </div>

                            <span className="relative z-20 sm:mb-3 text-sm md:text-lg leading-[1.6] text-black font-poppins">
                                {item.testimonial}
                            </span>

                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
