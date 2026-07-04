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
            {/* Image Section – formal portrait frame */}
            <div className="shrink-0 flex items-center justify-center p-6 md:pl-6 md:pr-8 md:py-8">
              <div style={{
                width: '180px', height: '220px',
                borderRadius: '1rem',
                overflow: 'hidden',
                border: '3px solid #fbbf24',
                boxShadow: '0 8px 32px rgba(251,191,36,0.2), 0 2px 8px rgba(0,0,0,0.12)',
                flexShrink: 0,
              }}>
                <img
                  src="/assets/optimized/hm_profile_new.png"
                  alt={schoolData.headmistress.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                />
              </div>
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
