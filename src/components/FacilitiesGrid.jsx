import React from 'react';
import { motion } from 'framer-motion';
import { schoolData } from '../data/schoolData';
import { Laptop, FlaskConical, Building2, Leaf, Landmark } from 'lucide-react';

const iconMap = { Laptop, FlaskConical, Building2, Leaf };

const FacilitiesGrid = () => {
  return (
    <section id="infrastructure" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="section-badge bg-school-gold/15 text-school-amber">
            <Landmark size={14} /> PM SHRI Infrastructure
          </span>
          <h2 className="section-title">Facilities & Laboratories</h2>
          <p className="section-desc">
            State-of-the-art labs and campus enhancements funded under PM SHRI grants to deliver 21st-century education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {schoolData.facilities.map((facility, index) => {
            const IconComponent = iconMap[facility.icon] || Building2;
            return (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="card p-5 group"
              >
                <div className="w-11 h-11 rounded-xl bg-school-blue/5 text-school-blue flex items-center justify-center mb-4 group-hover:bg-school-blue group-hover:text-white transition-colors duration-300">
                  <IconComponent size={22} />
                </div>
                <h3 className="text-sm font-bold text-school-navy mb-1.5">{facility.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{facility.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { src: '/assets/optimized/pdf_page_04.webp', badge: 'Personalized Adaptive Learning', title: 'PAL Lab', desc: 'Equipped with tablets for self-paced learning.' },
            { src: '/assets/optimized/pdf_page_03.webp', badge: 'Science Department', title: 'Chemistry Laboratory', desc: 'Fully equipped for hands-on experiential learning.' },
          ].map((lab, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-md relative group h-56 md:h-72"
            >
              <img src={lab.src} alt={lab.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-school-navy/90 via-school-navy/30 to-transparent flex flex-col justify-end p-5">
                <span className="text-school-gold text-[10px] font-bold uppercase tracking-wider mb-1">{lab.badge}</span>
                <h3 className="text-white text-base md:text-lg font-bold">{lab.title}</h3>
                <p className="text-slate-300 text-xs mt-1 hidden sm:block">{lab.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesGrid;
