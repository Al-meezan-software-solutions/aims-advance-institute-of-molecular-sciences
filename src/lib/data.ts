// ─── Brand / theme colours ───────────────────────────────────────────────────
export const UNITS_ACCENT = {
  1: { color: "#5E8C3A", label: "Agri-Biotechnology Testing",            tint: "#5E8C3A1F" },
  2: { color: "#2F6FB0", label: "Bio-Pharma Testing",                    tint: "#2F6FB01F" },
  3: { color: "#9C7349", label: "Environmental & Toxicology Testing",    tint: "#9C73491F" },
  4: { color: "#C24E72", label: "Cell Culture & Genetic Engineering",    tint: "#C24E721F" },
  5: { color: "#6750A4", label: "Bioinformatics",                        tint: "#6750A41F" },
  6: { color: "#A855F7", label: "Nano Formulation & Characterisation",  tint: "#A855F71F" },
  7: { color: "#0D9488", label: "Clinical Diagnostics",                  tint: "#0D94881F" },
} as const;

// ─── Stat bar ────────────────────────────────────────────────────────────────
export const STATS = [
  { value: "7",  label: "Research Units"        },
  { value: "45+",label: "Core Service Areas"    },
  { value: "30+",label: "Molecular Techniques"  },
  { value: "6",  label: "Research Disciplines"  },
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
    ],
  },
  {
    id: "bio-pharmaceutical",
    domain: "Bio-Pharma Testing",
    unitId: 2 as const,
    bullets: [
      "API identification and purity testing (HPLC, NMR)",
      "Dissolution and release profiling",
      "Sterility and bioburden testing",
      "Endotoxin / LAL assays",
      "Stability studies (ICH guidelines)",
      "Biological activity / potency assays",
      "Raw material and finished-product QC",
    ],
  },
  {
    id: "environmental-science",
    domain: "Environmental & Toxicology Testing",
    unitId: 3 as const,
    bullets: [
      "Water quality analysis (heavy metals, pesticides, pathogens)",
      "Air particulate and VOC monitoring",
      "Soil contamination profiling",
      "Eco-toxicology and bioassays",
      "Persistent organic pollutant (POP) screening",
      "Effluent characterisation for regulatory compliance",
      "Sediment and biotic index analysis",
    ],
  },
  {
    id: "cell-culture-genetics",
    domain: "Cell Culture & Genetic Engineering",
    unitId: 4 as const,
    bullets: [
      "Mammalian and plant cell-line establishment",
      "Recombinant protein expression and purification",
      "CRISPR/Cas9 genome editing services",
      "Transfection and viral vector production",
      "Cell viability, proliferation, and cytotoxicity assays",
      "Flow cytometry and immunophenotyping",
      "Organoid and 3-D culture models",
    ],
  },
  {
    id: "nano-formulation",
    domain: "Nano Formulation & Characterisation",
    unitId: 6 as const,
    bullets: [
      "Particle size distribution & zeta potential (DLS)",
      "Nanoparticle Tracking Analysis (NTA) for liposomes & EVs",
      "Morphological characterisation of nano-carriers",
      "Drug loading and encapsulation efficiency determination",
      "In vitro release profiling of nano-formulations",
      "Accelerated stability testing of colloidal dispersions",
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
      "Phylogenetic and comparative genomics",
      "Variant annotation and functional prediction",
      "Custom pipeline development (Snakemake / Nextflow)",
      "Data visualisation and scientific reporting",
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
    narrative: `The Bio-Pharma Testing Unit provides contract analytical and quality-control services to pharmaceutical manufacturers, biotech developers, and research hospitals across the region. Operating under a quality-management system aligned with ICH and WHO guidelines, the unit covers every phase of the product lifecycle — from raw-material qualification through finished-product release and long-term stability archiving. Our instrumentation suite supports the full spectrum of chemical, physical, and biological characterisation demanded by regulatory dossiers. The unit has particular depth in dissolution testing, where its compendial and bio-relevant media capabilities support both generic and innovator formulation development. Biological testing capabilities — sterility, mycoplasma, endotoxin — are conducted in dedicated controlled environments to ISO Class 5 or better.`,
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
    narrative: `The Bioinformatics Unit provides the computational backbone for AIMS-PAGE's sequencing-intensive research programmes and offers standalone data-analysis services to external clients generating high-throughput omics data. The unit's infrastructure — a private HPC cluster with 48 compute cores and 4 TB storage, plus cloud burst capacity — enables rapid turnaround on whole-genome, amplicon, and RNA-seq datasets. Analysts are expert in both short-read (Illumina) and long-read (Oxford Nanopore) data, applying best-practice workflows for quality control, assembly, annotation, and downstream statistical interpretation. The unit develops bespoke pipelines using Snakemake and Nextflow frameworks and maintains rigorous version control and documentation standards so that analyses are fully reproducible and audit-ready.`,
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
    title: "PCR & qPCR: Principles and Practice",
    description: "Hands-on mastery of conventional and quantitative PCR, primer design, and data interpretation.",
  },
  {
    code: "TC-02",
    title: "CRISPR-Cas9 Genome Editing",
    description: "End-to-end workshop: guide RNA design, delivery methods, efficiency screening, and off-target analysis.",
  },
  {
    code: "TC-03",
    title: "Next-Generation Sequencing Data Analysis",
    description: "Practical bioinformatics for Illumina and ONT datasets, from FASTQ to annotated variants.",
  },
  {
    code: "TC-04",
    title: "Pharmaceutical Quality Control & GMP",
    description: "Regulatory-aligned training on QC testing, documentation, and GMP compliance for pharma laboratories.",
  },
  {
    code: "TC-05",
    title: "Environmental Sampling & Analysis",
    description: "Field sampling protocols, chain-of-custody, and analytical methods for water, soil, and air matrices.",
  },
  {
    code: "TC-06",
    title: "Cell Culture Fundamentals",
    description: "Sterile technique, media preparation, cell passaging, cryopreservation, and contamination management.",
  },
  {
    code: "TC-07",
    title: "Food & Feed Safety Testing",
    description: "Mycotoxin, pesticide residue, and GMO detection methods with regulatory context for export markets.",
  },
  {
    code: "TC-08",
    title: "Bioinformatics Pipeline Development",
    description: "Workflow automation using Snakemake/Nextflow, version control, and reproducible research practices.",
  },
  {
    code: "TC-09",
    title: "Laboratory Management & Quality Systems",
    description: "ISO 17025 implementation, internal auditing, proficiency testing, and uncertainty of measurement.",
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
