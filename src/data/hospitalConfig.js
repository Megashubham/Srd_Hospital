export const hospitalConfig = {
  name: "SRD Hospital",
  fullName: "SRD Neuropsychiatry & Dental Hospital",
  tagline: "Compassionate Care. Better Health.",

  location: {
    address: "Panchwati & Park Main Gate Ke Samne (Park Me Shiv Ji Ki Murti Ke Samne Wali Line Me) Honda Agency Ke Paas, Pilani, Rajasthan",
    city: "Pilani",
    state: "Rajasthan",
    country: "India",
    googleMapsUrl: "https://share.google/riG1dLJ6oT8mvHwTZ"
  },

  contact: {
    phone: "9680981436, 8107776253",
    whatsapp: "919680981436",
    email: "contact@srdhospital.com"
  },

  timings: {
    monday: "10:00 AM - 8:00 PM",
    tuesday: "10:00 AM - 8:00 PM",
    wednesday: "10:00 AM - 8:00 PM",
    thursday: "10:00 AM - 8:00 PM",
    friday: "10:00 AM - 8:00 PM",
    saturday: "10:00 AM - 8:00 PM",
    sunday: "10:00 AM - 8:00 PM"
  },

  social: {
    instagram: "https://www.instagram.com/srd_hospital/?hl=en",
    facebook: "https://www.facebook.com/srd.hospital/",
    youtube: ""
  },
  
  services: [
    {
      id: "neuropsychiatry",
      title: "Mental Health & Psychiatry",
      description: "मनोचिकित्सा एवं मनोरोग सुविधाएं",
      icon: "brain",
      facilities: [
        "सिज़ोफ्रेनिया (Schizophrenia)",
        "ओसीडी (OCD – Obsessive Compulsive Disorder)",
        "सोमेटोफॉर्म डिसऑर्डर (Somatoform Disorder)",
        "बीमारी चिंता विकार (Illness Anxiety Disorder)",
        "डिसोसिएटिव डिसऑर्डर / हिस्टीरिया (Hysteria)",
        "डिसोसिएटिव डिसऑर्डर (ट्रांस एवं पजेशन)",
        "एंग्जायटी डिसऑर्डर (Anxiety Disorder)",
        "नशे की लत (Addiction)",
        "साइकोसेक्सुअल डिसऑर्डर (Psychosexual Disorder)",
        "उन्माद / मेनिया (Mania)"
      ]
    },
    {
      id: "dental",
      title: "Dental Facilities",
      description: "दंत एवं मुख रोग सुविधाएं",
      icon: "smile",
      facilities: [
        "Digital X-ray",
        "Dental Implant Treatment (Advanced Laser Technique)",
        "Fix Wiring Treatment (टूटे-फूटे दांतों का इलाज)",
        "Orthodontic Treatment",
        "Laminates / Veneers",
        "Teeth Bleaching (दांतों को सफेद करना)",
        "Root Canal Treatment (RCT)",
        "Fixed Dental Prosthesis (FDP)",
        "Complete Denture (CD)",
        "Dental Crowns / Caps (दांतों पर कैप लगाना)"
      ]
    }
  ],
  
  doctors: [
    {
      id: "dr-sandeep",
      name: "Dr. Sandeep Dudy",
      specialization: "Neuropsychiatrist",
      qualification: "MBBS, MD Psychiatry",
      experience: "5 Years",
      image: "/assets/Dr.Sandeep_Dudy.png",
      bio: "Committed to providing professional and patient-focused mental healthcare."
    },
    {
      id: "dr-preeti",
      name: "Dr. Preeti Maan",
      specialization: "Oro Dental Surgeon",
      qualification: "BDS",
      experience: "6 Years",
      image: "/assets/Dr.Preeti_Maan.png",
      bio: "Committed to providing comprehensive and compassionate dental care."
    }
  ],

  testimonials: [
    {
      id: "1",
      text: "[Approved patient testimonial to be provided by SRD]",
      author: "Patient Name"
    }
  ]
};
