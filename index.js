#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { program } = require("commander");

program
  .version("0.0.1")
  .argument("<dirname>", "directory name to crate structure")
  .option("-t, --template <template>", "which template to use", "multimedia")
  .action((dirname, { template }) => {
    const dir = path.join("./", dirname);
    const templatePath = path.join(__dirname, "templates", `${template}.json`);
    let jsonData;

    try {
      // Read template
      if (fs.existsSync(templatePath)) {
        jsonData = require(templatePath);
      } else {
        throw new Error(`There's no ${template} template`);
      }

      // Create directory
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      } else {
        throw new Error(`Directory ${dir} already exists`);
      }

      // Create template directories
      for(let newDir in jsonData) {
        console.log(`Creating directory: ${newDir}`)
        const templateDir = path.join(dir, newDir);
        fs.mkdirSync(templateDir);
      }

      console.log("That's all!");
    } catch(err) {
      console.error("Error: " + err.message);
    }
  });

program.parse();
