const fs = require('fs');
const code = fs.readFileSync('src/components/Header.jsx', 'utf8');
const newCode = code.replace('return (', 'return (\n    <>').replace('  );\n}', '    </>\n  );\n}');
fs.writeFileSync('src/components/Header.jsx', newCode);
