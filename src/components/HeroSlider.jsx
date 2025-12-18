import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: '/images/hero-elevator.jpg',
            title: 'Premium Elevator Solutions',
            subtitle: 'Excellence in Vertical Transportation',
            description: '25+ years of combined experience in elevator services',
        },
        {
            id: 2,
            image: '/images/hero-escalator.jpg',
            title: 'Expert Escalator Services',
            subtitle: 'Moving People, Moving Forward',
            description: 'Professional installation and maintenance services',
        },
        {
            id: 3,
            image: '/images/hero-maintenance.jpg',
            title: 'Reliable Maintenance & Repairs',
            subtitle: 'Your Safety, Our Priority',
            description: 'Swift and effective repair services for all elevator systems',
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative h-[70vh] md:h-screen w-full overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${slides[currentSlide].image})`,
                        }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex items-center">
                        <div className="container mx-auto px-4">
                            <div className="max-w-3xl">
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >
                                    <div className="inline-block mb-4">
                                        <span className="badge badge-accent text-white bg-amber-500 px-4 py-2 text-sm font-semibold">
                                            {slides[currentSlide].subtitle}
                                        </span>
                                    </div>

                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
                                        {slides[currentSlide].title}
                                    </h1>

                                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 md:mb-8">
                                        {slides[currentSlide].description}
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a href="/services" className="btn btn-primary btn-lg">
                                            Our Services
                                        </a>
                                        <a href="/contact" className="btn btn-secondary btn-lg bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-blue-600">
                                            Contact Us
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 group z-10"
                aria-label="Previous slide"
            >
                <svg
                    className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 group z-10"
                aria-label="Next slide"
            >
                <svg
                    className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 ${currentSlide === index
                            ? 'w-12 h-3 bg-white rounded-full'
                            : 'w-3 h-3 bg-white/50 hover:bg-white/75 rounded-full'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="flex flex-col items-center text-white">
                    <span className="text-sm mb-2">Scroll Down</span>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroSlider;
