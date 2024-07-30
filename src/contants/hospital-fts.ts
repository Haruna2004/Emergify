export type HospTreat = {
  category: string;
  treatments: {
    title: string;
    value: string;
    selected?: boolean;
  }[];
};

export const hospital_treatment: HospTreat[] = [
  {
    category: "Endocrinology",
    treatments: [
      { title: "ACTH Stimulation Tests", value: "acth-stimulation-tests" },
      { title: "Anaemia", value: "anaemia" },
      { title: "Diabetes", value: "diabetes" },
      { title: "Gestational diabetes", value: "gestational-diabetes" },
      {
        title: "Infertility and reproductive endocrinology",
        value: "infertility-and-reproductive-endocrinology",
      },
      { title: "Juvenile Diabetes", value: "juvenile-diabetes" },
      { title: "PCOD", value: "pcod" },
      { title: "Type 2 Diabetes", value: "type-2-diabetes" },
    ],
  },
  {
    category: "Emergency Medicine",
    treatments: [
      { title: "Cardiac Arrest", value: "cardiac-arrest" },
      { title: "Heart Attack", value: "heart-attack" },
      { title: "Stroke", value: "stroke" },
      { title: "Trauma Care", value: "trauma-care" },
    ],
  },
  {
    category: "Cardiology",
    treatments: [
      { title: "2D/ 3D ECHO", value: "2d-3d-echo" },
      { title: "Angiography/ Angioplasty", value: "angiography-angioplasty" },
      { title: "Arrhythmia", value: "arrhythmia" },
      { title: "Beating Heart Surgery", value: "beating-heart-surgery" },
      { title: "Bentall Procedure", value: "bentall-procedure" },
      {
        title: "BIMA - Bilateral Internal Mammary Artery",
        value: "bima--bilateral-internal-mammary-artery",
      },
      { title: "Cardiovascular Surgery", value: "cardiovascular-surgery" },
      {
        title: "Coronary Artery Bypass Grafting",
        value: "coronary-artery-bypass-grafting",
      },
      {
        title: "Electrophysiology-Heart Rhythm Disorders",
        value: "electrophysiologyheart-rhythm-disorders",
      },
      { title: "Heart Transplant", value: "heart-transplant" },
      {
        title: "Heart Valve Surgery - Valve Repair, Valve Replacement",
        value: "heart-valve-surgery--valve-repair-valve-replacement",
      },
      { title: "Holter monitoring", value: "holter-monitoring" },
      {
        title: "Implantable Heart Devices - ICD, Pacemaker",
        value: "implantable-heart-devices--icd-pacemaker",
      },
      { title: "LVAD", value: "lvad" },
      {
        title: "Minimally Invasive Cardiac Surgery",
        value: "minimally-invasive-cardiac-surgery",
      },
      { title: "Open Heart Surgery", value: "open-heart-surgery" },
      { title: "Pulmonary Hypertension", value: "pulmonary-hypertension" },
      {
        title: "Stent Less Heart Valve Surgeries",
        value: "stent-less-heart-valve-surgeries",
      },
      { title: "Stenting", value: "stenting" },
      {
        title: "Structural Heart Diseases",
        value: "structural-heart-diseases",
      },
      { title: "TAVR/TAVI", value: "tavrtavi" },
    ],
  },
  {
    category: "Oncology",
    treatments: [
      { title: "Bladder Cancer", value: "bladder-cancer" },
      { title: "Bone & Soft Tissue Cancer", value: "bone--soft-tissue-cancer" },
      {
        title: "Brain and Spinal Cord Cancer",
        value: "brain-and-spinal-cord-cancer",
      },
      { title: "Breast Cancer", value: "breast-cancer" },
      { title: "Cervical Cancer", value: "cervical-cancer" },
      {
        title: "Colorectal Cancer/ Colon Cancer",
        value: "colorectal-cancer-colon-cancer",
      },
      { title: "Esophageal Cancer", value: "esophageal-cancer" },
      {
        title: "Gastrointestinal Oncology",
        value: "gastrointestinal-oncology",
      },
      { title: "Gynaecologic Oncology", value: "gynaecologic-oncology" },
      { title: "Head and Neck Oncology", value: "head-and-neck-oncology" },
      { title: "Leukaemia", value: "leukaemia" },
      { title: "Liver Cancer", value: "liver-cancer" },
      { title: "Lung Cancer", value: "lung-cancer" },
      { title: "Ovarian Cancer", value: "ovarian-cancer" },
      { title: "Paediatric Oncology", value: "paediatric-oncology" },
      { title: "Pancreas Cancer", value: "pancreas-cancer" },
      { title: "Prostate Cancer", value: "prostate-cancer" },
      { title: "Skin Cancer", value: "skin-cancer" },
      {
        title: "Therapeutic & Diagnostic Oncology Interventions",
        value: "therapeutic--diagnostic-oncology-interventions",
      },
      { title: "Urological Cancers", value: "urological-cancers" },
      { title: "Uterine Cancer", value: "uterine-cancer" },
    ],
  },
  {
    category: "Neurology",
    treatments: [
      { title: "Cognitive Disorders", value: "cognitive-disorders" },
      { title: "Dementia", value: "dementia" },
      { title: "Epilepsy Surgery", value: "epilepsy-surgery" },
      { title: "Fits/Seizures", value: "fitsseizures" },
      { title: "Migraine & Headache", value: "migraine--headache" },
      { title: "Movement Disorders", value: "movement-disorders" },
      { title: "Multiple Sclerosis", value: "multiple-sclerosis" },
      { title: "Neuro Oncology", value: "neuro-oncology" },
      { title: "Parkinsons Disease", value: "parkinsons-disease" },
      { title: "Stroke Management", value: "stroke-management" },
      { title: "Vertigo", value: "vertigo" },
    ],
  },
  {
    category: "Orthopedics",
    treatments: [
      { title: "Arthritis", value: "arthritis" },
      { title: "Back Pain", value: "back-pain" },
      { title: "Disc Herniation", value: "disc-herniation" },
      { title: "Hip Replacement", value: "hip-replacement" },
      { title: "Joint Replacement", value: "joint-replacement" },
      { title: "Knee Replacement", value: "knee-replacement" },
      {
        title: "Minimal Invasive Spine Surgery",
        value: "minimal-invasive-spine-surgery",
      },
      { title: "Neck & Back Pain", value: "neck--back-pain" },
      { title: "Orthopaedic Oncology", value: "orthopaedic-oncology" },
      {
        title: "Orthopaedic related diabetic complications",
        value: "orthopaedic-related-diabetic-complications",
      },
      { title: "Osteoporosis", value: "osteoporosis" },
      { title: "Shoulder Replacement", value: "shoulder-replacement" },
      { title: "Spinal Stenosis", value: "spinal-stenosis" },
      { title: "Spondylitis", value: "spondylitis" },
      { title: "Scoliosis", value: "scoliosis" },
      { title: "Tennis Elbow", value: "tennis-elbow" },
    ],
  },
  {
    category: "Gastroenterology",
    treatments: [
      { title: "Colonoscopy", value: "colonoscopy" },
      { title: "Endoscopy", value: "endoscopy" },
      { title: "Enteroscopy", value: "enteroscopy" },
      { title: "ERC & MRCP", value: "erc--mrcp" },
      { title: "Gastrostomy", value: "gastrostomy" },
      { title: "Intestine Diseases", value: "intestine-diseases" },
      {
        title: "Liver and Bile Duct Diseases",
        value: "liver-and-bile-duct-diseases",
      },
      { title: "Pancreatic Disease", value: "pancreatic-disease" },
    ],
  },
  {
    category: "Pulmonology",
    treatments: [
      { title: "Asthma", value: "asthma" },
      {
        title: "Endobronchial Ultrasound (EBUS)",
        value: "endobronchial-ultrasound-ebus",
      },
      {
        title: "Pneumonia and Tuberculosis",
        value: "pneumonia-and-tuberculosis",
      },
      { title: "Pulmonary Embolism", value: "pulmonary-embolism" },
      { title: "Pulmonary Hypertension", value: "pulmonary-hypertension" },
    ],
  },
  {
    category: "Nephrology",
    treatments: [
      { title: "Acute Renal Failure", value: "acute-renal-failure" },
      { title: "CAPD Catheter Insertion", value: "capd-catheter-insertion" },
      { title: "Dialysis", value: "dialysis" },
      { title: "Kidney Stone Removal", value: "kidney-stone-removal" },
      { title: "Kidney Transplant", value: "kidney-transplant" },
      { title: "Paediatric Nephrology", value: "paediatric-nephrology" },
      { title: "Renal Artery Stenosis", value: "renal-artery-stenosis" },
      { title: "Renal Biopsy", value: "renal-biopsy" },
    ],
  },
  {
    category: "Urology",
    treatments: [
      { title: "Female Urology", value: "female-urology" },
      { title: "Male Infertility", value: "male-infertility" },
      { title: "Paediatric Urology", value: "paediatric-urology" },
      { title: "UTI", value: "uti" },
    ],
  },
  {
    category: "Pediatrics",
    treatments: [
      { title: "Advanced NICU and PICU", value: "advanced-nicu-and-picu" },
      {
        title: "Development and Behavioural Paediatrics",
        value: "development-and-behavioural-paediatrics",
      },
      {
        title: "Paediatric Cardiac Surgery",
        value: "paediatric-cardiac-surgery",
      },
      { title: "Paediatric Cardiology", value: "paediatric-cardiology" },
      { title: "Paediatric ENT", value: "paediatric-ent" },
      {
        title: "Paediatric Gastroenterology",
        value: "paediatric-gastroenterology",
      },
      {
        title: "Paediatric Liver Transplant",
        value: "paediatric-liver-transplant",
      },
      { title: "Paediatric Nephrology", value: "paediatric-nephrology" },
      { title: "Paediatric Neurology", value: "paediatric-neurology" },
      { title: "Paediatric Neurosurgery", value: "paediatric-neurosurgery" },
      { title: "Paediatric Oncology", value: "paediatric-oncology" },
      { title: "Paediatric Pulmonology", value: "paediatric-pulmonology" },
      { title: "Paediatric Urology", value: "paediatric-urology" },
    ],
  },
  {
    category: "Plastic Surgery",
    treatments: [
      { title: "Axilla Bulge Correction", value: "axilla-bulge-correction" },
      { title: "Blepharoplasty", value: "blepharoplasty" },
      { title: "Breast Augmentation", value: "breast-augmentation" },
      { title: "Breast Reduction", value: "breast-reduction" },
      { title: "Chin and Cheek Implants", value: "chin-and-cheek-implants" },
      { title: "Dimple Creation", value: "dimple-creation" },
      { title: "Facial Nerve Repair", value: "facial-nerve-repair" },
      { title: "Fat Augmentation", value: "fat-augmentation" },
      { title: "Lip Reduction", value: "lip-reduction" },
      {
        title: "Liposuction and Liposculpting",
        value: "liposuction-and-liposculpting",
      },
      { title: "Male Breast Reduction", value: "male-breast-reduction" },
      { title: "Mommy Makeover", value: "mommy-makeover" },
      { title: "Nose Correction", value: "nose-correction" },
      { title: "Otoplasty", value: "otoplasty" },
      {
        title: "Reconstruction of Middle and External Ear Structures",
        value: "reconstruction-of-middle-and-external-ear-structures",
      },
      { title: "Tummy Tuck", value: "tummy-tuck" },
    ],
  },
  {
    category: "Gynecology",
    treatments: [
      {
        title: "Congenital Anomaly of Uterus",
        value: "congenital-anomaly-of-uterus",
      },
      { title: "Endometriosis", value: "endometriosis" },
      {
        title: "Family Planning & Contraception",
        value: "family-planning--contraception",
      },
      { title: "High Risk Pregnancy", value: "high-risk-pregnancy" },
      { title: "Hysteroscopy", value: "hysteroscopy" },
      {
        title: "Infertility and reproductive endocrinology",
        value: "infertility-and-reproductive-endocrinology",
      },
      { title: "Menopause", value: "menopause" },
      {
        title: "Normal & Instrumental Delivery",
        value: "normal--instrumental-delivery",
      },
      { title: "Uterine Fibroids", value: "uterine-fibroids" },
      { title: "Vaginal Descent", value: "vaginal-descent" },
    ],
  },
  {
    category: "Ophthalmology",
    treatments: [
      { title: "Cataract Surgery", value: "cataract-surgery" },
      { title: "Corneal Transplant", value: "corneal-transplant" },
      { title: "Diabetic Retinopathy", value: "diabetic-retinopathy" },
      { title: "Glaucoma", value: "glaucoma" },
      { title: "LASIK Surgery", value: "lasik-surgery" },
      { title: "Oculoplastic Surgery", value: "oculoplastic-surgery" },
      { title: "Retinal Detachment", value: "retinal-detachment" },
      { title: "Vitrectomy Surgery", value: "vitrectomy-surgery" },
    ],
  },
  {
    category: "Dermatology",
    treatments: [
      { title: "Acne Treatment", value: "acne-treatment" },
      { title: "Eczema", value: "eczema" },
      { title: "Hair Loss Treatment", value: "hair-loss-treatment" },
      { title: "Psoriasis", value: "psoriasis" },
      { title: "Skin Cancer", value: "skin-cancer" },
      { title: "Vitiligo", value: "vitiligo" },
    ],
  },
  {
    category: "Radiology",
    treatments: [
      { title: "CT Scan", value: "ct-scan" },
      { title: "MRI", value: "mri" },
      { title: "Ultrasound", value: "ultrasound" },
      { title: "X-ray", value: "xray" },
    ],
  },
  {
    category: "Rheumatology",
    treatments: [
      { title: "Arthritis", value: "arthritis" },
      { title: "Lupus", value: "lupus" },
      { title: "Rheumatoid Arthritis", value: "rheumatoid-arthritis" },
      { title: "Scleroderma", value: "scleroderma" },
    ],
  },
  {
    category: "Psychiatry",
    treatments: [
      { title: "Alzheimer Disease", value: "alzheimer-disease" },
      { title: "Anxiety Disorders", value: "anxiety-disorders" },
      { title: "Bipolar Disorder", value: "bipolar-disorder" },
      { title: "Depression", value: "depression" },
      { title: "Schizophrenia", value: "schizophrenia" },
    ],
  },
  {
    category: "General Surgery",
    treatments: [
      { title: "Appendectomy", value: "appendectomy" },
      { title: "Gallbladder Removal", value: "gallbladder-removal" },
      { title: "Hernia Repair", value: "hernia-repair" },
      { title: "Thyroid Surgery", value: "thyroid-surgery" },
    ],
  },
];

