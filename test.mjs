import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import fs from 'fs';

let p = 'Testing tailwind implementation...\n';

try {
    postcss([tailwindcss('./tailwind.config.js')])
      .process('.test { @apply bg-dark-bg text-accent-neon mix-blend-screen; }', { from: undefined })
      .then(r => {
          p += 'SUCCESS!\n';
          p += r.css;
          fs.writeFileSync('test-out.log', p);
      })
      .catch(err => {
          p += 'ERR PROMISE: ' + err.toString();
          fs.writeFileSync('test-out.log', p);
      });
} catch (err) {
    p += 'ERR SYNC: ' + err.toString();
    fs.writeFileSync('test-out.log', p);
}
