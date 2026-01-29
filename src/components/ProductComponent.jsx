import { Cloud, HardDrive, Layers, Server } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductComponent = () => {
    // Array containing reliability features with icons, titles, descriptions
    const products = [
        {
            icon: <Cloud className="text-white w-8 h-8" />,
            title: "Cloud Compute",
            description:
                "Deploy powerful virtual machines in seconds with scalable resources to meet your business needs.",
            link: 'cloudcompute',
            buttontext: 'Learn More',
        },
        {
            icon: <Layers className="text-white w-8 h-8" />,
            title: "Kubernetes",
            description:
                "Automate deployment, scaling, and management of containerized applications with our fully managed Kubernetes service.",
            link: '',
            buttontext: 'Coming Soon',
        },
        {
            icon: <Server className="text-white w-8 h-8" />,
            title: "Load Balancer",
            description:
                "Distribute traffic efficiently across multiple instances to ensure high availability and optimal performance.",
            link: '',
            buttontext: 'Coming Soon',
        },
        {
            icon: <HardDrive className="text-white w-8 h-8" />,
            title: "Block Storage",
            description:
                "Attach high-performance, scalable storage to your cloud instances for flexible data management.",
            link: '',
            buttontext: 'Coming Soon',
        },
    ];

    return (
        <section className="py-8 md:py-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                {/* Section Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-primary">
                        Featured Products
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="shadow-md transition-shadow duration-300 rounded-2xl hover:shadow-xl hover:shadow-blue-300"
                        >
                            <div
                                key={index}
                                className="text-center bg-white p-6 rounded-2xl shadow-lg flex flex-col h-full"
                            >
                                <div>
                                    {/* Icon Container */}
                                    <div className="flex justify-center">
                                        <div className="bg-[#000099] rounded-full w-16 h-16 flex items-center justify-center">
                                            {product.icon}
                                        </div>
                                    </div>

                                    {/* Feature Title */}
                                    <h3 className="mt-4 text-xl font-bold text-primary flex-grow">
                                        {product.title}
                                    </h3>

                                    {/* Feature Description */}
                                    <div className="h-32">
                                        <p className="mt-4 text-gray-600 text-center flex-grow">
                                            {product.description}
                                        </p>
                                    </div>

                                    {product.buttontext === 'Coming Soon' ? (
                                        <button
                                            disabled
                                            className="mt-4 bg-accent text-white font-medium px-4 py-2 rounded-lg hover:bg-[#e69900]"
                                        >
                                            {product.buttontext}
                                        </button>
                                    ) : (
                                        <Link to={product.link}>
                                            <button
                                                className="mt-4 bg-accent text-white font-medium px-4 py-2 rounded-lg hover:bg-[#e69900]"
                                            >
                                                {product.buttontext}
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductComponent;
