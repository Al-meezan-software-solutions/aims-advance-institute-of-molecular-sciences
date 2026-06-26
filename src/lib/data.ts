// ─── Brand / theme colours ───────────────────────────────────────────────────
export const UNITS_ACCENT = {
  1: { color: "#5E8C3A", label: "Agri-Biotechnology Testing", tint: "#5E8C3A1F" },
  2: { color: "#2F6FB0", label: "Bio-Pharma Testing", tint: "#2F6FB01F" },
  3: { color: "#9C7349", label: "Environmental & Toxicology Testing", tint: "#9C73491F" },
  4: { color: "#C24E72", label: "Cell Culture & Genetic Engineering", tint: "#C24E721F" },
  5: { color: "#6750A4", label: "Bioinformatics", tint: "#6750A41F" },
  6: { color: "#A855F7", label: "Nano Formulation & Characterisation", tint: "#A855F71F" },
  7: { color: "#0D9488", label: "Clinical Diagnostics", tint: "#0D94881F" },
} as const;

// ─── Stat bar ────────────────────────────────────────────────────────────────
export const STATS = [
  { value: "7", label: "Research Units" },
  { value: "45+", label: "Core Service Areas" },
  { value: "30+", label: "Molecular Techniques" },
  { value: "6", label: "Research Disciplines" },
];

// ─── Core values ─────────────────────────────────────────────────────────────
export const CORE_VALUES = [
  {
    name: "Scientific Excellence",
    definition:
      "Upholding the highest standards of scientific rigour in every analysis, method, and report we produce.",
  },
  {
    name: "Integrity & Ethics",
    definition:
      "Conducting all research and testing with transparency, honesty, and full compliance with ethical frameworks.",
  },
  {
    name: "Innovation",
    definition:
      "Embracing emerging technologies and novel methodologies to stay at the forefront of molecular sciences.",
  },
  {
    name: "Interdisciplinary Collaboration",
    definition:
      "Bridging agriculture, pharma, environment, and informatics to generate integrated, actionable insights.",
  },
  {
    name: "Quality Assurance",
    definition:
      "Maintaining certified quality-management systems so that every result is traceable, reproducible, and reliable.",
  },
  {
    name: "Sustainability",
    definition:
      "Minimising environmental impact in laboratory operations and advancing research that supports ecosystem health.",
  },
  {
    name: "Capacity Building",
    definition:
      "Developing scientific talent through structured training and knowledge-transfer programmes.",
  },
];

