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
            Highlighting the contributions of {schoolData.headmistress.name}, leading MGZPHS Ghantasala to academic and social recognition.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="card max-w-2xl mx-auto mb-10">
          <div className="bg-gradient-to-b from-school-light to-white p-8 flex flex-col items-center">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-[5px] border-school-gold/70 overflow-hidden shadow-lg bg-slate-100 mb-5">
              <div className="w-full h-full flex items-center justify-center text-slate-300">
                <span className="text-xs text-center px-4 leading-tight font-medium">HM Portrait<br/>(Coming Soon)</span>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-school-navy font-heading text-center">{schoolData.headmistress.name}</h3>
            <p className="text-school-amber font-bold text-xs uppercase tracking-[0.15em] mt-1.5">Headmistress / Principal</p>
            <p className="text-slate-400 text-xs mt-1">{schoolData.headmistress.qualifications}</p>
          </div>

          <div className="p-6 md:p-8 border-t border-slate-100">
            <div className="border-l-[3px] border-school-gold pl-5">
              <p className="text-slate-600 italic text-sm leading-relaxed">
                "{schoolData.headmistress.message}"
              </p>
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
