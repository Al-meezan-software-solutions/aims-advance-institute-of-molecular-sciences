import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { HexLattice, PetriRings, MolecularGraph } from '@/components/SvgMotifs';

export const metadata: Metadata = {
  title: 'Our Team — AIMS-PAGE',
  description:
    'Meet the AIMS-PAGE team — biopharmaceutical production & molecular sciences, environmental science, chemical engineering, and water & wastewater expertise spanning research, consultancy, and industrial delivery.',
};

const TEAM = [
  {
    id: 'imtiaz-ahmed',
    name: 'Imtiaz Ahmed',
    title: 'Chief Executive Officer',
    unit: 'Leadership',
    accent: '#0B3450',
    image: '/team/imtiaz-ahmed.jpg',
    imageAlt: 'Portrait of Imtiaz Ahmed',
    summary:
      'CEO of AIMS — three decades building ISO/IEC 17025 accredited calibration laboratories across Pakistan, the Middle East, and Iraq.',
    tags: ['ISO/IEC 17025', 'Metrology', 'Lab Accreditation', 'QMS Consultancy'],
  },
  {
    id: 'azra-sakhawat',
    name: 'Dr. Azra Sakhawat Khan',
    title: 'Lab Director & Research Consultant',
    unit: 'Biopharmaceuticals & Molecular Biology',
    accent: '#7C5CBF',
    image: '/team/azra-sakhawat.jpg',
    imageAlt: 'Portrait of Dr. Azra Sakhawat Khan',
    summary:
      'Ph.D. Biochemist specializing in recombinant therapeutic proteins, biosimilars, and exosome-based delivery — bridging wet-lab biopharma with computational biology.',
    tags: ['Recombinant Proteins', 'Biosimilars', 'Exosomes', 'Bioinformatics'],
  },
  {
    id: 'ayesha-imtiaz',
    name: 'Ayesha Imtiaz',
    title: 'Medical Lab Technologist',
    unit: 'Clinical Laboratory',
    accent: '#E11D48',
    image: '/team/ayesha-imtiaz.jpg',
    imageAlt: 'Portrait of Ayesha Imtiaz',
    summary:
      'BS Medical Laboratory Technology graduate with hospital and diagnostic lab internship experience across hematology, histopathology, microbiology, and clinical biochemistry.',
    tags: ['Hematology', 'Histopathology', 'Microbiology', 'Clinical Chemistry'],
  },
  {
    id: 'dr-tahir',
    name: 'Dr. Muhammad Tahir Shehzad',
    title: 'Senior Scientific Consultant',
    unit: 'Environmental & Toxicology',
    accent: '#80B93C',
    image: '/team/dr-muhammad-tahir-shehzad.png',
    imageAlt: 'Portrait of Dr. Muhammad Tahir Shehzad',
    summary:
      'Ph.D. Environmental Science with international research at GCER, Australia — specializing in trace metal analysis, contaminant remediation, and analytical precision.',
    tags: ['ICP-OES / AAS / GC-MS', 'Heavy Metals', 'Risk Assessment', 'Multivariate Statistics'],
  },
  {
    id: 'mudassar-azam',
    name: 'Engr. Dr. Mudassar Azam',
    title: 'Chemical Engineering Advisor',
    unit: 'Chemical Engineering & Research',
    accent: '#2F6FB0',
    image: '/team/mudassar-azam.png',
    imageAlt: 'Portrait of Engr. Dr. Mudassar Azam',
    summary:
      'Assistant Professor at University of the Punjab with a Ph.D. from TU Wien — waste-to-energy, wastewater treatment, and advanced materials research.',
    tags: ['Waste-to-Energy', 'MSW / RDF', 'Process Control', 'Membrane Technology'],
  },
  {
    id: 'sheraz-khan',
    name: 'Sheraz Khan',
    title: 'Water & Wastewater Engineering Lead',
    unit: 'Process Engineering',
    accent: '#2BB7C4',
    image: '/team/sheraz-khan.png',
    imageAlt: 'Portrait of Sheraz Khan',
    summary:
      '16+ years designing, commissioning, and rehabilitating water and wastewater infrastructure across Pakistan and Indonesia — 75+ industrial projects delivered.',
    tags: ['ETP / CETP / STP', 'RO & DAF Systems', 'Plant Rehabilitation', 'Industrial Effluent'],
  },
  {
    id: 'dr-saad-tahir',
    name: 'Dr. Saad Tahir',
    title: 'Biopharmaceutical Production & Development Lead',
    unit: 'Biopharma Production & QC',
    accent: '#C24E72',
    image: '/team/dr-saad-tahir.png',
    imageAlt: 'Portrait of Dr. Saad Tahir',
    summary:
      'Ph.D. Molecular Biologist — recombinant protein production, QC, and GMP tech transfer; Senior Lead Manager Production at Searle Biopharmaceuticals.',
    tags: ['Filgrastim / G-CSF', 'Downstream Processing', 'Bioassays', 'DRAP / GMP'],
  },
  {
    id: 'rizwan-abid',
    name: 'Dr. Rizwan Abid',
    title: 'Genomics & Sequencing Specialist',
    unit: 'Genomics & Molecular Biology',
    accent: '#D97706',
    image: '/team/rizwan-abid.jpg',
    imageAlt: 'Portrait of Dr. Rizwan Abid',
    summary:
      'Ph.D. Biochemist specializing in NGS, cancer and epilepsy genomics, and Illumina sequencing workflows — bridging wet-lab genomics with machine learning.',
    tags: ['NGS / Illumina', 'Whole Exome Sequencing', 'Cancer Genomics', 'Bioinformatics'],
  },
] as const;

const TAHIR = {
  bio: [
    'Dr. Muhammad Tahir Shehzad is a senior scientific consultant specializing in advanced environmental analysis, contaminant remediation, and analytical instrumentation calibration. Holding a Ph.D. in Environmental Science and having conducted extensive research at the Global Centre for Environmental Remediation (GCER) in Australia, he brings high-level international expertise to the testing industry.',
    'Dr. Shehzad offers specialized technical consultancy in trace metal analysis, utilizing state-of-the-art analytical equipment such as Atomic Absorption Spectrometer, ICP-OES and GC-MS. His services include advising on heavy metal dynamics, environmental risk assessments, and soil–water–plant experimental systems, backed by advanced capabilities in spatial analysis and multivariate statistics.',
  ],
  metrics: [
    { value: '>350', label: 'Citations' },
    { value: '10', label: 'h-Index' },
    { value: '23', label: 'Journal Papers' },
    { value: '5', label: 'Book Chapters' },
  ],
  credentials: [
    {
      year: '2022',
      degree: 'Ph.D. in Environmental Science',
      place: 'University of Agriculture Faisalabad · GCER, University of Newcastle, Australia',
    },
    {
      year: '2014',
      degree: 'M.Phil. in Environmental Science',
      place: 'PMAS-Arid Agriculture University, Rawalpindi',
    },
    {
      year: '2012',
      degree: 'B.Sc. (Hons.) Agriculture / Soil Science',
      place: 'University of Agriculture Faisalabad',
    },
  ],
  publications: [
    {
      text: 'Shehzad, M.T. et al. (2022). Impact of water regimes on minimizing the accumulation of arsenic in rice (Oryza sativa L.). Water, Air, and Soil Pollution.',
      doi: 'https://doi.org/10.1007/s11270-022-05856-7',
    },
    {
      text: 'Shehzad, M.T. et al. (2022). Arsenic concentrations in soil, water and rice grains of rice growing areas of Punjab-Pakistan: Multivariate statistical analysis. Environmental Monitoring and Assessment.',
      doi: 'https://doi.org/10.1007/s10661-022-09852-z',
    },
    {
      text: 'Bashir, M.H. et al. incl. Shehzad, M.T. (2024). Dust trace metals implications on school’s indoor air quality linked to human health risk at Khurianwala (Pakistan). Atmospheric Environment.',
      doi: 'https://doi.org/10.1016/j.atmosenv.2024.120889',
    },
  ],
  pdf: '/team/selected-bibliography-dr-tahir.pdf',
  orcid: 'https://orcid.org/0000-0002-7365-3147',
};

