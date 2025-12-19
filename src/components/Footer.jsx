import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    const services = [
        'Elevator Repairs',
        'Maintenance Services',
        'Spare Parts',
        'New Installations',
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <Link to="/" className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-3 mb-4 group">
                            <img
                                src="/images/mmak-logo.png"
                                alt="MMAK Elevators Logo"
                                className="h-16 w-auto object-contain bg-white/10 p-1 rounded-lg backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300"
                            />
                            <div className="flex flex-col items-center md:items-start">
                                {/* <span className="font-bold text-xl tracking-wide text-blue-400"></span>
                                <span className="font-semibold text-sm tracking-widest text-gray-300 uppercase">Elevators & Escalators</span> */}
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm md:text-base mb-4 text-center md:text-left">
                            Premier provider of elevator services with over 25 years of combined experience.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a
                                href="mailto:info@mmakelevators.com"
                                className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                                aria-label="Email"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </a>
                            <a
                                href="tel:+918341735557"
                                className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                                aria-label="Phone"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4 font-display text-blue-400 border-b-2 border-blue-400/30 inline-block pb-1">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4 font-display text-blue-400 border-b-2 border-blue-400/30 inline-block pb-1">Our Services</h4>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service} className="text-gray-400 text-sm">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4 font-display text-blue-400 border-b-2 border-blue-400/30 inline-block pb-1">Contact Us</h4>

                        {/* Nellore Branch */}
                        <div className="mb-4">
                            <h5 className="font-semibold text-blue-400 mb-2 text-sm">Nellore Branch</h5>
                            <p className="text-gray-400 text-sm mb-1">
                                #26-15-215/1, G-2, M.M Galaxy,<br />
                                3rd street, Vanamthopu,<br />
                                Nellore-524004
                            </p>
                            <a href="tel:+918341735557" className="text-blue-400 hover:text-blue-300 text-sm">
                                +91-8341735557
                            </a>
                        </div>

                        {/* Vizag Branch */}
                        <div className="mb-4">
                            <h5 className="font-semibold text-blue-400 mb-2 text-sm">Vizag Branch</h5>
                            <p className="text-gray-400 text-sm mb-1">
                                #49-26-59, ff-3, Vishnu Residency,<br />
                                Madhuranagar,<br />
                                Visakhapatnam-530016
                            </p>
                            <a href="tel:+919976055557" className="text-blue-400 hover:text-blue-300 text-sm">
                                +91-9976055557
                            </a>
                        </div>

                        {/* Email */}
                        <div>
                            <a
                                href="mailto:info@mmakelevators.com"
                                className="text-gray-400 hover:text-blue-400 text-sm break-all"
                            >
                                info@mmakelevators.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Business Hours */}
                <div className="border-t border-gray-700 pt-6 mb-6">
                    <div className="text-center">
                        <h4 className="font-bold text-base md:text-lg mb-3 font-display text-blue-400 inline-block border-b-2 border-blue-400/30 pb-1">Business Hours</h4>
                        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-gray-400 text-sm">
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Monday - Saturday: 9:00 AM - 6:00 PM</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Sunday: 9:00 AM - 12:00 PM</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
                    <p>
                        © {currentYear} MMAK Elevators & Escalators. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