// ─── Scope of services ───────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: "agri-biotechnology",
    domain: "Agri-Biotechnology Testing",
    unitId: 1 as const,
    bullets: [
      "Soil microbial diversity profiling (16S / ITS metabarcoding)",
      "Plant pathogen identification (PCR, qPCR, sequencing)",
      "GMO detection and quantification",
      "Pesticide residue analysis (GC-MS / LC-MS/MS)",
      "Seed health and viability testing",
      "Fertiliser and bio-stimulant efficacy assays",
      "Mycotoxin screening in grain and feed commodities",
      "CRISPER gene editing",
      "DNA fingerprinting",
      "Bioactive compound identification",
      "Nutritional profiling of crops",
      "Herbal formulation development"
    ],
  },
  {
    id: "bio-pharmaceutical",
    domain: "Bio-Pharma Testing",
    unitId: 2 as const,
    bullets: [
      "API identification and purity testing (HPLC, NMR)",
      "HPLC/FPLC/UV-Vis based analysis",
      "Dissolution and release profiling",
      "Sterility and bioburden testing",
      "Endotoxin / LAL assays",
      "Stability studies (ICH guidelines)",
      "Biological activity / potency assays",
      "Raw material and finished-product QC",
      "Bioavailability and pharmacokinetic studies",
      "In vitro and in vivo drug efficacy testing",
      "Vaccine and biologics research support",
      "Cosmetics and nutraceutical drug development"

    ],
  },
  {
    id: "environmental-science",
    domain: "Environmental & Toxicology Testing",
    unitId: 3 as const,
    bullets: [
      "Soil quality analysis (pH, electrical conductivity, total organic carbon)",
      "Water quality assessment (pH, conductivity, TSS, TDS, COD, BOD, minerals)",
      "Heavy metal analysis in soil, water, and environmental samples",
      "Air quality monitoring (particulate matter, carbon monoxide, nitrate, ozone)",
      "Microplastic detection and characterization",
      "Organic pollutant screening (PAHs, PCBs, HCHs)",
      "Persistent organic pollutant (POP) identification and monitoring",
      "Sediment and environmental matrix analysis",
      "Eco-toxicology and environmental bioassays",
      "Environmental contamination profiling and risk assessment",
      "Effluent characterization for regulatory compliance",
      "Analytical testing and environmental monitoring for research, industry, and regulatory applications",
    ],
  },
  {
    id: "cell-culture-genetics",
    domain: "Cell Culture & Genetic Engineering",
    unitId: 4 as const,
    bullets: [
      "Mammalian cell-line establishment",
      "Recombinant protein expression and purification",
      "CRISPR/Cas9 genome editing services",
      "Transfection and viral vector production",
      "Cell viability, proliferation, and cytotoxicity assays",
      "Flow cytometry and immunophenotyping",
      "DNA/RNA extraction and purification ",
      "Gene cloning and recombinant DNA technology",
      "Protein expression analysis (Western blot analysis)",
      "Stem cells",
      "Exosomes",
      "Target-specific cell antigen (downstream processing)",
      "Sanger sequencing, DNA barcoding, mutation profiling, SNPs, AFLP",
      "Gene expression analysis (Conventional PCR, qPCR)"
    ],
  },
  {
    id: "nano-formulation",
    domain: "Nano Formulation & Characterisation",
    unitId: 6 as const,
    bullets: [
      "Particle size distribution & zeta potential (DLS)",
      "Nanoparticle Tracking Analysis (NTA) for liposomes & EVs",
      "Nanoparticle Size & Morphology Analysis (TEM/SEM)",
      "Drug loading and encapsulation efficiency determination",
      "In vitro release profiling of nano-formulations",
      "Accelerated stability testing of colloidal dispersions",
      "Functional Group Characterisation (FTIR Spectroscopy)",
      "Crystallinity & Structural Analysis (XRD)",
      "Spectroscopic Characterisation of Drug–Carrier Interaction (UV–Vis/FTIR)",
      "DSC/TGA"
    ],
  },
  {
    id: "bioinformatics",
    domain: "Bioinformatics",
    unitId: 5 as const,
    bullets: [
      "Whole-genome and targeted sequencing data analysis",
      "Transcriptomics (RNA-seq differential expression)",
      "Metagenomic community profiling",
      "Virtual Screening (Identification of Lead Compounds)",
      "Variant annotation and functional prediction",
      "Data visualisation and scientific reporting",
      "Molecular docking (Peptide/Phytocompounds)",
      "Network pharmacology",
      "MD simulation",
      "Insilico Vaccine Desgining",
      "DFT (Density Funcational Theory)",
      "Machine learning–based biomarker discovery,  disease prediction and drug desgining",
    ],
  },
  {
    id: "clinical-diagnosis",
    domain: "Clinical Diagnostics",
    unitId: 7 as const,
    bullets: [
      "Molecular pathogen detection (viral, bacterial, fungal)",
      "Genetic predisposition screening assays",
      "Polymerase chain reaction (PCR & qPCR) diagnostics",
      "Biomarker identification and quantification",
      "Serological & ELISA immunological profiling",
      "Quality control and validation of custom molecular assays",
    ],
  },
];