const SHERAZ = {
  bio: [
    'Over a professional career spanning 16 years, Sheraz Khan has designed, supplied, installed, commissioned, rehabilitated, and troubleshot water and wastewater treatment infrastructure across Pakistan and abroad. His work spans effluent treatment plants (ETPs), combined effluent treatment plants (CETPs), sewage treatment plants (STPs), reverse osmosis (RO) systems, DAF systems, sludge dewatering, self-cleaning screening, fine-bubble aeration, and biological/tertiary treatment upgrades.',
    'Clientele includes leading names in leather & tanning, textile & denim, apparel, food & beverage, fertilizer, healthcare, and sugar — including multinational operations such as Coca-Cola, Pepsi-Cola International, Interloop, and Aga Khan Hospital, as well as project delivery for clients in Indonesia. Work has been delivered under Sustainable Water Solutions (Pvt) Ltd, Kemtek Traders, and WETS (Water and Energy Technical Solutions).',
  ],
  metrics: [
    { value: '16+', label: 'Years Experience' },
    { value: '75', label: 'Projects Delivered' },
    { value: '2', label: 'Countries Served' },
    { value: '8+', label: 'Industry Sectors' },
  ],
  platforms: [
    'Sustainable Water Solutions (Pvt) Ltd',
    'Kemtek Traders',
    'WETS — Water and Energy Technical Solutions',
  ],
  sectors: [
    'Leather & Tanning',
    'Textile & Denim',
    'Apparel & Hosiery',
    'Food & Beverage',
    'Fertilizers & Pesticides',
    'Healthcare',
    'Sugar Milling',
    'Municipal / CETP',
  ],
  highlights: [
    {
      year: '2021',
      title: 'CETP Korangi Industrial Area, Karachi',
      detail: '8,000 m³/day — design, supply, installation & commissioning; upgraded to activated sludge process.',
    },
    {
      year: '2023–24',
      title: 'International ETP projects — Indonesia',
      detail: 'Nogosari Leather, Sumber Setia Jia Abadi (SSJA), and PT. Sayong Adhimukti — full ETP delivery.',
    },
    {
      year: '2025–26',
      title: 'Major industrial & institutional programmes',
      detail: 'Style Textile tertiary & biological systems, Pepsi-Cola sludge handling, Aga Khan Hospital Gilgit STP, and ongoing ETP programmes.',
    },
  ],
  pdf: '/team/professional-track-record-2026.pdf',
};

const MUDASSAR = {
  bio: [
    'Engr. Dr. Mudassar Azam is Assistant Professor at the Institute of Chemical Engineering & Technology, University of the Punjab, Lahore. He holds a Ph.D. in Chemical Engineering (with distinction) from the Technical University of Vienna (TU Wien), Austria, and has more than 15 years of teaching and research experience in chemical engineering education.',
    'His research focuses on waste management, energy conversion, and environmental sustainability — including municipal solid waste and refuse-derived fuel for waste-to-energy applications, advanced combustion techniques, nanomaterials for energy storage and water treatment, microbial fuel cells, and antifouling membrane technologies.',
  ],
  metrics: [
    { value: '1,301', label: 'Citations' },
    { value: '18', label: 'h-Index' },
    { value: '175', label: 'Total Impact Factor' },
    { value: '15+', label: 'Years Teaching' },
  ],
  credentials: [
    {
      year: '2020',
      degree: 'Ph.D. Chemical Engineering (with distinction)',
      place: 'Technical University of Vienna (TU Wien), Austria',
    },
    {
      year: '2011',
      degree: 'M.Sc. Chemical Engineering (2nd position)',
      place: 'Institute of Chemical Engineering & Technology, University of the Punjab',
    },
    {
      year: '2007',
      degree: 'B.Sc. Chemical Engineering',
      place: 'Institute of Chemical Engineering & Technology, University of the Punjab',
    },
  ],
  interests: [
    'Waste-to-energy (MSW / RDF)',
    'Combustion & co-combustion',
    'Nanomaterials (MXenes, MOFs)',
    'Microbial fuel cells',
    'Membrane & desalination tech',
    'Process control & separation',
  ],
  supervision: [
    { value: '50', label: 'B.Sc. graduates supervised' },
    { value: '8', label: 'M.Sc. graduates supervised' },
    { value: '2', label: 'Ph.D. students (ongoing)' },
  ],
  highlights: [
    {
      title: 'Industry foundation — Fauji Fertilizer Company',
      detail: 'Trainee Engineer at Goth Machhi ammonia plant (2007–2008): unit operations, DCS training, boilers, cooling towers, and laboratory procedures.',
    },
    {
      title: 'International research — TU Wien',
      detail: 'Ph.D. research on combustion of municipal solid waste and refuse-derived fuel with low-rank coal for waste-to-energy concepts.',
    },
    {
      title: 'Recognition',
      detail: 'Best PhD paper award; IRCA lead auditor ISO 9001:2008; Rotary International GSE scholarship (Indiana, USA); ISWA waste-to-energy study tour (Austria & Germany).',
    },
  ],
  pdf: '/team/cv-mudassar-2026.pdf',
  scholar: 'https://scholar.google.com/citations?hl=en&user=Gbu7mn8AAAAJ',
  linkedin: 'https://linkedin.com/in/engr-dr-mudassar-azam-40a54218b',
};

const IMTIAZ = {
  bio: [
    'Imtiaz Ahmed is Chief Executive Officer of AIMS, leading the institute’s strategy across laboratory services, metrology, quality systems, and regional consultancy. His career spans more than three decades building and accrediting ISO/IEC 17025 calibration and testing laboratories in Pakistan, the UAE, Qatar, and Iraq — including founding and operating Al-Meezan Industrial Metrology Services in Lahore.',
    'He has set up multi-parameter calibration facilities from the ground up, trained technical teams, secured national and regional accreditation, and advised industry across aviation, electrical, textile, pharma, food, oil & gas, automotive, defence, and construction. As an IRCA-registered ISO 9001 lead auditor and ISO/IEC 17025 assessor, he brings board-level leadership grounded in hands-on laboratory excellence.',
  ],
  metrics: [
    { value: '30+', label: 'Years Experience' },
    { value: '4', label: 'Countries' },
    { value: 'ISO 17025', label: 'Lab Accreditation' },
    { value: 'CEO', label: 'AIMS Leadership' },
  ],
  credentials: [
    {
      year: 'MA',
      degree: 'M.A. English Literature',
      place: 'University of the Punjab',
    },
    {
      year: 'BA',
      degree: 'B.A. (Political Science, Islamic Studies, Arabic)',
      place: 'University of the Punjab',
    },
    {
      year: 'DAE',
      degree: 'Diploma of Associate Engineering (Electronics)',
      place: 'School of Electronics — 130 weeks',
    },
  ],
  interests: [
    'ISO/IEC 17025 accreditation & CMC',
    'Electrical & process instrument calibration',
    'Dimensional & surveying metrology',
    'Measurement uncertainty & method validation',
    'QMS consultancy (ISO 9001 / 17025)',
    'Metrology training & LIMS',
  ],
  highlights: [
    {
      title: 'AIMS — Chief Executive Officer',
      detail:
        'Leading institutional strategy for accredited inspection, testing, calibration, and scientific consultancy — connecting metrology infrastructure with molecular and industrial programmes.',
    },
    {
      title: 'Al-Meezan Industrial Metrology Services — Owner & Managing Director',
      detail:
        '2016–present: ISO/IEC 17025 accredited calibration laboratory in Lahore serving aviation, electrical, textile, pharma, food, oil & gas, automotive, defence, engineering, and construction; training and ISO consultancy across Pakistan and the Middle East.',
    },
    {
      title: 'Regional laboratory build-outs — UAE, Qatar & Iraq',
      detail:
        'Business Development Manager, Accutech (Dubai) — DAC ISO 17025 accreditation; Manager Calibration, Gray Mackenzie (Qatar & Dubai) — ENAS accreditation; Metrology Supervisor, Modern Surveying Lab (Kurdistan) — 1,800 m² facility, 200+ standards, 52 accredited ranges.',
    },
    {
      title: 'Pakistan Air Force — Precision Measurement Labs',
      detail:
        '1992–2008: calibration technician through lab in-charge and technical instructor at PAF Precision Measurement Equipment Calibration Labs; Base Commander’s commendations for outstanding performance.',
    },
  ],
  pdf: '/team/cv-imtiaz-ahmed.docx',
};

