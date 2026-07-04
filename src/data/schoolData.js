export const schoolData = {
  name: "Mahatma Gandhi Zilla Parishad High School PLUS",
  location: "Ghantasala, Krishna District, Andhra Pradesh",
  established: 1946,
  pmShriStatus: "June 2022",
  diseCode: "28163101013",
  email: "zphsghantasala61@gmail.com",
  
  hero: {
    title: "Empowering Rural Education",
    subtitle: "A Beacon of Excellence Since 1946",
    description: "Honored with PM SHRI School status in June 2022, MGZPHS PLUS stands as a centre of excellence nurturing students in academics, sports, and extracurricular activities.",
  },

  midDayMeal: {
    schemeName: "Sreemathi Dokka Seethamma Madyahna Bhojanam Padakam",
    teluguName: "శ్రీమతి డొక్కా సీతమ్మ మధ్యాహ్న భోజన పధకం",
    authority: "Andhra Pradesh Government",
    posterImage: "/assets/optimized/midday_meal_scheme.jpg",
    description: "A flagship welfare scheme by the Government of Andhra Pradesh providing nutritious mid-day meals to students every school day, ensuring no child studies on an empty stomach.",
    weeklyMenu: [
      { day: "సోమవారం", dayEn: "Monday",    menu: "అన్నం, ఆకుకూరతో పప్పు, గుడ్డు ఫ్రై, చిక్కీ" },
      { day: "మంగళవారం", dayEn: "Tuesday",  menu: "పులిహొర, చట్నీ, ఉడికించిన గుడ్డు, రాగిజావ" },
      { day: "బుధవారం", dayEn: "Wednesday", menu: "అన్నం, కూరగాయల కూర, గుడ్డు ఫ్రై, చిక్కీ" },
      { day: "గురువారం", dayEn: "Thursday", menu: "వెజ్‌రైస్, పులావ్, బంగాళాదుంప కుర్మా, ఉడికించిన గుడ్డు, రాగిజావ" },
      { day: "శుక్రవారం", dayEn: "Friday",  menu: "అన్నం, ఆకుకూరతో పప్పు, గుడ్డు ఫ్రై, చిక్కీ" },
      { day: "శనివారం", dayEn: "Saturday",  menu: "అన్నం, కూరగాయల కూర, స్వీట్ పొంగల్, రాగిజావ" },
    ],
  },

  headmistress: {
    name: "M. Sri Rangavalli",
    qualifications: "M.Sc., M.Ed., M.L.I.Sc.",
    message: "At Mahatma Gandhi Zilla Parishad High School PLUS, Ghantasala, we strongly believe that education plays a key role in shaping and transforming one's future. Our school is committed to supporting every student, nurturing their potential, and encouraging them to dream, learn, and grow. We take special pride in providing accessible secondary education for girl students, ensuring that every girl child has the opportunity to continue her studies in a safe and supportive environment. Our focus is on the holistic development of students academically, socially, emotionally, and morally so that they become confident, responsible, and empowered individuals ready to contribute to society.",
  },

  stats: [
    { label: "Year Established", value: 1946, prefix: "Est. " },
    { label: "SSC Pass Percentage", value: 78.6, suffix: "%" },
    { label: "Students with 500+ Marks", value: 11, suffix: "+" },
    { label: "First Class Students", value: 41, suffix: "+" },
  ],

  achievements: {
    ssc: {
      year: "2025-26",
      passPercentage: 78.6,
      topper: {
        name: "Goli Mounika",
        marks: 557,
        total: 600
      },
      notableScorers: [
        { name: "Merugu Harshitha", marks: 530 },
        { name: "Podhili Pranitha", marks: 527 }
      ]
    }
  },

  facilities: [
    {
      id: "pal-lab",
      title: "PAL (Personalized Adaptive Learning) Lab",
      description: "Dedicated lab furnished with 30 tablets and headphones, ensuring personalized and technology-enabled learning for every student.",
      icon: "Laptop",
    },
    {
      id: "science-lab",
      title: "Modern Science & Chemistry Labs",
      description: "Fully equipped Science, Physics, and Chemistry laboratories established to promote experiential and inquiry-based learning.",
      icon: "FlaskConical",
    },
    {
      id: "infrastructure",
      title: "Enhanced Infrastructure",
      description: "A new school building constructed with the generous support of Gorrepati Venkatarayalu Udaya Bhaskaramma Educational Trust.",
      icon: "Building2",
    },
    {
      id: "green-initiatives",
      title: "Kitchen Garden & Playground",
      description: "With PM SHRI grants, a spacious playground and kitchen garden have been developed to encourage physical fitness and environmental awareness.",
      icon: "Leaf",
    }
  ],

  dignitaries: [
    {
      id: "cm",
      role: "Chief Minister, Andhra Pradesh",
      name: "Sri N. Chandrababu Naidu",
      image: "/assets/optimized/cm.png",
    },
    {
      id: "deputy-cm",
      role: "Deputy Chief Minister",
      name: "Sri Pawan Kalyan",
      image: "/assets/optimized/deputy_cm.png",
    },
    {
      id: "edu-minister",
      role: "Minister of Education",
      name: "Sri Nara Lokesh",
      image: "/assets/optimized/edu_minister.png",
    },
    {
      id: "deo",
      role: "District Education Officer (DEO)",
      name: "Shri U V Subbarao",
      image: "/assets/optimized/deo.png",
    },
    {
      id: "collector",
      role: "Collector, Krishna District",
      name: "Shri D K Balaji I.A.S",
      image: "/assets/optimized/collector.png",
    },
  ],

  events: [
    {
      id: "annual-day",
      title: "80th Annual Day Celebrations",
      date: "27th January, 2026",
      description: "A grand celebration inaugurated by esteemed guests including SI Chandana Garu and Rtd MEO Gorrepati Ramakrishna Garu, highlighting holistic education.",
      category: "Celebrations"
    },
    {
      id: "ebsb",
      title: "Ek Bharat Shreshtha Bharat (EBSB)",
      description: "Students explored the rich culture of Punjab through basic language skills, poster-making competitions, and lively Punjabi dances to foster national integration.",
      category: "Cultural"
    },
    {
      id: "child-marriage",
      title: "Child Marriage Free Awareness Campaign",
      description: "A successful drive with rallies and poster campaigns to highlight the importance of ending child marriage.",
      category: "Social Initiative"
    },
    {
      id: "outreach",
      title: "100 Days Action Plan Outreach",
      description: "Headmistress and teachers visited homes of long-absent Class X students to encourage their return to school.",
      category: "Social Initiative"
    },
    {
      id: "festivals",
      title: "Sankranti Celebrations",
      description: "Promoting cultural diversity and unity, students participated in preparing traditional Pongal dishes and decorating the premises with colorful rangoli.",
      category: "Cultural"
    }
  ]
};