// ─── Research units ──────────────────────────────────────────────────────────
export const RESEARCH_UNITS = [
  {
    id: 1 as const,
    name: "Agri-Biotechnology Testing Unit",
    shortName: "Agri-Biotech",
    narrative: `The Agri-Biotechnology Testing Unit serves as AIMS-PAGE's primary interface with the agricultural sector, offering a comprehensive analytical platform that spans from soil ecology to harvest-ready commodity safety. Our work addresses critical challenges in modern food production: ensuring seed purity, detecting emerging crop pathogens before they spread, verifying compliance with GMO regulations, and quantifying pesticide burdens in the food chain. Working closely with regulatory bodies, farming enterprises, and agri-input suppliers, this unit translates complex molecular data into decisions that protect both yield and public health. A dedicated mycotoxin programme covers the full analytical workflow from field sampling through LC-MS/MS confirmation, supporting export certification and domestic food safety standards.`,
    capabilities: [
      "Molecular identification of fungal, bacterial, and viral crop pathogens",
      "Quantitative GMO detection by digital droplet PCR (ddPCR)",
      "Multi-residue pesticide panels — 200+ compounds by GC-MS/MS and LC-MS/MS",
      "Aflatoxin, ochratoxin, and fumonisins by LC-MS/MS",
      "Soil health index: nematode profiling, nitrogen-cycle gene quantification",
      "Bio-stimulant and biofertiliser efficacy trials under controlled conditions",
      "Seed pathology: blotter, freeze-blotter, and embryo-count methods",
    ],
  },
  {
    id: 2 as const,
    name: "Bio-Pharma Testing Unit",
    shortName: "Bio-Pharma",
    narrative: `Biopharmaceutical Research and Development Unit provides integrated services in drug discovery, formulation, development, and analytical characterization of pharmaceutical, biopharmaceutical, herbal, cosmetic, and nutraceutical products. The unit specializes in formulation optimization, stability testing, quality evaluation, and bioanalytical method development using advanced platforms such as HPLC, FPLC, UV–Visible Spectrophotometry, FTIR, and DSC. It also conducts in vitro and in vivo pharmacological studies, protein purification, biomolecule characterization, and research in biologics, vaccines, and targeted drug delivery. By supporting preclinical evaluation and regulatory compliance, the unit advances the development of safe, effective, and high-quality healthcare products.`,
    capabilities: [
      "HPLC / UHPLC-UV and fluorescence for assay and purity",
      "LC-MS/MS for trace impurity profiling and metabolite identification",
      "Compendial and bio-relevant dissolution (USP, BP, Ph.Eur.)",
      "Bacterial endotoxin testing (LAL: gel-clot, turbidimetric, chromogenic)",
      "14-day sterility testing with isolator technology",
      "ICH stability: accelerated, intermediate, and long-term chambers",
      "Biological potency assays: ELISA, cell-based neutralisation, SPR",
    ],
  },
  {
    id: 3 as const,
    name: "Environmental & Toxicology Testing Unit",
    shortName: "Env. & Tox.",
    narrative: `The Environmental & Toxicology Testing Unit addresses the growing need for authoritative environmental monitoring data in the face of accelerating industrialisation and climate disruption. The unit operates a network of sample-collection protocols for water (potable, surface, groundwater, effluent), soil, sediment, and ambient air, backed by accredited analytical methods for over 150 regulated parameters. Beyond routine compliance testing, the unit conducts ecotoxicological investigations — bioassays using Daphnia, algae, and earthworm models — to assess the sub-lethal impacts of industrial discharges and agricultural runoff. A dedicated persistent organic pollutants (POPs) programme employs high-resolution GC-HRMS to detect legacy contaminants and emerging chemical threats at ultra-trace levels relevant to regulatory trigger values.`,
    capabilities: [
      "ICP-MS for 40+ trace metals in water, soil, and biota",
      "GC-HRMS for POPs: PCBs, dioxins, furans, PFAS",
      "Microbiological water quality: total coliforms, E. coli, Enterococci",
      "LC-MS/MS pesticide and pharmaceutical residues in environmental matrices",
      "Acute and chronic bioassays (Daphnia magna, Raphidocelis, Eisenia fetida)",
      "Particulate matter (PM2.5 / PM10) gravimetric and chemical speciation",
      "EIA support: baseline surveys, impact modelling, mitigation tracking",
    ],
  },
  {
    id: 4 as const,
    name: "Cell Culture & Genetic Engineering Unit",
    shortName: "Cell & Gene",
    narrative: `The Cell Culture & Genetic Engineering Unit represents AIMS-PAGE's most advanced translational research capability, bridging fundamental cell biology with applied biotechnology and next-generation therapeutic development. The unit houses BSL-2-rated primary and established cell-culture facilities equipped for mammalian, insect, and plant cell systems. Gene-editing services — anchored by an optimised CRISPR/Cas9 workflow validated across multiple cell types — are supported by molecular confirmation (Sanger, next-generation sequencing) and functional phenotyping. The unit collaborates with pharmaceutical and agricultural clients to produce recombinant proteins, validate biosimilar candidates, and develop model systems for toxicology screening, reducing reliance on animal models and accelerating compound triage.`,
    capabilities: [
      "BSL-2 mammalian cell culture: HEK293, CHO, HeLa, primary cultures",
      "CRISPR/Cas9 knock-out, knock-in, and base-editing services",
      "Lentiviral and adeno-associated viral (AAV) vector production",
      "Recombinant protein expression: bacterial, yeast, and baculovirus systems",
      "Multiparameter flow cytometry (16-colour capable)",
      "3-D spheroid and organoid culture for drug efficacy studies",
      "Cytotoxicity panel: MTT, LDH, Annexin V / PI apoptosis",
    ],
  },
  {
    id: 6 as const,
    name: "Nano Formulation & Characterisation Unit",
    shortName: "Nano Form.",
    narrative: `The Nano Formulation & Characterisation Unit addresses the frontiers of drug delivery and nanotechnology, helping partners formulate, optimize, and characterize nanostructured materials. From lipid nanoparticles (LNPs) and liposomes to polymeric nanoparticles and nano-emulsions, we provide robust analytical workflows to assess stability, morphology, and release kinetics. The unit specializes in Dynamic Light Scattering (DLS) and Nanoparticle Tracking Analysis (NTA) for direct size distribution and zeta potential measurements. In addition, we design custom encapsulation studies to optimize the loading and release profiles of sensitive biomolecules, ensuring their therapeutic efficiency.`,
    capabilities: [
      "Particle size distribution and zeta potential analysis (DLS)",
      "Nanoparticle Tracking Analysis (NTA) for colloidal suspensions",
      "Encapsulation efficiency and drug loading profiling of nano-carriers",
      "In vitro release profiling and membrane diffusion studies",
      "Stability studies for colloidal and nano-suspensions (ICH-aligned)",
    ],
  },
  {
    id: 5 as const,
    name: "Bioinformatics Unit",
    shortName: "Bioinformatics",
    narrative: `The Bioinformatics Unit provides the computational backbone for AIMS-PAGE's sequencing-intensive research programmes and offers standalone data-analysis services to external clients generating high-throughput omics data. AIMS-PAGE provides advanced in silico drug design and computational biology services to support modern pharmaceutical and biomedical research. The unit specializes in DNA/RNA sequence analysis, protein structure prediction, molecular docking, virtual screening, and ADMET profiling for drug discovery applications. Using Python/R-based bioinformatics tools, automation pipelines, and machine learning approaches, the facility enables biomarker discovery, disease prediction, and biological network analysis. Our services are designed to accelerate rational drug design, reduce experimental cost, and support innovative, data-driven therapeutic development`,
    capabilities: [
      "Short-read (Illumina) WGS: assembly, annotation, SNP/indel calling",
      "Long-read (ONT) assembly and structural variant detection",
      "16S/ITS/18S amplicon diversity analysis (QIIME 2, DADA2)",
      "Differential expression: DESeq2, edgeR, limma-voom",
      "Pathway and gene-ontology enrichment (GSEA, clusterProfiler)",
      "Molecular phylogenetics: IQ-TREE, BEAST, RAxML",
      "Custom Snakemake / Nextflow pipeline development and containerisation",
    ],
  },
  {
    id: 7 as const,
    name: "Clinical Diagnostics Unit",
    shortName: "Diagnostics",
    narrative: `The Clinical Diagnostics Unit offers state-of-the-art molecular diagnostic testing services, focusing on high-accuracy pathogen identification, genetic screening, and biomarker profiling. Utilizing advanced real-time PCR, DNA sequencing, and multiplex immunological profiling, the unit delivers trace-level detection of viral, bacterial, and fungal agents. Working under strict quality standards, we support clinical trials, epidemiological studies, and specialized screening applications, providing the molecular precision needed for early detection and therapeutic monitoring.`,
    capabilities: [
      "Multiplex real-time PCR for rapid pathogen detection panels",
      "Genetic predisposition testing and mutation profiling (Sanger / NGS)",
      "Serological profiling and biomarker quantification (ELISA / multiplex)",
      "Molecular assay design, validation, and optimization",
      "High-throughput screening platforms with certified quality assurance",
    ],
  },
];