const AZRA = {
  bio: [
    'Dr. Azra Sakhawat Khan is a biochemist specializing in human recombinant protein production, purification, and bioassays, with hands-on experience across upstream and downstream biopharmaceutical workflows. As Research Associate at the Biopharmaceutical & Proteomics Lab (BPL), Centre of Excellence in Molecular Biology (CEMB), Lahore, she leads work on biosimilars and therapeutic proteins — including Semaglutide, Filgrastim, and IL-11 — spanning fermentation, quality analysis, pharmacokinetics, and toxicity studies.',
    'Her toolkit extends from mammalian cell culture, ELISA, HPLC/FPLC, and antibody development to exosome-based therapeutics and computational biology (molecular docking, ADMET profiling, R and Python). She has supervised laboratory staff and students at BPL, taught undergraduate and graduate biochemistry, and serves as a journal reviewer — bringing both production-floor rigor and research depth to AIMS-PAGE laboratory and consultancy programmes.',
  ],
  metrics: [
    { value: 'Ph.D.', label: 'Biochemistry' },
    { value: '5+', label: 'Journal Papers' },
    { value: 'Lab Director', label: 'AIMS-PAGE' },
    { value: 'BPL / CEMB', label: 'Research Base' },
  ],
  credentials: [
    {
      year: '2025',
      degree: 'Ph.D. in Biochemistry',
      place:
        'The University of Lahore — Encapsulation of selected venom peptides with biodegradable nanoparticles for breast cancer treatment',
    },
    {
      year: '2023',
      degree: 'M.Phil. Biochemistry',
      place:
        'The University of Lahore — Effects of Vitamin C on cancer cell proliferation via de-simulation of proliferative genes',
    },
    {
      year: 'MSc',
      degree: 'Master of Science in Biochemistry',
      place:
        'The University of Lahore — Cinnamomum zeylanicum aqueous extract and diabetic rat biochemistry / liver histopathology',
    },
  ],
  interests: [
    'Recombinant therapeutic proteins',
    'Biosimilars (Semaglutide, Filgrastim, IL-11)',
    'Exosome therapeutics & delivery',
    'PK / toxicity & bioassays',
    'Molecular docking & ADMET',
    'HPLC / ÄKTA / bioreactor systems',
  ],
  publications: [
    {
      text: 'Sakhawat A. et al. (2025). PD-L1 targeting in triple negative breast cancer: in silico and in vitro validation of wasp venom peptide MP-1. Medical Oncology.',
    },
    {
      text: 'Akram A., Sakhawat A. et al. (2024). Silibinins and curcumin as promising ligands against mutant cystic fibrosis transmembrane regulator protein. AMB Express.',
    },
    {
      text: 'Sakhawat A. et al. (2023). Natural compound targeting BDNF V66M variant: insights from in silico docking and molecular analysis. AMB Express.',
    },
  ],
  highlights: [
    {
      title: 'Biopharmaceutical & Proteomics Lab — CEMB',
      detail:
        'Research Associate (2024–present): recombinant DNA workflows, PCR/RT-PCR, ELISA, HPLC/FPLC, mammalian cell culture, and pilot-scale therapeutic protein production supporting clinical studies.',
    },
    {
      title: 'Therapeutic & diagnostic programmes',
      detail:
        'Biosimilar and therapeutic protein projects; indigenous PCR reagents and diagnostic kits aligned with biosafety and ISO 9001:2015; antibody development in non-clinical species.',
    },
    {
      title: 'Teaching & peer review',
      detail:
        'Lecturer / visiting faculty (Superior College; Oxford College affiliated with University of Sargodha); journal reviewer for Open Exploration and PLOS ONE.',
    },
  ],
  pdf: '/team/cv-azra-sakhawat.pdf',
  linkedin: 'https://www.linkedin.com/in/azra-sakhawatbb2182162',
};

const SAAD = {
  bio: [
    'Dr. Saad Tahir is a Ph.D. molecular biologist specializing in biopharmaceutical testing, production, and development — with deep expertise in recombinant protein production, purification, quality control, bioassays, and bioprocess development. He currently serves as Senior Lead Manager Production at Searle Biopharmaceuticals (Nextar Pvt. Ltd.), leading indigenous recombinant G-CSF programmes and quality control of biopharmaceuticals.',
    'Previously Research Officer and Lecturer (Assistant Professor, Adhoc) at the Centre of Excellence in Molecular Biology (CEMB), University of the Punjab (2012–2026), he led technology transfer of Filgrastim to Searle Biosciences, conducted pharmacokinetic and toxicity studies of Semaglutide for BF Biosciences, and managed downstream processing and QC of human recombinant proteins including Filgrastim, Interferon, IL-29, and IL-6. He has also served as Quality Control Manager supporting DRAP-registered technology transfer for Filgrastim downstream processes.',
  ],
  metrics: [
    { value: '24+', label: 'Publications' },
    { value: 'Ph.D.', label: 'Molecular Biology' },
    { value: '14+', label: 'Years at CEMB' },
    { value: 'DRAP', label: 'Tech Transfer' },
  ],
  credentials: [
    {
      year: '2022',
      degree: 'Ph.D. Molecular Biology (Biopharmaceuticals)',
      place: 'Centre of Excellence in Molecular Biology (CEMB), University of the Punjab, Lahore',
    },
    {
      year: '2015',
      degree: 'M.Phil. Pharmaceutics',
      place: 'Riphah International University, Lahore',
    },
    {
      year: '2010',
      degree: 'Pharm-D',
      place: 'Pakistan',
    },
  ],
  interests: [
    'Recombinant protein production & purification',
    'Downstream processing & chromatography',
    'In-vitro / in-vivo bioassays',
    'PK studies & toxicity profiling',
    'Biosimilars (Filgrastim, EPO, IL-11)',
    'GMP / DRAP regulatory compliance',
  ],
  highlights: [
    {
      title: 'Searle Biopharmaceuticals — Senior Lead Manager Production',
      detail:
        '2026–present: recombinant protein formulation, filling and packing of Filgrastim, Peg-Filgrastim, Adalimumab and Clotinox; facility and downstream design for Erythropoietin and Filgrastim; cell-culture QC lab, SDS-PAGE / IEF, and anticlotting bioassay for Enoxaparin Sodium.',
    },
    {
      title: 'CEMB — Research Officer & Lecturer',
      detail:
        '2012–2026: Filgrastim technology transfer to Searle; Semaglutide PK and toxicity studies for BF Biosciences; downstream QC of Filgrastim, Interferon, IL-29, IL-6; exosome production for drug loading; student and lab-staff supervision.',
    },
    {
      title: 'Programmes & achievements',
      detail:
        'DRAP-registered lab for human recombinant therapeutic production technology transfer; Ultrapure Taq Polymerase & PCR Mix QC lead; recombinant IL-11 (Oprelvekin) QC optimization; albumin-fusion consensus interferon characterization; insulin biosimilar (ongoing).',
    },
  ],
  pdf: '/team/cv-dr-saad-tahir.docx',
};

