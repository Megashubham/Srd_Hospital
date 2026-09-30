const fs = require('fs');
const path = require('path');

const components = [
  "Navbar",
  "Hero",
  "QuickActions",
  "TrustHighlights",
  "About",
  "Services",
  "WhyChooseUs",
  "Doctors",
  "PatientJourney",
  "Facilities",
  "Testimonials",
  "Appointment",
  "Location",
  "Footer",
  "MobileActionBar"
];

components.forEach(comp => {
  const content = `import React from 'react';\n\nconst ${comp} = () => {\n  return (\n    <section id="${comp.toLowerCase()}">\n      <div className="container">\n        <h2>${comp}</h2>\n      </div>\n    </section>\n  );\n};\n\nexport default ${comp};\n`;
  fs.writeFileSync(path.join('src', 'components', `${comp}.jsx`), content);
});
