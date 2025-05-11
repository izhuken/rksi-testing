#!/snap/bin/node

import { Command } from "commander";
import { watch } from "fs";
import { FileUpdater } from "./updater.js";

const program = new Command();

program
  .version("0.1.0")
  .description("Converter jsdoc to markdown")
  .option("-f, --file <string>", "Output markdown file", "out.md")
  .option("-s, --source <string>", "Your project source", "./src/*.js")
  .option("-c, --config <string>", "JSDoc configuration file")
  .option("-h, --head <string>", "Head of markdown file", "Head");

const options = program.parse(process.argv).opts();
const updater = new FileUpdater(options);

console.log("Init updating...");

updater.update();

console.log("Start watching...");
watch(options.source.replace("*.js", ""), { encoding: "buffer" }, () =>
  updater.update()
);