const RIZWAN = {
  bio: [
    'Dr. Rizwan Abid is a genomics and molecular biology specialist with more than six years of focused experience in next-generation sequencing, genomic data analysis, and translational research. He currently serves as Genomics and Sequencing Specialist with Visole Group / GMS, supporting Illumina NGS platforms — including MiniSeq, MiSeq i100, NextSeq, and NovaSeq — through protocol optimization, instrument training, troubleshooting, and workshop delivery.',
    'His research spans cancer genomics, neurological disorders, brain tumors, and genetic markers, with doctoral work on epilepsy-associated molecular signatures using whole-exome sequencing. He has held research posts at the University of the Punjab and as a Guest Researcher at the Manchester Centre for Genomic Medicine (UK), and brings wet-lab molecular methods together with bioinformatics, GWAS, and machine-learning approaches for precision healthcare.',
  ],
  metrics: [
    { value: 'Ph.D.', label: 'Biochemistry' },
    { value: '11+', label: 'Publications' },
    { value: '6+', label: 'Years Genomics' },
    { value: 'Illumina', label: 'NGS Platforms' },
  ],
  credentials: [
    {
      year: '2024',
      degree: 'Ph.D. in Biochemistry',
      place:
        'University of the Punjab, Lahore — Identification of epilepsy-associated molecular signatures in the human genomic landscape using whole-exome sequencing',
    },
    {
      year: '2013',
      degree: 'M.Phil. Biochemistry',
      place:
        'University of Veterinary and Animal Sciences, Lahore — Biosafety studies of transgenic sugarcane developed by CEMB',
    },
    {
      year: '2010',
      degree: 'B.S. (Hons.) Biochemistry',
      place: 'The University of Lahore — Apoptosis as a therapeutic strategy in eosinophilia',
    },
  ],
  interests: [
    'Next-generation sequencing (Illumina)',
    'Whole-exome sequencing & GWAS',
    'Cancer & epilepsy genomics',
    'Molecular diagnostics (qPCR, ELISA, Sanger)',
    'Bioinformatics & machine learning',
    'Immunomodulatory / RA biopharmaceuticals',
  ],
  publications: [
    {
      text: 'Abid R. et al. (2024). Association of epilepsy and neurological impairments with homozygous recessive missense mutations in ST3GAL5 and CACNA1H — insights through molecular dynamic simulations.',
    },
    {
      text: 'Abid R. et al. (2024). Integrating HRMAS-NMR data and machine learning-assisted profiling of metabolite fluxes to classify low- and high-grade gliomas.',
    },
    {
      text: 'Sahibzada K.I., Abid R. et al. (2025). HCV genotyping and rational computational designing of an immunogenic multiepitope vaccine against genotype 3a. Journal of Computer-Aided Molecular Design.',
    },
  ],
  highlights: [
    {
      title: 'Visole Group / GMS — Genomics & Sequencing Specialist',
      detail:
        '2024–present: expert support on Illumina NGS platforms; protocol optimization; instrument and data-analysis training; technical troubleshooting; customer workshops and project coordination.',
    },
    {
      title: 'Manchester Centre for Genomic Medicine — Guest Researcher',
      detail:
        '2019–2020 (UK): dual-property anti-inflammatory biopharmaceutical for rheumatoid arthritis; cytokine and inflammation mechanisms; qPCR, ELISA, proteomics, GWAS, and clinical collaboration.',
    },
    {
      title: 'University of the Punjab & CEMB — Research Associate',
      detail:
        'Biopharmaceutical and Biomarker Discovery Lab (2019–2022); HEC NRPU immunomodulatory cytokines project; earlier CEMB biosafety studies of transgenic sugarcane (2012–2014).',
    },
  ],
  pdf: '/team/cv-rizwan-abid.pdf',
  linkedin: 'https://www.linkedin.com/in/rizwan-abid-phd-a9362b82',
  researchgate: 'https://www.researchgate.net/profile/Rizwan-Abid',
};

