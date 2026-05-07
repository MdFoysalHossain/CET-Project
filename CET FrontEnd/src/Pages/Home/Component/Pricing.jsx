import React, { useState } from 'react';
import { ActivityIcon, Check, Zap } from 'lucide-react';

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    const plans = [
        {
            name: "Free",
            price: 0,
            desc: "For individuals",
            features: ["3 Projects limit", "5 Team member", "Basic Analytics", "Community support"],
            highlight: false,
            cta: "Get Started"
        },
        {
            name: "Pro",
            price: isYearly ? 19 : 24,
            desc: "For growing teams",
            features: ["Unlimited Projects", "Up to 15 members", "Advanced Analytics", "Email Priority support"],
            highlight: true,
            cta: "Try Pro"
        },
        {
            name: "Enterprise",
            price: isYearly ? 49 : 59,
            desc: "For organizations",
            features: ["Unlimited everything", "Unlimited members", "Advanced Analytics", "24/7 Email Priority support"],
            highlight: false,
            cta: "Contact Sales"
        }
    ];

    return (
        <section className="max-w-[1330px] mx-auto py-24 px-4 font-jukarta">
            {/* Header & Toggle */}
            <div className="text-center mb-16">
                <div className="text-center ">
                    <div className="inline-flex uppercase items-center gap-3 px-3 py-1 rounded-full bg-indigo-50 text-indigo-500 text-sm font-bold mb-4 border border-indigo-100">
                        <ActivityIcon size={16} />
                        <span>Our Pricing</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                    Pricing that <span className="text-indigo-500">scales with you.</span>
                </h2>
                </div>

                <div className="flex items-center justify-center gap-4 mt-8">
                    <span className={`text-sm font-bold ${!isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
                    <button
                        onClick={() => setIsYearly(!isYearly)}
                        className="w-14 h-7 bg-indigo-500 rounded-full relative p-1 transition-all"
                    >
                        <div className={`w-5 h-5 bg-white rounded-full transition-all transform ${isYearly ? 'translate-x-7' : 'translate-x-0'}`} />
                    </button>
                    <span className={`text-sm font-bold ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
                        Yearly <span className="text-indigo-500 ml-1 text-xs bg-indigo-50 px-2 py-0.5 rounded-full">Save 20%</span>
                    </span>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                {plans.map((plan, i) => (
                    <div
                        key={i}
                        className={`relative p-8 rounded-3xl transition-all duration-300 border-2 ${plan.highlight
                                ? 'bg-white border-indigo-500 shadow-2xl shadow-indigo-100 scale-105 z-10 py-12'
                                : 'bg-slate-50 border-transparent hover:border-slate-200'
                            }`}
                    >
                        {plan.highlight && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                <Zap size={12} fill="currentColor" /> MOST POPULAR
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                            <p className="text-slate-500 text-sm mt-1">{plan.desc}</p>
                            <div className="mt-6 flex items-baseline gap-1">
                                <span className="text-4xl font-extrabold text-slate-900">${plan.price}</span>
                                <span className="text-slate-500 font-medium">/mo</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                                    <Check size={18} className="text-indigo-500 flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlight
                                ? 'bg-indigo-500 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200'
                                : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900'
                            }`}>
                            {plan.cta}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;