// ─── Training courses ─────────────────────────────────────────────────────────
export const TRAINING_COURSES = [
  {
    code: "TC-01",
    title: "Biochemistry & Clinical Laboratory Techniques",
    description: "Essential methodologies for clinical biochemistry, spectrophotometric analysis, enzymology, and diagnostic biomarker assays.",
  },
  {
    code: "TC-02",
    title: "Molecular Biology & PCR-Based Diagnostics",
    description: "Hands-on instruction in nucleic acid amplification, conventional and real-time qPCR validation, and clinical diagnostics screening.",
  },
  {
    code: "TC-03",
    title: "Cell Culture & Flow Cytometry Applications",
    description: "Sterile culture workflows, media preparation, cellular transfection, immunophenotyping, and high-throughput flow cytometric analysis.",
  },
  {
    code: "TC-04",
    title: "Genomics & DNA Sequencing Analysis",
    description: "From library prep to alignment: instruction in Sanger sequencing, DNA barcoding, metagenomics, and next-generation sequencing analysis.",
  },
  {
    code: "TC-05",
    title: "Bioinformatics",
    description: "Sequence analysis, biological database mining, homology modeling, network pharmacology, molecular docking, and phylogenetic trees.",
  },
  {
    code: "TC-06",
    title: "Protein Purification & Chromatography Techniques",
    description: "Practical FPLC and HPLC operation, size-exclusion, ion-exchange, affinity chromatography, and downstream protein validation.",
  },
  {
    code: "TC-07",
    title: "Nanotechnology & Drug Delivery Systems",
    description: "Synthesis and characterization of nano-formulations, lipid nanoparticles, particle-size profiling, and in vitro release analysis.",
  },
  {
    code: "TC-08",
    title: "Gene Cloning & Genetic Engineering",
    description: "Restriction digestion, vector design, ligation, plasmid extraction, bacterial transformation, and recombinant selection validation.",
  },
  {
    code: "TC-09",
    title: "Machine Learning in Life Sciences",
    description: "Application of predictive modeling, biomarker discovery, and deep learning algorithms to genomic, chemical, and drug design datasets.",
  },
  {
    code: "TC-10",
    title: "Biosafety & Laboratory Safety Guidelines",
    description: "Comprehensive training on BSL-2/BSL-3 protocols, chemical hygiene, waste disposal, personal protective equipment (PPE), and emergency response.",
  },
];

