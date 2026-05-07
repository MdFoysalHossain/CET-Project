import React from 'react';
import { Github, Twitter, Linkedin, Mail, ActivityIcon } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-indigo-500 border-t border-slate-100 pt-20 pb-10 font-jukarta ">
            <div className="max-w-[1330px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-white p-2 rounded-lg text-indigo-500">
                                <ActivityIcon size={24} />
                            </div>
                            <span className='font-bold text-2xl text-slate-900 tracking-tight text-white'>TrackLio</span>
                        </div>
                        <p className="text-white/80 text-lg leading-relaxed max-w-sm mb-8">
                            The intelligent workspace where teams organize projects, collaborate faster, and deliver excellence.
                        </p>
                        {/* <div className="flex gap-5">
                            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Github size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Linkedin size={20} /></a>
                        </div> */}
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Product</h4>
                        <ul className="space-y-4 text-white">
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Integrations</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Changelog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-white">
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Support</h4>
                        <ul className="space-y-4 text-white">
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">API Docs</a></li>
                            <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact Support</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white text-sm">
                        Copyright © {new Date().getFullYear()} TrackLio Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-white">
                        <Mail size={14}/>
                        <span>hello@tracklio.com</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;