import React from 'react';
import { motion } from 'framer-motion';
import { schoolData } from '../data/schoolData';
import { BarChart3, Star, TrendingUp } from 'lucide-react';

const Achievements = () => {
  const { ssc } = schoolData.achievements;

  return (
    <section id="results" className="section-padding bg-school-light">
      <div className="container-custom">
        {/* Badge + Title */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="section-badge bg-school-gold/15 text-school-amber">
            <BarChart3 size={14} /> Academic Records
          </span>
          <h2 className="section-title">SSC Results {ssc.year}</h2>
          <p className="section-desc">
            Performance metrics from the SSC Board Examinations, reflecting our students' dedication.
          </p>
        </motion.div>

        {/* Pass Rate + Topper (stacked on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Pass Rate */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="card p-6 text-center flex flex-col items-center justify-center"
          >
            <div className="w-28 h-28 rounded-full border-[6px] border-school-blue/10 flex items-center justify-center mb-4">
              <div>
                <div className="text-3xl font-bold text-school-blue font-heading">{ssc.passPercentage}%</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Pass Rate</div>
              </div>
            </div>
            <p className="text-slate-500 text-xs">Overall Board Exam Result</p>
          </motion.div>

          {/* Topper */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-school-gold/15 text-school-amber flex items-center justify-center shrink-0">
                <Star size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-school-navy">School Topper</h3>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider">SSC {ssc.year}</p>
              </div>
            </div>
            <div className="bg-school-light rounded-xl p-4 text-center mb-3">
              <h4 className="text-base font-bold text-school-navy font-heading mb-0.5">{ssc.topper.name}</h4>
              <div className="text-2xl font-bold text-school-gold font-heading">
                {ssc.topper.marks}<span className="text-sm text-slate-400">/{ssc.topper.total}</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-school-blue text-xs font-semibold">
              <TrendingUp size={14} />
              <span>{((ssc.topper.marks / ssc.topper.total) * 100).toFixed(1)}% Score</span>
            </div>
          </motion.div>

          {/* Notable Scorers */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="card p-6"
          >
            <h3 className="text-sm font-bold text-school-navy mb-4">Notable Achievers</h3>
            <div className="space-y-2.5">
              {ssc.notableScorers.map((scorer, index) => (
                <div key={index} className="flex items-center justify-between p-2.5 bg-school-light rounded-lg">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-school-blue/10 text-school-blue flex items-center justify-center text-xs font-bold shrink-0">
                      {index + 2}
                    </div>
                    <span className="font-semibold text-school-navy text-xs">{scorer.name}</span>
                  </div>
                  <span className="text-school-blue font-bold text-xs">{scorer.marks}/600</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-2.5 bg-school-gold/10 rounded-lg text-center">
              <p className="text-school-amber text-xs font-semibold">
                {schoolData.stats[2].value}+ students scored above 500
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
