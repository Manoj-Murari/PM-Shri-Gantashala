import React from 'react';
import { motion } from 'framer-motion';
import { schoolData } from '../data/schoolData';
import { MapPin, Clock, Mail, Send } from 'lucide-react';

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
              { icon: Mail, color: 'blue', title: 'DISE Code', value: schoolData.diseCode },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card p-4 flex items-start gap-3.5"
              >
                <div className={`w-10 h-10 rounded-xl ${item.color === 'amber' ? 'bg-school-gold/10 text-school-amber' : 'bg-school-blue/10 text-school-blue'} flex items-center justify-center shrink-0`}>
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-school-navy text-sm mb-0.5">{item.title}</h4>
                  <p className="text-slate-500 text-xs">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="card p-5 md:p-6"
          >
            <h3 className="text-base font-bold text-school-navy mb-5 font-heading">Send a Message</h3>
            <form className="space-y-3.5" onSubmit={e => e.preventDefault()}>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Full Name</label>
                <input type="text" placeholder="Enter your name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-school-blue focus:ring-2 focus:ring-school-blue/10 outline-none transition-all text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email</label>
                <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-school-blue focus:ring-2 focus:ring-school-blue/10 outline-none transition-all text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Message</label>
                <textarea rows="3" placeholder="Write your message..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-school-blue focus:ring-2 focus:ring-school-blue/10 outline-none transition-all text-sm resize-none"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full gap-2">
                <Send size={16} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
