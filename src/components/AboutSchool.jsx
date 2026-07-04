import React from 'react';
import { motion } from 'framer-motion';
import { schoolData } from '../data/schoolData';
import { School } from 'lucide-react';

const AboutSchool = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="section-badge bg-school-blue/10 text-school-blue">
            <School size={14} /> Institution Overview
          </span>
          <h2 className="section-title">Introduction to MGZPHS Ghantasala</h2>
          <p className="section-desc">
            A center of learning established to serve Ghantasala and neighboring rural communities, now transformed into a state-of-the-art PM SHRI model school.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
          <h3 className="text-xl md:text-2xl font-bold text-school-navy mb-4 font-heading">
            Established in {schoolData.established}
          </h3>
          <div className="text-slate-600 text-sm md:text-base leading-relaxed space-y-4">
            <p>
              {schoolData.name}, Ghantasala, was established on <strong>24 August {schoolData.established}</strong> in the Krishna District of Andhra Pradesh. The school was chosen under the Central Government's model school network (PM SHRI Scheme) in {schoolData.pmShriStatus} to implement modern vocational learning, digitized adaptive learning software, and robust physical education.
            </p>
            <p>
              A new school building was constructed with the generous support of the <strong>Gorrepati Venkatarayalu Udaya Bhaskaramma Educational Trust</strong>, significantly strengthening the school's infrastructure and creating a better learning environment for students.
            </p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
          <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100">
            <img 
              src="/assets/optimized/pdf_page_01.webp" 
              alt="MGZPHS School Building" 
              className="w-full h-48 md:h-72 object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="rounded-2xl border border-slate-200 overflow-hidden">
            {[
              ['DISE School Code', schoolData.diseCode],
              ['Affiliation Type', 'State Board of Andhra Pradesh (SSC)'],
              ['Location', schoolData.location],
              ['Medium of Instruction', 'English & Telugu Medium Co-educational'],
              ['PM SHRI Status', `Selected in ${schoolData.pmShriStatus}`],
            ].map(([label, value], i) => (
              <div key={i} className={`flex flex-col sm:flex-row sm:items-center px-5 py-4 ${i > 0 ? 'border-t border-slate-100' : ''} hover:bg-slate-50/50 transition-colors`}>
                <span className="text-xs font-bold text-school-navy uppercase tracking-wider sm:w-1/3 mb-1 sm:mb-0">{label}</span>
                <span className="text-sm text-slate-600 sm:w-2/3">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSchool;
