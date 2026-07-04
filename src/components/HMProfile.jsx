import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { schoolData } from '../data/schoolData';
import { UserCheck, Target, Eye, Users, ZoomIn, X } from 'lucide-react';

const HMProfile = () => {
  const [showStaffModal, setShowStaffModal] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showStaffModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [showStaffModal]);

  return (
    <section id="leadership" className="section-padding bg-school-light">
      <div className="container-custom">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }} 
          className="mb-8"
        >
          <span className="section-badge bg-school-gold/15 text-school-amber">
            <UserCheck size={14} /> Leadership & Staff
          </span>
          <h2 className="section-title">Administrative Excellence</h2>
          <p className="section-desc">
            Led by {schoolData.headmistress.name}, our school is guided by a team of dedicated educators and administrators committed to students' success.
          </p>
        </motion.div>

        {/* HM Profile Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="card max-w-3xl mx-auto mb-8 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center md:items-stretch bg-white">
            {/* Image Section – formal portrait frame */}
            <div className="shrink-0 flex items-center justify-center p-6 md:pl-6 md:pr-8 md:py-8">
              <div style={{
                width: '180px',
                height: '220px',
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

        {/* Staff & Faculty Poster Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card max-w-3xl mx-auto mb-8 p-6 md:p-8 bg-white"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-school-blue/10 text-school-blue flex items-center justify-center">
              <Users size={18} />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-school-navy">Our Staff & Faculty</h3>
              <p className="text-slate-400 text-xs">The expert educators who shape minds every day</p>
            </div>
          </div>

          <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-5">
            Meet the teaching and administrative team of MGZPHS PLUS, Ghantasala. Click on the chart below to view details about all teachers, subject specialists, and staff members in high resolution.
          </p>

          {/* Interactive Poster Thumbnail */}
          <div 
            onClick={() => setShowStaffModal(true)}
            className="relative rounded-2xl overflow-hidden cursor-pointer group border-2 border-slate-100 hover:border-school-blue/40 shadow-sm transition-all duration-300"
            style={{ maxHeight: '340px' }}
          >
            <img 
              src="/assets/optimized/staff_members.jpg" 
              alt="MGZPHS Staff Members Chart" 
              className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
              style={{ maxHeight: '340px' }}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
              <div className="w-12 h-12 rounded-full bg-school-blue text-white flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <ZoomIn size={22} />
              </div>
              <span className="text-white text-xs font-bold tracking-wider uppercase">Click to Expand Faculty Chart</span>
            </div>
            
            {/* Bottom preview banner for mobile users */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/80 to-transparent p-3 flex items-center justify-between md:hidden">
              <span className="text-white text-xs font-bold">Faculty & Staff Chart</span>
              <span className="text-school-gold text-[10px] font-bold flex items-center gap-1">Tap to Zoom <ZoomIn size={10} /></span>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
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

      {/* Staff Poster Modal Lightbox */}
      <AnimatePresence>
        {showStaffModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowStaffModal(false)}
            className="fixed inset-0 z-[250] bg-slate-950/98 backdrop-blur-md flex flex-col p-4 md:p-6"
          >
            {/* Header info */}
            <div 
              className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 shrink-0"
              onClick={e => e.stopPropagation()}
            >
              <div>
                <h4 className="text-white font-extrabold text-sm md:text-base">MGZPHS PLUS, Ghantasala – Faculty Directory</h4>
                <p className="text-slate-400 text-xs">All teachers, subject specialists, and staff members</p>
              </div>
              <button
                onClick={() => setShowStaffModal(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                style={{ minHeight: 'unset', minWidth: 'unset', padding: 0 }}
                aria-label="Close details"
              >
                <X size={20} />
              </button>
            </div>

            {/* Poster image container */}
            <div className="flex-1 flex items-center justify-center min-h-0 relative">
              <img 
                src="/assets/optimized/staff_members.jpg" 
                alt="MGZPHS Staff Members Faculty Directory" 
                className="max-h-full max-w-full object-contain rounded-lg shadow-2xl border border-white/5"
                onClick={e => e.stopPropagation()}
              />
            </div>

            {/* Bottom info */}
            <p 
              className="text-center text-slate-500 text-xs mt-3 shrink-0"
              onClick={e => e.stopPropagation()}
            >
              Click outside the chart or tap the close button to return to the site.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HMProfile;
