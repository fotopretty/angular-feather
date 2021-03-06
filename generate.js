const del = require('del');
const fs = require('fs-extra');
const uppercamelcase = require('uppercamelcase');

const iconsSrcFolder = 'node_modules/feather-icons/dist/icons';
const iconsDestFolder = 'src/lib/feather';
const docsIconsFolder = 'docs/icons';
const indexFile = 'src/lib/index.ts';

const componentTemplate = fs.readFileSync('src/templates/component.ts.tpl', 'utf-8');

return Promise.resolve()
  // delete feather folder and index
  .then(() => del([iconsDestFolder, indexFile]))
  // create destination folder
  .then(() => fs.mkdirSync(iconsDestFolder))
  .then(() => {
    fs.readdirSync(`${iconsSrcFolder}`).forEach(filename => {
      'use strict';
      const name = stripExtension(filename);
      const componentName = `Icon${uppercamelcase(name)}Component`;
      const moduleName = `Icon${uppercamelcase(name)}`;

      let output = componentTemplate
        .replace(/__NAME__/g, name)
        .replace(/__COMPONENT_NAME__/g, componentName)
        .replace(/__MODULE_NAME__/, moduleName);

      fs.writeFileSync(`${iconsDestFolder}/${name}.ts`, output, 'utf-8');

      fs.copySync(`${iconsSrcFolder}/${filename}`, `${docsIconsFolder}/${filename}`);

      fs.appendFileSync(
        indexFile,
        `export { ${moduleName}, ${componentName} } from './feather/${name}';\n`
      );
    });
  })
  .catch((err) => console.log(err));


function stripExtension(str) {
  return str.substr(0, str.lastIndexOf('.'));
}
