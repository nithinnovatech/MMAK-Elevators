import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, subject, message } = formData;

        const mailSubject = encodeURIComponent(subject || 'New Contact Request');
        const mailBody = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
        );

        window.location.href = `mailto:mmakelevators.india@gmail.com?subject=${mailSubject}&body=${mailBody}`;

        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    const branches = [
        {
            name: 'Nellore Branch (Head Office)',
            address: '#26-15-215/1, G-2, M.M Galaxy, 3rd street, Vanamthopu, Nellore-524004',
            phone: '+91-8341735557',
            altPhone: '+91-9976055557',
            email: 'mmakelevators.india@gmail.com',
        },
        {
            name: 'Vizag Branch',
            address: '#49-26-59, ff-3, Vishnu Residency, Madhuranagar, Visakhapatnam-530016',
            phone: '+91-9976055557',
            email: 'mmakelevators.india@gmail.com',
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
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Contact Us</h1>
                        <p className="text-lg md:text-xl text-blue-100">
                            Get in touch with our team for expert elevator and escalator services
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="input-field"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="input-field"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="input-field"
                                        placeholder="+91-XXXXXXXXXX"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="input-field"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="textarea-field"
                                        placeholder="Tell us about your requirements..."
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg w-full">
                                    Send Message
                                </button>
                            </form>
                        </motion.div>

                        {/* Quick Contact */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Quick Contact</h2>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start space-x-4">
                                    <div className="icon-container flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-base md:text-lg mb-2">Call Us</h3>
                                        <a href="tel:+918341735557" className="text-blue-600 hover:text-blue-700 block">
                                            +91-8341735557
                                        </a>
                                        <a href="tel:+919976055557" className="text-blue-600 hover:text-blue-700 block">
                                            +91-9976055557
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="icon-container flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-base md:text-lg mb-2">Email Us</h3>
                                        <a href="mailto:mmakelevators.india@gmail.com" className="text-blue-600 hover:text-blue-700 break-all">
                                            mmakelevators.india@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="icon-container flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-base md:text-lg mb-2">Business Hours</h3>
                                        <p className="text-gray-700">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-700">Sunday: 9:00 AM - 12:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-glass p-6">
                                <h3 className="font-bold text-lg md:text-xl mb-4">Why Choose MMAK?</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        25+ Years Experience
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Expert KONE & OTIS Team
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Competitive Pricing
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Quality Service Guaranteed
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Branch Locations */}
            <section className="section bg-gray-50">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Locations</h2>
                        <p>Visit us at our branch offices</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {branches.map((branch, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="card p-8"
                            >
                                <div className="flex items-start mb-4">
                                    <div className="icon-container mr-4">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold mb-2">{branch.name}</h3>
                                        <p className="text-gray-700 mb-4">{branch.address}</p>
                                        <div className="space-y-2">
                                            <a href={`tel:${branch.phone}`} className="flex items-center text-blue-600 hover:text-blue-700">
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                {branch.phone}
                                            </a>
                                            {branch.altPhone && (
                                                <a href={`tel:${branch.altPhone}`} className="flex items-center text-blue-600 hover:text-blue-700">
                                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                    {branch.altPhone}
                                                </a>
                                            )}
                                            <a href={`mailto:${branch.email}`} className="flex items-center text-blue-600 hover:text-blue-700 break-all">
                                                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                {branch.email}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Service Locations Section */}
            <section className="section bg-white border-t border-gray-100">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                            Our Company’s Services Available in These Locations
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
                            {[
                                'Vizag', 'Vizianagaram', 'Srikakulam', 'Rajahmundry', 'Kakinada',
                                'Eluru', 'Vijayawada', 'Amaravati', 'Mangalagiri', 'Guntur',
                                'Ongole', 'Nellore', 'Tirupati'
                            ].map((location, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-gray-50 text-blue-600 rounded-full font-semibold shadow-sm border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                                >
                                    {location}
                                </span>
                            ))}
                        </div>
                        <p className="mt-8 text-gray-600 italic text-lg">
                            Serving the entire Andhra Pradesh region with excellence.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
