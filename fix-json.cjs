const fs = require('fs');
const copyAndFix = (src, dest) => {
  let data = fs.readFileSync(src, 'utf8');
  // Replace %22 with "
  data = data.replace(/%22/g, '"');
  fs.writeFileSync(dest, data);
};
copyAndFix('../capstone data/pizzas.json', './public/pizzas.json');
copyAndFix('../capstone data/ingredients.json', './public/ingredients.json');