export type HospSpec = {
  value: string;
  title: string;
  selected?: boolean;
};

export const hospital_specs = [
  {
    title: "Anaesthesiology",
    value: "anaesthesiology",
  },
  {
    title: "Arthroscopy & Sports Medicine",
    value: "arthroscopy--sports-medicine",
  },
  {
    title: "Bone Marrow Transplant",
    value: "bone-marrow-transplant",
  },
  {
    title: "Cardiac Surgery",
    value: "cardiac-surgery",
  },
  {
    title: "Cardiology",
    value: "cardiology",
  },
  {
    title: "Critical Care Medicine",
    value: "critical-care-medicine",
  },
  {
    title: "Dentistry",
    value: "dentistry",
  },
  {
    title: "Dermatology",
    value: "dermatology",
  },
  {
    title: "Dietetics & Nutrition",
    value: "dietetics--nutrition",
  },
  {
    title: "Emergency Medicine",
    value: "emergency-medicine",
  },
  {
    title: "Endocrinology",
    value: "endocrinology",
  },
  {
    title: "ENT",
    value: "ent",
  },
  {
    title: "Gastroenterology Surgical",
    value: "gastroenterology-surgical",
  },
  {
    title: "Gastroenterology Medical",
    value: "gastroenterology-medical",
  },
  {
    title: "General Medicine/Internal Medicine",
    value: "general-medicineinternal-medicine",
  },
  {
    title: "General Surgery",
    value: "general-surgery",
  },
  {
    title: "Geriatrics",
    value: "geriatrics",
  },
  {
    title: "Haematology",
    value: "haematology",
  },
  {
    title: "Interventional Radiology",
    value: "interventional-radiology",
  },
  {
    title: "Lab Medicine",
    value: "lab-medicine",
  },
  {
    title: "Laparoscopic and Bariatric Surgery",
    value: "laparoscopic-and-bariatric-surgery",
  },
  {
    title: "Liver Transplantation and Hepatobiliary Surgery",
    value: "liver-transplantation-and-hepatobiliary-surgery",
  },
  {
    title: "Medical Oncology",
    value: "medical-oncology",
  },
  {
    title: "Minimal Access Surgery",
    value: "minimal-access-surgery",
  },
  {
    title: "Neonatology",
    value: "neonatology",
  },
  {
    title: "Nephrology",
    value: "nephrology",
  },
  {
    title: "Neurology",
    value: "neurology",
  },
  {
    title: "Neurosurgery",
    value: "neurosurgery",
  },
  {
    title: "Nuclear Medicine",
    value: "nuclear-medicine",
  },
  {
    title: "Ophthalmology",
    value: "ophthalmology",
  },
  {
    title: "Orthopaedics",
    value: "orthopaedics",
  },
  {
    title: "Paediatric Cardiac Surgery",
    value: "paediatric-cardiac-surgery",
  },
  {
    title: "Paediatric Cardiology",
    value: "paediatric-cardiology",
  },
  {
    title: "Paediatric Neurology",
    value: "paediatric-neurology",
  },
  {
    title: "Paediatric Neurosurgery",
    value: "paediatric-neurosurgery",
  },
  {
    title: "Paediatric Surgery",
    value: "paediatric-surgery",
  },
  {
    title: "Paediatric Urology",
    value: "paediatric-urology",
  },
  {
    title: "Paediatrics",
    value: "paediatrics",
  },
  {
    title: "Physiotherapy & Rehabilitation",
    value: "physiotherapy--rehabilitation",
  },
  {
    title: "Plastic Surgery",
    value: "plastic-surgery",
  },
  {
    title: "Psychiatry",
    value: "psychiatry",
  },
  {
    title: "Pulmonology",
    value: "pulmonology",
  },
  {
    title: "Radiation Oncology",
    value: "radiation-oncology",
  },
  {
    title: "Radiology",
    value: "radiology",
  },
  {
    title: "Renal Transplant",
    value: "renal-transplant",
  },
  {
    title: "Rheumatology",
    value: "rheumatology",
  },
  {
    title: "Spine Surgery",
    value: "spine-surgery",
  },
  {
    title: "Surgical Oncology",
    value: "surgical-oncology",
  },
  {
    title: "Urology",
    value: "urology",
  },
  {
    title: "Vascular & Endovascular Surgery",
    value: "vascular--endovascular-surgery",
  },
  {
    title: "Vascular & Interventional Radiology",
    value: "vascular--interventional-radiology",
  },
  {
    title: "Vascular Surgery",
    value: "vascular-surgery",
  },
  {
    title: "Woman & Child Institute",
    value: "woman--child-institute",
  },
];
