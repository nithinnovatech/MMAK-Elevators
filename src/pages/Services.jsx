import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: 'Passengers Lifts (Manual & Automatic)',
            icon: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            description: 'High-quality passenger elevators for residential and commercial buildings, available in both manual and automatic door configurations to suit your specific requirements.',
            features: [
                'Manual and automatic door options',
                'Smooth and quiet operation',
                'Energy-efficient systems',
                'Safety compliance certified',
                'Custom cabin designs',
            ],
            image: '/images/passenger-elevator.png',
        },
        {
            title: 'Goods Lifts',
            icon: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            ),
            description: 'Robust and reliable goods lifts designed for efficient vertical transportation of heavy materials and cargo in industrial and commercial settings.',
            features: [
                'Heavy-duty construction',
                'High load capacity',
                'Durable and long-lasting',
                'Customizable dimensions',
                'Safety interlocks',
            ],
            image: '/images/goods-lift.png',
        },
        {
            title: 'Hydraulic Lifts',
            icon: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            description: 'Advanced hydraulic elevator systems offering smooth, quiet operation ideal for low to mid-rise buildings with excellent energy efficiency.',
            features: [
                'Smooth and quiet operation',
                'Energy-efficient technology',
                'Minimal maintenance required',
                'Ideal for low to mid-rise buildings',
                'Reliable performance',
            ],
            image: '/images/hydraulic-lift.png',
        },
        {
            title: 'Hospital Lifts',
            icon: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            description: 'Specialized hospital elevators designed for medical facilities, featuring spacious cabins for stretchers and wheelchairs with smooth, vibration-free operation.',
            features: [
                'Spacious cabin for stretchers',
                'Smooth and vibration-free',
                'Antibacterial surfaces',
                'Emergency power backup',
                'Quick response time',
            ],
            image: '/images/hospital-elevator.png',
        },
        {
            title: 'Scissor Lifts',
            icon: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
            ),
            description: 'Versatile scissor lift platforms for maintenance, construction, and industrial applications, providing safe and stable elevated work platforms.',
            features: [
                'Stable work platform',
                'Multiple height options',
                'Safety guardrails',
                'Easy to operate',
                'Indoor and outdoor use',
            ],
            image: '/images/scissor-lift.png',
        },
        {
            title: 'Dumbwaiter Lifts',
            icon: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
            ),
            description: 'Compact service elevators perfect for restaurants, hotels, and residential buildings for transporting food, documents, and small items between floors.',
            features: [
                'Space-saving design',
                'Quiet operation',
                'Easy loading and unloading',
                'Hygienic construction',
                'Reliable service',
            ],
            image: '/images/dumbwaiter-lift.png',
        },
        {
            title: 'Maintenance, Modernization & Upgrading',
            icon: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            description: 'Comprehensive maintenance programs and modernization services to keep your elevators running efficiently and upgrade older systems with latest technology.',
            features: [
                'Preventive maintenance plans',
                'System modernization',
                'Technology upgrades',
                'Performance optimization',
                'Extended equipment life',
            ],
            image: '/images/elevator-maintenance.png',
        },
        {
            title: 'Supply of Spare Parts',
            icon: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            ),
            description: 'Comprehensive inventory of genuine spare parts for all elevator brands and models, ensuring quick replacements and minimal downtime.',
            features: [
                'Genuine OEM parts',
                'Wide range of components',
                'Quick availability',
                'Competitive pricing',
                'Quality guaranteed',
            ],
            image: '/images/elevator-spare-parts.png',
        },
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="gradient-bg-primary text-white py-20">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Our Services</h1>
                        <p className="text-lg md:text-xl text-blue-100">
                            Comprehensive elevator and escalator solutions for all your vertical transportation needs
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services */}
            <section className="section bg-white">
                <div className="container">
                    <div className="space-y-20">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="icon-container mb-6">
                                        {service.icon}
                                    </div>
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                                        {service.title}
                                    </h2>
                                    <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <svg
                                                    className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/contact" className="btn btn-primary">
                                        Request This Service
                                    </Link>
                                </div>

                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl overflow-hidden shadow-2xl">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-gray-50">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="card-glass p-12 text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Our Services?</h2>
                        <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto">
                            Contact us today to discuss your elevator and escalator needs. Our expert team is ready to provide you with the best solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                Get in Touch
                            </Link>
                            <a href="tel:+918341735557" className="btn btn-secondary btn-lg">
                                Call: +91-8341735557
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