const AYESHA = {
  bio: [
    'Ayesha Imtiaz is a dedicated, detail-oriented Medical Laboratory Technologist and BS Medical Laboratory Technology graduate with hands-on internship experience in high-volume hospital and diagnostic laboratories. She performs diagnostic testing across hematology, histopathology, microbiology, and clinical biochemistry, with a strong commitment to quality control and biosafety standards.',
    'Her training includes tissue processing and H&E staining, microbial culture and Gram staining with antibiotic susceptibility support, and operation of automated chemistry and hematology analyzers for routine and special panels — bringing practical bench skills to AIMS laboratory programmes.',
  ],
  metrics: [
    { value: 'BS MLT', label: 'GCU Lahore' },
    { value: '4', label: 'Lab Disciplines' },
    { value: 'QC', label: 'Biosafety Focus' },
    { value: 'Hospital', label: 'Internship Experience' },
  ],
  credentials: [
    {
      year: '2026',
      degree: 'BS Medical Laboratory Technology',
      place: 'Government College University, Lahore (2022–2026)',
    },
    {
      year: '2022',
      degree: 'FSc (Pre-Medical)',
      place: 'KIPS College (2020–2022)',
    },
  ],
  interests: [
    'Hematology & CBC differentials',
    'Histopathology & H&E staining',
    'Clinical microbiology & AST',
    'Clinical chemistry (LFT / RFT / lipids / hormones)',
    'Automated analyzer operation',
    'Laboratory QC & biosafety',
  ],
  highlights: [
    {
      title: 'Genome Center Lahore — Clinical Lab Internship',
      detail:
        'July–August 2025: operated automated chemistry analyzers for routine and special panels (LFTs, RFTs, lipid profiles, hormone testing); operated automated hematology analyzers for CBC with 3-part and 5-part differentials.',
    },
    {
      title: 'Mayo Hospital Lahore — Pathology Department',
      detail:
        'November–December 2024: histopathology — tissue processing, rotary microtome sectioning, slide preparation, and routine H&E staining; microbiology — specimen culture, Gram staining, pathogen identification support, and antibiotic susceptibility testing.',
    },
  ],
  pdf: '/team/cv-ayesha-imtiaz.pdf',
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 mb-3">
      <span className="w-6 h-px bg-[#80B93C]" aria-hidden="true" />
      <span className="eyebrow text-[#80B93C]">{children}</span>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        id="team-hero"
        aria-labelledby="team-hero-heading"
        className="relative py-20 lg:py-28 bg-[#0B3450] text-white overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 20% 40%, rgba(43,183,196,0.18), transparent 55%), radial-gradient(ellipse 50% 50% at 85% 20%, rgba(128,185,60,0.12), transparent 50%)',
          }}
          aria-hidden="true"
        />
        <div className="absolute top-1/2 left-8 -translate-y-1/2 opacity-[0.05]" aria-hidden="true">
          <HexLattice color="#ffffff" size={320} />
        </div>
        <div className="absolute right-12 top-10 opacity-[0.04]" aria-hidden="true">
          <PetriRings color="#ffffff" size={400} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <SectionEyebrow>
                <span className="text-[#80B93C]">People &amp; Expertise</span>
              </SectionEyebrow>
              <h1
                id="team-hero-heading"
                className="section-title mb-5"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)' }}
              >
                Our Team
              </h1>
              <p className="text-white/70 leading-relaxed text-sm lg:text-base max-w-2xl">
                Biochemistry and molecular sciences, environmental analysis, chemical engineering
                research, and industrial water treatment — united by rigorous method and a shared
                commitment to quality life.
              </p>
            </div>
          </ScrollReveal>

          {/* Roster strip */}
          <div className="mt-12 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {TEAM.map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 80}>
                <a
                  href={`#${member.id}`}
                  className="group flex gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#2BB7C4]"
                >
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-white/10">
                    <Image
                      src={member.image}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover object-[center_22%]"
                      priority={i === 0}
                    />
                  </div>
                  <div className="min-w-0 flex flex-col justify-center">
                    <span
                      className="text-[0.65rem] font-semibold uppercase tracking-wider mb-1"
                      style={{ color: member.accent }}
                    >
                      {member.unit}
                    </span>
                    <h2
                      className="text-white font-bold leading-snug group-hover:text-[#2BB7C4] transition-colors"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
                    >
                      {member.name}
                    </h2>
                    <p className="text-white/55 text-xs mt-1">{member.title}</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro ──────────────────────────────────────────────── */}
      <section className="py-14 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-[#6B7A8D] leading-relaxed text-sm lg:text-[0.95rem]">
              From recombinant biopharmaceuticals and molecular-scale environmental analysis to
              chemical engineering research and full-scale industrial treatment plants, our
              specialists combine academic depth with operational experience — supporting clients
              across pharma, agri, textile, and environmental domains.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Imtiaz Ahmed — CEO ─────────────────────────────────── */}
      <section
        id="imtiaz-ahmed"
        aria-labelledby="imtiaz-heading"
        className="py-16 lg:py-24 bg-[#F6FAFB] scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-14 items-start">
            <ScrollReveal direction="left">
              <div className="lg:sticky lg:top-28">
                <div
                  className="relative aspect-[4/5] w-full max-w-[260px] mx-auto lg:mx-0 overflow-hidden rounded-2xl bg-white"
                  style={{ boxShadow: '0 12px 40px rgba(11,52,80,0.10)' }}
                >
                  <Image
                    src="/team/imtiaz-ahmed.jpg"
                    alt="Portrait of Imtiaz Ahmed"
                    fill
                    sizes="260px"
                    className="object-cover object-[center_22%]"
                    priority
                  />
                </div>
                <div className="mt-5 text-center lg:text-left">
                  <a
                    href={IMTIAZ.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#2F6FB0] hover:underline"
                  >
                    CV (DOCX)
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <SectionEyebrow>Leadership</SectionEyebrow>
              <h2
                id="imtiaz-heading"
                className="text-[#0B3450] font-bold leading-tight mb-2"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
              >
                Imtiaz Ahmed
              </h2>
              <p className="text-[#0B3450] font-semibold mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                Chief Executive Officer
              </p>
              <p className="text-[#6B7A8D] text-sm mb-6">
                Metrology · ISO/IEC 17025 · Accredited laboratory leadership
              </p>

              <div className="space-y-4 text-[#6B7A8D] text-sm lg:text-[0.95rem] leading-relaxed mb-8">
                {IMTIAZ.bio.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {IMTIAZ.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-gray-100 bg-white px-4 py-4 text-center"
                  >
                    <div
                      className="text-[#0B3450] font-bold tabular-nums"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem' }}
                    >
                      {m.value}
                    </div>
                    <div className="text-[#6B7A8D] text-xs mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              <h3
                className="text-[#0B3450] font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Education &amp; credentials
              </h3>
              <ul className="space-y-4 mb-8">
                {IMTIAZ.credentials.map((c) => (
                  <li key={c.degree} className="flex gap-4">
                    <span
                      className="shrink-0 w-12 text-[#0B3450] font-semibold text-sm tabular-nums"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {c.year}
                    </span>
                    <div>
                      <div className="text-[#0B3450] font-semibold text-sm">{c.degree}</div>
                      <div className="text-[#6B7A8D] text-xs mt-0.5">{c.place}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <h3
                className="text-[#0B3450] font-bold mb-3"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Focus areas
              </h3>
              <ul className="flex flex-wrap gap-2 mb-10">
                {IMTIAZ.interests.map((s) => (
                  <li
                    key={s}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#0B3450]"
                    style={{ background: 'rgba(11,52,80,0.10)' }}
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <h3
                className="text-[#0B3450] font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Selected highlights
              </h3>
              <ul className="space-y-4 mb-6">
                {IMTIAZ.highlights.map((h) => (
                  <li key={h.title} className="rounded-xl border border-gray-100 bg-white p-5">
                    <div className="text-[#0B3450] font-semibold text-sm">{h.title}</div>
                    <p className="text-[#6B7A8D] text-xs mt-1.5 leading-relaxed">{h.detail}</p>
                  </li>
                ))}
              </ul>

              <a
                href={IMTIAZ.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B3450] hover:text-[#164e78] transition-colors"
              >
                Download full CV
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Dr. Azra Sakhawat Khan ─────────────────────────────── */}
      <section
        id="azra-sakhawat"
        aria-labelledby="azra-heading"
        className="py-16 lg:py-24 bg-white scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-14 items-start">
            <ScrollReveal direction="left">
              <div className="lg:sticky lg:top-28">
                <div
                  className="relative aspect-[4/5] w-full max-w-[260px] mx-auto lg:mx-0 overflow-hidden rounded-2xl bg-[#F6FAFB]"
                  style={{ boxShadow: '0 12px 40px rgba(11,52,80,0.10)' }}
                >
                  <Image
                    src="/team/azra-sakhawat.jpg"
                    alt="Portrait of Dr. Azra Sakhawat Khan"
                    fill
                    sizes="260px"
                    className="object-cover object-[center_22%]"
                  />
                </div>
                <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-3 text-xs">
                  <a
                    href={AZRA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2F6FB0] hover:underline"
                  >
                    LinkedIn
                  </a>
                  <span className="text-slate-300">·</span>
                  <a
                    href={AZRA.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2F6FB0] hover:underline"
                  >
                    CV PDF
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <SectionEyebrow>Biopharmaceuticals &amp; Molecular Biology</SectionEyebrow>
              <h2
                id="azra-heading"
                className="text-[#0B3450] font-bold leading-tight mb-2"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
              >
                Dr. Azra Sakhawat Khan
              </h2>
              <p className="text-[#7C5CBF] font-semibold mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                Lab Director &amp; Research Consultant
              </p>
              <p className="text-[#6B7A8D] text-sm mb-6">
                Ph.D. Biochemist · Research Associate, BPL / CEMB, Lahore
              </p>

              <div className="space-y-4 text-[#6B7A8D] text-sm lg:text-[0.95rem] leading-relaxed mb-8">
                {AZRA.bio.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {AZRA.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-gray-100 bg-[#F6FAFB] px-4 py-4 text-center"
                  >
                    <div
                      className="text-[#0B3450] font-bold tabular-nums"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem' }}
                    >
                      {m.value}
                    </div>
                    <div className="text-[#6B7A8D] text-xs mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              <h3
                className="text-[#0B3450] font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Education
              </h3>
              <ul className="space-y-4 mb-8">
                {AZRA.credentials.map((c) => (
                  <li key={c.degree} className="flex gap-4">
                    <span
                      className="shrink-0 w-12 text-[#7C5CBF] font-semibold text-sm tabular-nums"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {c.year}
                    </span>
                    <div>
                      <div className="text-[#0B3450] font-semibold text-sm">{c.degree}</div>
                      <div className="text-[#6B7A8D] text-xs mt-0.5">{c.place}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <h3
                className="text-[#0B3450] font-bold mb-3"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Focus areas
              </h3>
              <ul className="flex flex-wrap gap-2 mb-10">
                {AZRA.interests.map((s) => (
                  <li
                    key={s}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#0B3450]"
                    style={{ background: 'rgba(124,92,191,0.12)' }}
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <h3
                className="text-[#0B3450] font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Selected publications
              </h3>
              <ol className="space-y-3 mb-10">
                {AZRA.publications.map((pub, i) => (
                  <li
                    key={pub.text.slice(0, 48)}
                    className="bg-[#F6FAFB] rounded-xl border border-gray-100 p-4 text-sm text-[#6B7A8D] leading-relaxed"
                  >
                    <span className="text-[#7C5CBF] font-semibold mr-2" style={{ fontFamily: 'var(--font-mono)' }}>
                      {i + 1}.
                    </span>
                    {pub.text}
                  </li>
                ))}
              </ol>

              <h3
                className="text-[#0B3450] font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Selected highlights
              </h3>
              <ul className="space-y-4 mb-6">
                {AZRA.highlights.map((h) => (
                  <li
                    key={h.title}
                    className="rounded-xl border border-gray-100 bg-[#F6FAFB] p-5"
                  >
                    <div className="text-[#0B3450] font-semibold text-sm">{h.title}</div>
                    <p className="text-[#6B7A8D] text-xs mt-1.5 leading-relaxed">{h.detail}</p>
                  </li>
                ))}
              </ul>

              <a
                href={AZRA.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B3450] hover:text-[#164e78] transition-colors"
              >
                Download full CV
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Dr. Tahir ──────────────────────────────────────────── */}
      <section id="dr-tahir" aria-labelledby="tahir-heading" className="py-16 lg:py-24 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-14 items-start">
            <ScrollReveal direction="left">
              <div className="lg:sticky lg:top-28">
                <div
                  className="relative aspect-[4/5] w-full max-w-[260px] mx-auto lg:mx-0 overflow-hidden rounded-2xl bg-white"
                  style={{ boxShadow: '0 12px 40px rgba(11,52,80,0.10)' }}
                >
                  <Image
                    src="/team/dr-muhammad-tahir-shehzad.png"
                    alt="Portrait of Dr. Muhammad Tahir Shehzad"
                    fill
                    sizes="260px"
                    className="object-cover object-[center_22%]"
                  />
                </div>
                <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-3 text-xs">
                  <a
                    href={TAHIR.orcid}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2F6FB0] hover:underline"
                  >
                    ORCID
                  </a>
                  <span className="text-slate-300">·</span>
                  <a
                    href={TAHIR.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2F6FB0] hover:underline"
                  >
                    Bibliography PDF
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <SectionEyebrow>Scientific Consultancy</SectionEyebrow>
              <h2
                id="tahir-heading"
                className="text-[#0B3450] font-bold leading-tight mb-2"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
              >
                Dr. Muhammad Tahir Shehzad
              </h2>
              <p className="text-[#80B93C] font-semibold mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                Senior Scientific Consultant
              </p>

              <div className="space-y-4 text-[#6B7A8D] text-sm lg:text-[0.95rem] leading-relaxed mb-8">
                {TAHIR.bio.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {TAHIR.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="bg-[#F6FAFB] rounded-xl border border-gray-100 px-4 py-4 text-center"
                  >
                    <div
                      className="text-[#0B3450] font-bold tabular-nums"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem' }}
                    >
                      {m.value}
                    </div>
                    <div className="text-[#6B7A8D] text-xs mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              <h3
                className="text-[#0B3450] font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Education
              </h3>
              <ul className="space-y-4 mb-10">
                {TAHIR.credentials.map((c) => (
                  <li key={c.degree} className="flex gap-4">
                    <span
                      className="shrink-0 w-12 text-[#80B93C] font-semibold text-sm tabular-nums"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {c.year}
                    </span>
                    <div>
                      <div className="text-[#0B3450] font-semibold text-sm">{c.degree}</div>
                      <div className="text-[#6B7A8D] text-xs mt-0.5">{c.place}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex items-end justify-between gap-4 mb-4">
                <h3
                  className="text-[#0B3450] font-bold"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
                >
                  Selected publications
                </h3>
                <a
                  href={TAHIR.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#0B3450] hover:text-[#164e78] shrink-0"
                >
                  Full PDF ↓
                </a>
              </div>
              <ol className="space-y-3">
                {TAHIR.publications.map((pub, i) => (
                  <li
                    key={pub.doi}
                    className="bg-[#F6FAFB] rounded-xl border border-gray-100 p-4 text-sm text-[#6B7A8D] leading-relaxed"
                  >
                    <span className="text-[#80B93C] font-semibold mr-2" style={{ fontFamily: 'var(--font-mono)' }}>
                      {i + 1}.
                    </span>
                    {pub.text}{' '}
                    <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="text-[#2F6FB0] hover:underline">
                      DOI
                    </a>
                  </li>
                ))}
              </ol>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Engr. Dr. Mudassar Azam ─────────────────────────────── */}
      <section
        id="mudassar-azam"
        aria-labelledby="mudassar-heading"
        className="py-16 lg:py-24 bg-white scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-14 items-start">
            <ScrollReveal direction="left">
              <div className="lg:sticky lg:top-28">
                <div
                  className="relative aspect-[4/5] w-full max-w-[260px] mx-auto lg:mx-0 overflow-hidden rounded-2xl bg-[#F6FAFB]"
                  style={{ boxShadow: '0 12px 40px rgba(11,52,80,0.10)' }}
                >
                  <Image
                    src="/team/mudassar-azam.png"
                    alt="Portrait of Engr. Dr. Mudassar Azam"
                    fill
                    sizes="260px"
                    className="object-cover object-[center_22%]"
                  />
                </div>
                <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-3 text-xs">
                  <a
                    href={MUDASSAR.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2F6FB0] hover:underline"
                  >
                    Google Scholar
                  </a>
                  <span className="text-slate-300">·</span>
                  <a
                    href={MUDASSAR.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2F6FB0] hover:underline"
                  >
                    LinkedIn
                  </a>
                  <span className="text-slate-300">·</span>
                  <a
                    href={MUDASSAR.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2F6FB0] hover:underline"
                  >
                    CV PDF
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <SectionEyebrow>Chemical Engineering &amp; Research</SectionEyebrow>
              <h2
                id="mudassar-heading"
                className="text-[#0B3450] font-bold leading-tight mb-2"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
              >
                Engr. Dr. Mudassar Azam
              </h2>
              <p className="text-[#2F6FB0] font-semibold mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                Chemical Engineering Advisor
              </p>
              <p className="text-[#6B7A8D] text-sm mb-6">
                Assistant Professor, University of the Punjab · Ph.D. TU Wien, Austria
              </p>

              <div className="space-y-4 text-[#6B7A8D] text-sm lg:text-[0.95rem] leading-relaxed mb-8">
                {MUDASSAR.bio.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {MUDASSAR.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-gray-100 bg-[#F6FAFB] px-4 py-4 text-center"
                  >
                    <div
                      className="text-[#0B3450] font-bold tabular-nums"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem' }}
                    >
                      {m.value}
                    </div>
                    <div className="text-[#6B7A8D] text-xs mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              <h3
                className="text-[#0B3450] font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Education
              </h3>
              <ul className="space-y-4 mb-8">
                {MUDASSAR.credentials.map((c) => (
                  <li key={c.degree} className="flex gap-4">
                    <span
                      className="shrink-0 w-12 text-[#2F6FB0] font-semibold text-sm tabular-nums"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {c.year}
                    </span>
                    <div>
                      <div className="text-[#0B3450] font-semibold text-sm">{c.degree}</div>
                      <div className="text-[#6B7A8D] text-xs mt-0.5">{c.place}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <h3
                className="text-[#0B3450] font-bold mb-3"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Research interests
              </h3>
              <ul className="flex flex-wrap gap-2 mb-8">
                {MUDASSAR.interests.map((s) => (
                  <li
                    key={s}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#0B3450]"
                    style={{ background: 'rgba(47,111,176,0.10)' }}
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <div className="grid sm:grid-cols-3 gap-3 mb-10">
                {MUDASSAR.supervision.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-gray-100 bg-[#F6FAFB] px-4 py-3 text-center"
                  >
                    <div
                      className="text-[#0B3450] font-bold tabular-nums"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem' }}
                    >
                      {s.value}
                    </div>
                    <div className="text-[#6B7A8D] text-[0.7rem] mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              <h3
                className="text-[#0B3450] font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Selected highlights
              </h3>
              <ul className="space-y-4 mb-6">
                {MUDASSAR.highlights.map((h) => (
                  <li
                    key={h.title}
                    className="rounded-xl border border-gray-100 bg-[#F6FAFB] p-5"
                  >
                    <div className="text-[#0B3450] font-semibold text-sm">{h.title}</div>
                    <p className="text-[#6B7A8D] text-xs mt-1.5 leading-relaxed">{h.detail}</p>
                  </li>
                ))}
              </ul>

              <a
                href={MUDASSAR.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B3450] hover:text-[#164e78] transition-colors"
              >
                Download full CV
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Sheraz Khan ────────────────────────────────────────── */}
      <section id="sheraz-khan" aria-labelledby="sheraz-heading" className="py-16 lg:py-24 bg-[#F6FAFB] scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-14 items-start">
            <ScrollReveal direction="left">
              <div className="lg:sticky lg:top-28">
                <div
                  className="relative aspect-[4/5] w-full max-w-[260px] mx-auto lg:mx-0 overflow-hidden rounded-2xl bg-white"
                  style={{ boxShadow: '0 12px 40px rgba(11,52,80,0.10)' }}
                >
                  <Image
                    src="/team/sheraz-khan.png"
                    alt="Portrait of Sheraz Khan"
                    fill
                    sizes="260px"
                    className="object-cover object-[center_22%]"
                  />
                </div>
                <div className="mt-5 text-center lg:text-left">
                  <a
                    href={SHERAZ.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#2F6FB0] hover:underline"
                  >
                    Professional Track Record 2026 (PDF)
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <SectionEyebrow>Process Engineering</SectionEyebrow>
              <h2
                id="sheraz-heading"
                className="text-[#0B3450] font-bold leading-tight mb-2"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
              >
                Sheraz Khan
              </h2>
              <p className="text-[#2BB7C4] font-semibold mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                Water &amp; Wastewater Engineering Lead
              </p>
              <p className="text-[#6B7A8D] text-sm mb-6">
                16 Years of Water &amp; Wastewater Engineering Excellence
              </p>

              <div className="space-y-4 text-[#6B7A8D] text-sm lg:text-[0.95rem] leading-relaxed mb-8">
                {SHERAZ.bio.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {SHERAZ.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-gray-100 bg-[#F6FAFB] px-4 py-4 text-center"
                  >
                    <div
                      className="text-[#0B3450] font-bold tabular-nums"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem' }}
                    >
                      {m.value}
                    </div>
                    <div className="text-[#6B7A8D] text-xs mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              <h3
                className="text-[#0B3450] font-bold mb-3"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Delivery platforms
              </h3>
              <ul className="flex flex-wrap gap-2 mb-8">
                {SHERAZ.platforms.map((p) => (
                  <li
                    key={p}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#F6FAFB] text-[#0B3450] border border-slate-100"
                  >
                    {p}
                  </li>
                ))}
              </ul>

              <h3
                className="text-[#0B3450] font-bold mb-3"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Sectors served
              </h3>
              <ul className="flex flex-wrap gap-2 mb-10">
                {SHERAZ.sectors.map((s) => (
                  <li
                    key={s}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#0B3450]"
                    style={{ background: 'rgba(43,183,196,0.10)' }}
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <h3
                className="text-[#0B3450] font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Selected programme highlights
              </h3>
              <ul className="space-y-4 mb-6">
                {SHERAZ.highlights.map((h) => (
                  <li
                    key={h.title}
                    className="rounded-xl border border-gray-100 bg-[#F6FAFB] p-5 flex gap-4"
                  >
                    <span
                      className="shrink-0 text-[#2BB7C4] font-semibold text-sm"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {h.year}
                    </span>
                    <div>
                      <div className="text-[#0B3450] font-semibold text-sm">{h.title}</div>
                      <p className="text-[#6B7A8D] text-xs mt-1.5 leading-relaxed">{h.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href={SHERAZ.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B3450] hover:text-[#164e78] transition-colors"
              >
                Download full chronological project list
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Dr. Saad Tahir ─────────────────────────────────────── */}
      <section
        id="dr-saad-tahir"
        aria-labelledby="saad-heading"
        className="py-16 lg:py-24 bg-[#F6FAFB] scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-14 items-start">
            <ScrollReveal direction="left">
              <div className="lg:sticky lg:top-28">
                <div
                  className="relative aspect-[4/5] w-full max-w-[260px] mx-auto lg:mx-0 overflow-hidden rounded-2xl bg-white"
                  style={{ boxShadow: '0 12px 40px rgba(11,52,80,0.10)' }}
                >
                  <Image
                    src="/team/dr-saad-tahir.png"
                    alt="Portrait of Dr. Saad Tahir"
                    fill
                    sizes="260px"
                    className="object-cover object-[center_22%]"
                  />
                </div>
                <div className="mt-5 text-center lg:text-left">
                  <a
                    href={SAAD.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#2F6FB0] hover:underline"
                  >
                    CV (DOCX)
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <SectionEyebrow>Biopharma Production &amp; QC</SectionEyebrow>
              <h2
                id="saad-heading"
                className="text-[#0B3450] font-bold leading-tight mb-2"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
              >
                Dr. Saad Tahir
              </h2>
              <p className="text-[#C24E72] font-semibold mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                Biopharmaceutical Production &amp; Development Lead
              </p>
              <p className="text-[#6B7A8D] text-sm mb-6">
                Ph.D. Molecular Biology · Senior Lead Manager Production, Searle Biopharmaceuticals
              </p>

              <div className="space-y-4 text-[#6B7A8D] text-sm lg:text-[0.95rem] leading-relaxed mb-8">
                {SAAD.bio.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {SAAD.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-gray-100 bg-white px-4 py-4 text-center"
                  >
                    <div
                      className="text-[#0B3450] font-bold tabular-nums"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem' }}
                    >
                      {m.value}
                    </div>
                    <div className="text-[#6B7A8D] text-xs mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              <h3
                className="text-[#0B3450] font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Education
              </h3>
              <ul className="space-y-4 mb-8">
                {SAAD.credentials.map((c) => (
                  <li key={c.degree} className="flex gap-4">
                    <span
                      className="shrink-0 w-12 text-[#C24E72] font-semibold text-sm tabular-nums"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {c.year}
                    </span>
                    <div>
                      <div className="text-[#0B3450] font-semibold text-sm">{c.degree}</div>
                      <div className="text-[#6B7A8D] text-xs mt-0.5">{c.place}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <h3
                className="text-[#0B3450] font-bold mb-3"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Focus areas
              </h3>
              <ul className="flex flex-wrap gap-2 mb-10">
                {SAAD.interests.map((s) => (
                  <li
                    key={s}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#0B3450]"
                    style={{ background: 'rgba(194,78,114,0.12)' }}
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <h3
                className="text-[#0B3450] font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Selected highlights
              </h3>
              <ul className="space-y-4 mb-6">
                {SAAD.highlights.map((h) => (
                  <li
                    key={h.title}
                    className="rounded-xl border border-gray-100 bg-white p-5"
                  >
                    <div className="text-[#0B3450] font-semibold text-sm">{h.title}</div>
                    <p className="text-[#6B7A8D] text-xs mt-1.5 leading-relaxed">{h.detail}</p>
                  </li>
                ))}
              </ul>

              <a
                href={SAAD.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B3450] hover:text-[#164e78] transition-colors"
              >
                Download full CV
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Dr. Rizwan Abid ────────────────────────────────────── */}
      <section
        id="rizwan-abid"
        aria-labelledby="rizwan-heading"
        className="py-16 lg:py-24 bg-white scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-14 items-start">
            <ScrollReveal direction="left">
              <div className="lg:sticky lg:top-28">
                <div
                  className="relative aspect-[4/5] w-full max-w-[260px] mx-auto lg:mx-0 overflow-hidden rounded-2xl bg-[#F6FAFB]"
                  style={{ boxShadow: '0 12px 40px rgba(11,52,80,0.10)' }}
                >
                  <Image
                    src="/team/rizwan-abid.jpg"
                    alt="Portrait of Dr. Rizwan Abid"
                    fill
                    sizes="260px"
                    className="object-cover object-[center_22%]"
                  />
                </div>
                <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-3 text-xs">
                  <a
                    href={RIZWAN.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2F6FB0] hover:underline"
                  >
                    LinkedIn
                  </a>
                  <span className="text-slate-300">·</span>
                  <a
                    href={RIZWAN.researchgate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2F6FB0] hover:underline"
                  >
                    ResearchGate
                  </a>
                  <span className="text-slate-300">·</span>
                  <a
                    href={RIZWAN.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2F6FB0] hover:underline"
                  >
                    CV PDF
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <SectionEyebrow>Genomics &amp; Molecular Biology</SectionEyebrow>
              <h2
                id="rizwan-heading"
                className="text-[#0B3450] font-bold leading-tight mb-2"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
              >
                Dr. Rizwan Abid
              </h2>
              <p className="text-[#D97706] font-semibold mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                Genomics &amp; Sequencing Specialist
              </p>
              <p className="text-[#6B7A8D] text-sm mb-6">
                Ph.D. Biochemistry · Illumina NGS · Visole Group / GMS, Lahore
              </p>

              <div className="space-y-4 text-[#6B7A8D] text-sm lg:text-[0.95rem] leading-relaxed mb-8">
                {RIZWAN.bio.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {RIZWAN.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-gray-100 bg-[#F6FAFB] px-4 py-4 text-center"
                  >
                    <div
                      className="text-[#0B3450] font-bold tabular-nums"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem' }}
                    >
                      {m.value}
                    </div>
                    <div className="text-[#6B7A8D] text-xs mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              <h3
                className="text-[#0B3450] font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Education
              </h3>
              <ul className="space-y-4 mb-8">
                {RIZWAN.credentials.map((c) => (
                  <li key={c.degree} className="flex gap-4">
                    <span
                      className="shrink-0 w-12 text-[#D97706] font-semibold text-sm tabular-nums"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {c.year}
                    </span>
                    <div>
                      <div className="text-[#0B3450] font-semibold text-sm">{c.degree}</div>
                      <div className="text-[#6B7A8D] text-xs mt-0.5">{c.place}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <h3
                className="text-[#0B3450] font-bold mb-3"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Focus areas
              </h3>
              <ul className="flex flex-wrap gap-2 mb-10">
                {RIZWAN.interests.map((s) => (
                  <li
                    key={s}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#0B3450]"
                    style={{ background: 'rgba(217,119,6,0.12)' }}
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <h3
                className="text-[#0B3450] font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Selected publications
              </h3>
              <ol className="space-y-3 mb-10">
                {RIZWAN.publications.map((pub, i) => (
                  <li
                    key={pub.text.slice(0, 48)}
                    className="bg-[#F6FAFB] rounded-xl border border-gray-100 p-4 text-sm text-[#6B7A8D] leading-relaxed"
                  >
                    <span className="text-[#D97706] font-semibold mr-2" style={{ fontFamily: 'var(--font-mono)' }}>
                      {i + 1}.
                    </span>
                    {pub.text}
                  </li>
                ))}
              </ol>

              <h3
                className="text-[#0B3450] font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Selected highlights
              </h3>
              <ul className="space-y-4 mb-6">
                {RIZWAN.highlights.map((h) => (
                  <li
                    key={h.title}
                    className="rounded-xl border border-gray-100 bg-[#F6FAFB] p-5"
                  >
                    <div className="text-[#0B3450] font-semibold text-sm">{h.title}</div>
                    <p className="text-[#6B7A8D] text-xs mt-1.5 leading-relaxed">{h.detail}</p>
                  </li>
                ))}
              </ul>

              <a
                href={RIZWAN.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B3450] hover:text-[#164e78] transition-colors"
              >
                Download full CV
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Ayesha Imtiaz ──────────────────────────────────────── */}
      <section
        id="ayesha-imtiaz"
        aria-labelledby="ayesha-heading"
        className="py-16 lg:py-24 bg-[#F6FAFB] scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-14 items-start">
            <ScrollReveal direction="left">
              <div className="lg:sticky lg:top-28">
                <div
                  className="relative aspect-[4/5] w-full max-w-[260px] mx-auto lg:mx-0 overflow-hidden rounded-2xl bg-white"
                  style={{ boxShadow: '0 12px 40px rgba(11,52,80,0.10)' }}
                >
                  <Image
                    src="/team/ayesha-imtiaz.jpg"
                    alt="Portrait of Ayesha Imtiaz"
                    fill
                    sizes="260px"
                    className="object-cover object-[center_22%]"
                  />
                </div>
                <div className="mt-5 text-center lg:text-left">
                  <a
                    href={AYESHA.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#2F6FB0] hover:underline"
                  >
                    CV PDF
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <SectionEyebrow>Clinical Laboratory</SectionEyebrow>
              <h2
                id="ayesha-heading"
                className="text-[#0B3450] font-bold leading-tight mb-2"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
              >
                Ayesha Imtiaz
              </h2>
              <p className="text-[#E11D48] font-semibold mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                Medical Lab Technologist
              </p>
              <p className="text-[#6B7A8D] text-sm mb-6">
                BS MLT · Hematology · Histopathology · Microbiology · Clinical Chemistry
              </p>

              <div className="space-y-4 text-[#6B7A8D] text-sm lg:text-[0.95rem] leading-relaxed mb-8">
                {AYESHA.bio.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {AYESHA.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-gray-100 bg-white px-4 py-4 text-center"
                  >
                    <div
                      className="text-[#0B3450] font-bold tabular-nums"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem' }}
                    >
                      {m.value}
                    </div>
                    <div className="text-[#6B7A8D] text-xs mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              <h3
                className="text-[#0B3450] font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Education
              </h3>
              <ul className="space-y-4 mb-8">
                {AYESHA.credentials.map((c) => (
                  <li key={c.degree} className="flex gap-4">
                    <span
                      className="shrink-0 w-12 text-[#E11D48] font-semibold text-sm tabular-nums"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {c.year}
                    </span>
                    <div>
                      <div className="text-[#0B3450] font-semibold text-sm">{c.degree}</div>
                      <div className="text-[#6B7A8D] text-xs mt-0.5">{c.place}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <h3
                className="text-[#0B3450] font-bold mb-3"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Focus areas
              </h3>
              <ul className="flex flex-wrap gap-2 mb-10">
                {AYESHA.interests.map((s) => (
                  <li
                    key={s}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#0B3450]"
                    style={{ background: 'rgba(225,29,72,0.12)' }}
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <h3
                className="text-[#0B3450] font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}
              >
                Selected highlights
              </h3>
              <ul className="space-y-4 mb-6">
                {AYESHA.highlights.map((h) => (
                  <li key={h.title} className="rounded-xl border border-gray-100 bg-white p-5">
                    <div className="text-[#0B3450] font-semibold text-sm">{h.title}</div>
                    <p className="text-[#6B7A8D] text-xs mt-1.5 leading-relaxed">{h.detail}</p>
                  </li>
                ))}
              </ul>

              <a
                href={AYESHA.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B3450] hover:text-[#164e78] transition-colors"
              >
                Download full CV
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="absolute -bottom-20 -right-20 opacity-[0.04]" aria-hidden="true">
          <MolecularGraph color="#0B3450" size={480} />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <h2
              className="section-title text-[#0B3450] mb-4"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)' }}
            >
              Work with Our Specialists
            </h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
              Need biopharmaceutical lab support, environmental analysis, chemical engineering
              research, or industrial water treatment engineering? Our team is ready to discuss
              your project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0B3450] hover:bg-[#164e78] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Contact Our Team
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-700 font-medium px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Explore Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
