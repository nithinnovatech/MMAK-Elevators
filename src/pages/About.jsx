import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const stats = [
        { number: '25+', label: 'Years Combined Experience' },
        { number: '500+', label: 'Projects Completed' },
        { number: '100%', label: 'Customer Satisfaction' },
        { number: '2', label: 'Branch Locations' },
    ];

    const expertise = [
        {
            title: 'KONE Expertise',
            description: 'Former KONE engineers with deep knowledge of their systems and technologies',
        },
        {
            title: 'OTIS Experience',
            description: 'Experienced technicians from OTIS bringing industry-leading practices',
        },
        {
            title: 'International Exposure',
            description: 'Valuable experience from both India and Middle East markets',
        },
        {
            title: 'Technical Excellence',
            description: 'Highly skilled team committed to delivering superior service quality',
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
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">About MMAK Elevators</h1>
                        <p className="text-xl text-blue-100">
                            Premier provider of elevator services specializing in repairs, maintenance, spare parts, and new installations
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold mb-6">
                                Welcome to <span className="gradient-text">MMAK Elevators & Escalators</span>
                            </h2>
                            <p className="text-lg text-gray-700 mb-4">
                                We are excited to introduce MMAK Elevators and Escalators, a premier provider of elevator services specializing in repairs, maintenance, spare parts, and new installations.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                With over 25 years of combined experience, our team of engineers and technicians includes former employees of industry leaders KONE and OTIS, bringing invaluable expertise from both India and the Middle East.
                            </p>
                            <p className="text-lg text-gray-700">
                                We understand the critical importance of reliable elevator systems in ensuring the smooth operation of your facilities.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/about-team.jpg"
                                    alt="MMAK Team"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center"><svg class="w-32 h-32 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div>';
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section bg-gray-50">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-700 font-semibold">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expertise */}
            <section className="section bg-white">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Expertise</h2>
                        <p>Industry-leading knowledge and experience</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {expertise.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="card p-8"
                            >
                                <h3 className="text-2xl font-bold mb-3 gradient-text">
                                    {item.title}
                                </h3>
                                <p className="text-gray-700">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Commitment */}
            <section className="section bg-gray-50">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold mb-6">Our Commitment</h2>
                            <p className="text-lg text-gray-700 mb-6">
                                At MMAK, we pride ourselves on our commitment to customer satisfaction, technical expertise, and competitive pricing. We understand that reliable elevator systems are critical to your operations, and we're dedicated to ensuring your systems perform at their best.
                            </p>
                            <p className="text-lg text-gray-700 mb-8">
                                We would welcome the opportunity to discuss how our team can support your elevator needs and enhance the performance of your systems.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="/contact" className="btn btn-primary btn-lg">
                                    Contact Us Today
                                </a>
                                <a href="/services" className="btn btn-secondary btn-lg">
                                    View Our Services
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
