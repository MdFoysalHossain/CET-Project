import React from 'react';
import { ActivityIcon, Quote, Star } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Sarah Jenkins",
            role: "Product Manager at TechFlow",
            quote: "TrackLio made our workflow significantly more organized and transparent. It's the first tool the whole team actually enjoys using.",
            avatar: "https://i.pravatar.cc/150?u=sarah"
        },
        {
            name: "Marcus Chen",
            role: "Lead Developer",
            quote: "The clean dashboard and role management are game changers. We've reduced our meeting time by 40% since switching.",
            avatar: "https://i.pravatar.cc/150?u=marcus"
        },
        {
            name: "Elena Rodriguez",
            role: "Operations Director",
            quote: "Finally, a project management tool that doesn't feel like a second job. Simple, powerful, and beautiful to look at.",
            avatar: "https://i.pravatar.cc/150?u=elena"
        }
    ];

    return (
        <section className="max-w-[1330px] mx-auto py-24 px-4 font-jukarta bg-white">
            {/* Header */}

            <div className="text-center mb-20">
                <div className="inline-flex uppercase items-center gap-3 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold mb-4 border border-indigo-100">
                    <ActivityIcon size={16} />
                    <span>Social Proof</span>
                </div>
                <h2 className='text-5xl font-extrabold text-slate-900 tracking-tight'>
                    Trusted by <span className="text-indigo-600">innovative teams.</span>
                </h2>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviews.map((review, i) => (
                    <div 
                        key={i} 
                        className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/50 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-2"
                    >
                        {/* Rating & Quote Icon */}
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex gap-1 text-amber-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <Quote className="text-indigo-100 group-hover:text-indigo-200 transition-colors" size={32} />
                        </div>

                        {/* Quote Text */}
                        <p className="text-lg text-slate-700 leading-relaxed italic mb-8">
                            "{review.quote}"
                        </p>

                        {/* User Info */}
                        <div className="flex items-center gap-4">
                            <img 
                                src={review.avatar} 
                                alt={review.name} 
                                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                            />
                            <div className='text-left'>
                                <h4 className="font-bold text-slate-900">{review.name}</h4>
                                <p className="text-sm text-slate-500 font-medium">{review.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;