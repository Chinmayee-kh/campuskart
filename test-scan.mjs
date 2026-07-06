import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import fs from 'fs';

let config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: { 'dark-bg': '#0D0D0D', 'accent-neon': '#00FF9D' } } }
};

postcss([tailwindcss(config)])
  .process('@tailwind utilities;', {from: undefined})
  .then(r => {
      fs.writeFileSync('test-scan.css', r.css);
  })
  .catch(err => console.log(err));
