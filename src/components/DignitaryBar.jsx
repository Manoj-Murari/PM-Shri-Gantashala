import React from 'react';
import { motion } from 'framer-motion';
import { schoolData } from '../data/schoolData';

/** Extracts initials from a name for the fallback avatar */
function getInitials(name) {
  return name
    .replace(/^(Sri|Shri|Dr\.?|Mr\.?|Mrs\.?)\s+/i, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('');
}

/** Single dignitary card */
function DignitaryCard({ dignitary, index }) {
  const { role, name, image } = dignitary;
  const initials = getInitials(name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="dignitary-card"
    >
      {/* Photo */}
      <div className="dignitary-photo-wrap">
        {image ? (
          <img src={image} alt={name} className="dignitary-photo" />
        ) : (
          <div className="dignitary-avatar">{initials}</div>
        )}
        {/* Gold ring overlay */}
        <div className="dignitary-ring" />
      </div>

      {/* Text */}
      <div className="dignitary-info">
        <p className="dignitary-role">{role}</p>
        <p className="dignitary-name">{name}</p>
      </div>
    </motion.div>
  );
}

export default function DignitaryBar() {
  return (
    <section id="dignitaries" className="dignitary-section">
      {/* Section header */}
      <div className="section-header-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          Our Honourable Leaders
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-title"
        >
          Dignitaries &amp; Officials
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-rule"
        />
      </div>

      {/* Cards */}
      <div className="dignitary-grid">
        {schoolData.dignitaries.map((d, i) => (
          <DignitaryCard key={d.id} dignitary={d} index={i} />
        ))}
      </div>
    </section>
  );
}
