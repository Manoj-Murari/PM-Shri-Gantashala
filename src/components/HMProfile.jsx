import React from 'react';
import { motion } from 'framer-motion';
import { schoolData } from '../data/schoolData';
import { UserCheck, Target, Eye } from 'lucide-react';

const HMProfile = () => {
  return (
    <section id="leadership" className="section-padding bg-school-light">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-8">
          <span className="section-badge bg-school-gold/15 text-school-amber">
            <UserCheck size={14} /> Leadership Profile
          </span>
          <h2 className="section-title">Administrative Excellence</h2>
          <p className="section-desc">
            Highlighting the contributions of {schoolData.headmistress.name}, leading MGZPHS PLUS Ghantasala to academic and social recognition.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="card max-w-3xl mx-auto mb-10 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center md:items-stretch bg-white">
            {/* Image Section - Refined smaller portrait frame */}
            <div className="w-full max-w-[260px] md:w-[240px] shrink-0 relative bg-slate-50 aspect-[3/4] m-6 md:my-6 md:ml-6 md:mr-0 rounded-xl overflow-hidden shadow-sm border border-slate-100">
              <img 
                src="/assets/optimized/hm_profile.webp" 
                alt={schoolData.headmistress.name} 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

            {/* Profile Info Section */}
            <div className="flex-grow p-6 md:p-8 lg:p-10 flex flex-col justify-between bg-white">
              <div>
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-extrabold bg-school-amber/10 text-school-amber uppercase tracking-wider mb-3">
                    Headmistress Message
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-school-navy font-heading">
                    {schoolData.headmistress.name}
                  </h3>
                  <p className="text-school-blue font-bold text-xs uppercase tracking-wider mt-1.5">
                    Headmistress / Principal
                  </p>
                  <p className="text-slate-400 text-xs mt-1">
                    {schoolData.headmistress.qualifications}
                  </p>
                </div>

                <div className="relative pl-6 border-l-[3px] border-school-gold">
                  <span className="absolute -left-2 -top-5 text-6xl text-school-gold/20 font-serif leading-none">“</span>
                  <p className="text-slate-600 italic text-sm md:text-[15px] leading-relaxed relative z-10">
                    {schoolData.headmistress.message}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-semibold text-slate-500">Leading Administrative Excellence</span>
                </div>
                <span className="font-bold text-school-gold uppercase tracking-wider">Est. 1946</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="card p-5">
            <div className="w-11 h-11 rounded-xl bg-school-amber/10 text-school-amber flex items-center justify-center mb-4">
              <Target size={22} />
            </div>
            <h4 className="text-base font-bold text-school-navy mb-2">Our Mission</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              To deliver modern, technology-enabled co-educational training that balances digital learning with practical, hands-on scientific models, preparing rural students for successful careers.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="card p-5">
            <div className="w-11 h-11 rounded-xl bg-school-blue/10 text-school-blue flex items-center justify-center mb-4">
              <Eye size={22} />
            </div>
            <h4 className="text-base font-bold text-school-navy mb-2">Our Vision</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              To be a model institution empowering every student — especially girl children — with holistic education, fostering academic excellence and lifelong confidence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HMProfile;