// ─── Instruments ─────────────────────────────────────────────────────────────
export const INSTRUMENT_GROUPS = [
  {
    group: "Chromatography & Mass Spectrometry",
    instruments: [
      "LC-MS/MS (triple-quadrupole) — pesticide, mycotoxin, pharmaceutical residues",
      "GC-MS/MS — volatile organics, POPs, fatty acid methyl esters",
      "GC-HRMS (Orbitrap) — dioxins, furans, PFAS at ultra-trace levels",
      "UHPLC-UV/DAD — API assay, purity, dissolution profiling",
      "HPLC-FLD — aflatoxin, fluorescent analytes",
      "Ion chromatography — anions, cations, organic acids",
    ],
  },
  {
    group: "Molecular Biology & Genomics",
    instruments: [
      "Real-time PCR (qPCR) — 96-well thermocycler, dual-block configuration",
      "Digital droplet PCR (ddPCR) — absolute quantification of GMO, rare variants",
      "Next-generation sequencer (Illumina short-read)",
      "Oxford Nanopore MinION / GridION — long-read sequencing, portable genomics",
      "Automated DNA/RNA extraction platform",
      "BioAnalyzer / TapeStation — nucleic acid and protein fragment analysis",
    ],
  },
  {
    group: "Spectroscopy & Elemental Analysis",
    instruments: [
      "ICP-MS — 40+ trace elements in environmental and biological matrices",
      "ICP-OES — major and minor elements, nutrient panels",
      "Atomic absorption spectrophotometer (flame / graphite furnace)",
      "UV-Vis spectrophotometer — quantitative and kinetic assays",
      "FTIR spectrometer — raw material ID, polymer characterisation",
    ],
  },
  {
    group: "Cell Biology & Immunology",
    instruments: [
      "16-colour multiparameter flow cytometer",
      "CO₂ incubators (BSL-2 certified, multiple units)",
      "Fluorescence and phase-contrast inverted microscope",
      "ELISA plate reader (absorbance / fluorescence / luminescence)",
      "BioSafety Cabinet Class II A2 (×3)",
      "Ultra-low temperature freezer (−80 °C, 500 L capacity)",
      "Nanoparticle tracking analyser (NTA) — EV and liposome sizing",
    ],
  },
];
