import React from 'react';
import { motion } from 'framer-motion';
import { schoolData } from '../data/schoolData';
import { MapPin, Clock, Mail, FileText } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-school-light">
      <div className="container-custom">
        {/* Badge + Title */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="section-badge bg-school-blue/10 text-school-blue">
            <Mail size={14} /> Get In Touch
          </span>
          <h2 className="section-title">Contact School Office</h2>
          <p className="section-desc">
            Reach out for admissions, inquiries, or to learn more about our PM SHRI school programs.
          </p>
        </motion.div>
 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Info Cards */}
          <div className="space-y-3">
            {[
              { icon: MapPin, color: 'blue', title: 'Location Address', value: schoolData.location },
              { icon: Clock, color: 'amber', title: 'Office Hours', value: 'Monday – Saturday: 9:00 AM – 4:30 PM' },
              { icon: Mail, color: 'blue', title: 'Email Address', value: schoolData.email, href: `mailto:${schoolData.email}` },
              { icon: FileText, color: 'blue', title: 'DISE Code', value: schoolData.diseCode },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card p-4 flex items-start gap-3.5"
              >
                <div className={`w-10 h-10 rounded-xl ${item.color === 'amber' ? 'bg-school-gold/10 text-school-amber' : 'bg-school-blue/10 text-school-blue'} flex items-center justify-center shrink-0`}>
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-school-navy text-sm mb-0.5">{item.title}</h4>
                  {item.href ? (
                    <a href={item.href} className="text-school-blue hover:underline text-xs block transition-all">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-slate-500 text-xs">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Direct Email Outreach Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="card p-6 md:p-8 flex flex-col justify-center items-center text-center bg-gradient-to-br from-school-blue/5 to-school-gold/5 border border-school-blue/10"
          >
            <div className="w-16 h-16 rounded-2xl bg-school-blue/10 text-school-blue flex items-center justify-center mb-5 shadow-sm">
              <Mail size={32} />
            </div>
            <h3 className="text-lg font-bold text-school-navy mb-2 font-heading">Have Questions? Reach Out directly!</h3>
            <p className="text-slate-500 text-xs md:text-sm max-w-md mb-6 leading-relaxed">
              We are here to help! Please contact us directly via our official email address. Whether it's about admissions, academics, or events, we will respond to your inquiry as soon as possible.
            </p>
            <a 
              href={`mailto:${schoolData.email}`} 
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-school-blue hover:bg-school-blue/90 text-white rounded-xl font-bold text-sm shadow-md shadow-school-blue/20 hover:shadow-lg transition-all active:scale-[0.98]"
            >
              <Mail size={16} /> Contact via Email
            </a>
            <span className="text-[11px] text-slate-400 mt-3 font-semibold tracking-wider uppercase">
              {schoolData.email}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
