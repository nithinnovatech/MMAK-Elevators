import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import { motion } from 'framer-motion';

const Home = () => {
    const services = [
        {
            image: '/images/passenger-elevator.png',
            title: 'Passengers Lifts',
            description: 'Manual & Automatic passenger elevators for residential and commercial buildings.',
        },
        {
            image: '/images/goods-lift.png',
            title: 'Goods Lifts',
            description: 'Heavy-duty lifts for efficient vertical transportation of materials and cargo.',
        },
        {
            image: '/images/hydraulic-lift.png',
            title: 'Hydraulic Lifts',
            description: 'Smooth and quiet hydraulic systems ideal for low to mid-rise buildings.',
        },
        {
            image: '/images/hospital-elevator.png',
            title: 'Hospital Lifts',
            description: 'Specialized elevators for medical facilities with spacious cabins.',
        },
        {
            image: '/images/scissor-lift.png',
            title: 'Scissor Lifts',
            description: 'Stable work platforms for maintenance, construction, and industrial use.',
        },
        {
            image: '/images/dumbwaiter-lift.png',
            title: 'Dumbwaiter Lifts',
            description: 'Compact service elevators for restaurants, hotels, and residential buildings.',
        },
        {
            image: '/images/elevator-maintenance.png',
            title: 'Maintenance & Upgrading',
            description: 'Comprehensive maintenance, modernization, and technology upgrade services.',
        },
        {
            image: '/images/elevator-spare-parts.png',
            title: 'Supply of Spare Parts',
            description: 'Genuine spare parts for all elevator brands with quick availability.',
        },
    ];
    const features = [
        {
            number: '25+',
            label: 'Years Experience',
            description: 'Combined expertise',
        },
        {
            number: '100%',
            label: 'Customer Satisfaction',
            description: 'Quality guaranteed',
        },
        {
            number: '24/7',
            label: 'Support Available',
            description: 'Always here for you',
        },
        {
            number: '2',
            label: 'Branch Locations',
            description: 'Vizag & Nellore',
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Slider */}
            <HeroSlider />

            {/* Services Section */}
            <section className="section bg-gray-50">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Services</h2>
                        <p>
                            Comprehensive elevator and escalator solutions tailored to your needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => {
                            const phoneNumber = '918341735557';
                            const serviceMessages = {
                                'Passengers Lifts': "Hello! I'm interested in Passenger Lifts for my building. Could you please provide more information and a quote?",
                                'Goods Lifts': "Hello! I need information about Goods Lifts for my facility. Please share details and pricing.",
                                'Hydraulic Lifts': "Hello! I'd like to know more about Hydraulic Lifts for my building. Please provide details.",
                                'Hospital Lifts': "Hello! I'm interested in Hospital Lifts for our medical facility. Please share information.",
                                'Scissor Lifts': "Hello! I need a quote for Scissor Lifts. Please provide details and pricing.",
                                'Dumbwaiter Lifts': "Hello! I'm interested in Dumbwaiter Lifts for our establishment. Please share more information.",
                                'Maintenance & Upgrading': "Hello! I need maintenance and upgrading services for my elevator. Please contact me.",
                                'Supply of Spare Parts': "Hello! I'm looking for elevator spare parts. Please share your catalog and pricing."
                            };
                            const whatsappMessage = serviceMessages[service.title] || "Hello! I'm interested in your elevator services.";
                            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <div className="flex flex-col gap-2 mt-4">
                                        <Link to="/services" className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center justify-center">
                                            Learn More
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                        <a
                                            href={whatsappUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors duration-300"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            Book via WhatsApp
                                        </a>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                                Why Choose <span className="gradient-text">MMAK Elevators?</span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                                With over 25 years of combined experience, our team of engineers and technicians includes former employees of industry leaders KONE and OTIS, bringing invaluable expertise from both India and the Middle East.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Expert team with KONE and OTIS background</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Commitment to customer satisfaction</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Competitive pricing and quality service</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">Comprehensive spare parts inventory</span>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <Link to="/about" className="btn btn-primary">
                                    Learn More About Us
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {features.map((feature, index) => (
                                <div key={index} className="card-glass p-6 text-center">
                                    <div className="text-4xl font-bold gradient-text mb-2">
                                        {feature.number}
                                    </div>
                                    <div className="font-semibold text-gray-900 mb-1">
                                        {feature.label}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        {feature.description}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Service Locations Section */}
            <section className="section bg-gray-50">
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
                                    className="px-4 py-2 bg-white text-blue-600 rounded-full font-semibold shadow-sm border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                                >
                                    {location}
                                </span>
                            ))}
                        </div>
                        <p className="mt-8 text-gray-600 italic">
                            And across surrounding regions...
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section gradient-bg-primary text-white">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
                            Ready to Get Started?
                        </h2>
                        <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-blue-100 max-w-2xl mx-auto">
                            Contact us today for expert elevator and escalator services. Our team is ready to assist you with all your vertical transportation needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn btn-accent btn-lg">
                                Contact Us Now
                            </Link>
                            <a href="tel:+918341735557" className="btn btn-lg bg-white text-blue-600 hover:bg-gray-100">
                                Call: +91-8341735557
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
