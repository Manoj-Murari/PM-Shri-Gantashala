import React from 'react';
import { motion } from 'framer-motion';
import { schoolData } from '../data/schoolData';

const DAY_COLORS = [
  '#3b82f6', // Mon – blue
  '#ef4444', // Tue – red
  '#22c55e', // Wed – green
  '#a855f7', // Thu – purple
  '#f97316', // Fri – orange
  '#ec4899', // Sat – pink
];

export default function MidDayMealSection() {
  const { midDayMeal } = schoolData;

  return (
    <section id="midday-meal" style={{ background: 'linear-gradient(160deg, #fff7ed 0%, #fef9c3 100%)', padding: '4rem 1.25rem' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#f97316', marginBottom: '0.5rem' }}
          >
            Government Welfare Scheme
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.25, marginBottom: '0.4rem' }}
          >
            {midDayMeal.schemeName}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
            style={{ fontSize: '1.1rem', fontWeight: 700, color: '#b45309', marginBottom: '0.75rem', fontFamily: "'Noto Sans Telugu', sans-serif" }}
          >
            {midDayMeal.teluguName}
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ width: '56px', height: '3px', background: 'linear-gradient(to right, #f97316, #fbbf24)', borderRadius: '2px', margin: '0 auto 1rem', transformOrigin: 'left' }}
          />
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.25 }}
            style={{ color: '#78350f', fontSize: '0.875rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}
          >
            {midDayMeal.description}
          </motion.p>
        </div>

        {/* ── Two-column layout: Poster + Weekly Menu ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'start' }}
          className="mdm-grid"
        >

          {/* Poster */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ borderRadius: '1.25rem', overflow: 'hidden', boxShadow: '0 8px 32px rgba(249,115,22,0.18)', border: '3px solid #fed7aa' }}
          >
            <img
              src={midDayMeal.posterImage}
              alt="Sreemathi Dokka Seethamma Madyahna Bhojanam Padakam Poster"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </motion.div>

          {/* Weekly menu cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9a3412', marginBottom: '1rem' }}>
              📅 Weekly Menu
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {midDayMeal.weeklyMenu.map((item, i) => (
                <motion.div
                  key={item.dayEn}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.875rem',
                    background: 'white', borderRadius: '0.875rem', padding: '0.75rem 1rem',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid #fed7aa'
                  }}
                >
                  {/* Day pill */}
                  <div style={{
                    minWidth: '90px', textAlign: 'center', borderRadius: '0.625rem',
                    padding: '0.35rem 0.5rem', background: DAY_COLORS[i],
                  }}>
                    <p style={{ color: 'white', fontWeight: 800, fontSize: '0.75rem', lineHeight: 1.2 }}>{item.dayEn}</p>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.65rem', fontWeight: 600 }}>{item.day}</p>
                  </div>
                  {/* Menu text */}
                  <p style={{ color: '#44403c', fontSize: '0.8rem', lineHeight: 1.5, fontFamily: "'Noto Sans Telugu', 'Inter', sans-serif" }}>
                    {item.menu}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Authority badge */}
            <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.625rem',
              background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)', borderRadius: '0.875rem',
              padding: '0.75rem 1.25rem' }}
            >
              <span style={{ fontSize: '1.4rem' }}>🏛️</span>
              <div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Implemented by</p>
                <p style={{ color: 'white', fontWeight: 800, fontSize: '0.875rem' }}>{midDayMeal.authority}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .mdm-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
