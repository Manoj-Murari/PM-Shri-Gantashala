import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const EventGallery = () => {
  const categories = ['All', 'Sports & NCC', 'Cultural', 'Events'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItemId, setSelectedItemId] = useState(null);

  const galleryItems = [
    { id: 1, src: "/assets/optimized/Internation Yoga Day/IMG-20260704-WA0025.webp", category: "Sports & NCC", title: "International Yoga Day" },
    { id: 2, src: "/assets/optimized/Internation Yoga Day/IMG-20260704-WA0026.webp", category: "Sports & NCC", title: "Yoga Session" },
    { id: 3, src: "/assets/optimized/Internation Yoga Day/IMG-20260704-WA0027.webp", category: "Sports & NCC", title: "Yoga Practice" },
    { id: 4, src: "/assets/optimized/Poster making competition as part of Ek Bharath, shresth Bharath/IMG-20260704-WA0013.webp", category: "Cultural", title: "EBSB Poster Making" },
    { id: 18, src: "/assets/optimized/cultural_dance_1.webp", category: "Cultural", title: "Traditional Dance Performance" },
    { id: 19, src: "/assets/optimized/cultural_dance_2.webp", category: "Cultural", title: "Classical Solo Dance" },
    { id: 20, src: "/assets/optimized/cultural_dance_3.webp", category: "Cultural", title: "Group Cultural Dance" },
    { id: 5, src: "/assets/optimized/Interaction with Ghantasala SI Chandana madam/IMG-20260704-WA0021.webp", category: "Events", title: "SI Chandana Interaction" },
    { id: 6, src: "/assets/optimized/Interaction with Ghantasala SI Chandana madam/IMG-20260704-WA0020.webp", category: "Events", title: "Guest Interaction" },
    { id: 7, src: "/assets/optimized/Welcoming newly joined to new academic year 2026-27/IMG-20260704-WA0016.webp", category: "Events", title: "Welcome Ceremony" },
    { id: 13, src: "/assets/optimized/alumni_ranganath_babu.webp", category: "Events", title: "Notable Alumnus G. Ranganath Babu" },
    { id: 14, src: "/assets/optimized/alumni_group_gate.webp", category: "Events", title: "Alumni Visit" },
    { id: 15, src: "/assets/optimized/computers_donor.webp", category: "Events", title: "Computer Donor Felicitation" },
    { id: 17, src: "/assets/optimized/computers_donor_2.webp", category: "Events", title: "Computer Lab & Students" },
    { id: 16, src: "/assets/optimized/water_plant_donor.webp", category: "Events", title: "Water Plant Donation by G. Arun Kumar" },
    { id: 8, src: "/assets/optimized/YOGANDHRA '26/IMG-20260704-WA0003.webp", category: "Sports & NCC", title: "Yogandhra '26" },
    { id: 9, src: "/assets/optimized/NCC , scouts and guides/WhatsApp Image 2026-07-04 at 10.46.19 AM (1).webp", category: "Sports & NCC", title: "NCC & Scouts" },
    { id: 10, src: "/assets/optimized/NCC , scouts and guides/WhatsApp Image 2026-07-04 at 10.46.19 AM.webp", category: "Sports & NCC", title: "Scouts & Guides" },
    { id: 11, src: "/assets/optimized/NCC , scouts and guides/WhatsApp Image 2026-07-04 at 10.46.20 AM.webp", category: "Sports & NCC", title: "NCC Parade" },
    { id: 12, src: "/assets/optimized/pdf_page_08.webp", category: "Events", title: "Community Outreach" },
  ];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const selectedItem = galleryItems.find(item => item.id === selectedItemId);
  const lightboxItems = selectedItem 
    ? galleryItems.filter(item => item.category === selectedItem.category)
    : [];
  const selectedItemIndexInLightbox = selectedItem
    ? lightboxItems.findIndex(item => item.id === selectedItemId)
    : -1;

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="section-badge bg-school-blue/10 text-school-blue">
            <Camera size={14} /> Media Gallery
          </span>
          <h2 className="section-title">School Activities</h2>
          <p className="section-desc">
            Glimpses of our vibrant campus life, celebrations, sports, and social initiatives. Click any image to view all related photos in that category.
          </p>
        </motion.div>

        {/* Category tab bar with right-fade hint on mobile */}
        <div className="relative mb-8">
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedItemId(null);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-school-blue text-white shadow-md shadow-school-blue/20' 
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200 active:scale-95'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          {/* Right-fade hint so users know content scrolls */}
          <div className="absolute top-0 right-0 bottom-2 w-10 bg-gradient-to-l from-white to-transparent pointer-events-none sm:hidden" />
        </div>

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                key={item.id}
                onClick={() => setSelectedItemId(item.id)}
                className="relative group rounded-xl overflow-hidden bg-slate-100 aspect-square shadow-sm cursor-pointer"
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300 hidden md:flex flex-col justify-end p-3">
                  <span className="text-school-gold text-[9px] font-bold uppercase tracking-wider mb-0.5">{item.category}</span>
                  <h4 className="text-white font-bold text-xs leading-tight">{item.title}</h4>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2.5 md:hidden">
                  <h4 className="text-white font-semibold text-[10px] leading-tight">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItemId !== null && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-black/95 backdrop-blur-md p-4 md:p-6"
            onClick={() => setSelectedItemId(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-[110]"
              onClick={() => setSelectedItemId(null)}
              aria-label="Close"
            >
              <X size={22} />
            </button>

            {/* Prev button */}
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-[110] disabled:opacity-20 disabled:pointer-events-none"
              onClick={(e) => {
                e.stopPropagation();
                if (selectedItemIndexInLightbox > 0) {
                  setSelectedItemId(lightboxItems[selectedItemIndexInLightbox - 1].id);
                }
              }}
              disabled={selectedItemIndexInLightbox === 0}
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next button */}
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-[110] disabled:opacity-20 disabled:pointer-events-none"
              onClick={(e) => {
                e.stopPropagation();
                if (selectedItemIndexInLightbox < lightboxItems.length - 1) {
                  setSelectedItemId(lightboxItems[selectedItemIndexInLightbox + 1].id);
                }
              }}
              disabled={selectedItemIndexInLightbox === lightboxItems.length - 1}
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>

            {/* Empty top space spacer */}
            <div className="h-8 w-full shrink-0" />

            {/* Main Content Area */}
            <motion.div
              key={selectedItemId}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="max-w-4xl w-full flex flex-col items-center justify-center relative z-[105] my-auto px-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-h-[45vh] md:max-h-[55vh] max-w-full w-auto object-contain rounded-lg shadow-2xl border border-white/10"
              />
              <div className="text-center mt-3 px-4 max-w-xl">
                <span className="text-school-gold text-[10px] font-bold uppercase tracking-widest block mb-0.5">
                  {selectedItem.category}
                </span>
                <h3 className="text-white text-xs md:text-sm font-bold leading-normal">
                  {selectedItem.title}
                </h3>
              </div>
            </motion.div>

            {/* Bottom thumbnail strip of the category */}
            <div 
              className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-2xl p-2.5 mt-auto relative z-[105]"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-[10px] text-white/50 text-center font-semibold mb-2 uppercase tracking-wider">
                {selectedItem.category} Gallery ({lightboxItems.length} photos)
              </p>
              <div className="flex gap-2 overflow-x-auto py-1 px-0.5 justify-start md:justify-center scrollbar-thin scrollbar-thumb-white/20">
                {lightboxItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedItemId(item.id)}
                    className={`relative w-12 h-12 rounded-lg overflow-hidden shrink-0 transition-all duration-200 border-2 ${
                      item.id === selectedItemId 
                        ? 'border-school-gold scale-105 shadow-lg shadow-school-gold/20' 
                        : 'border-transparent opacity-40 hover:opacity-100'
                    }`}
                  >
                    <img src={item.src} alt={`${item.title} thumbnail`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventGallery;
