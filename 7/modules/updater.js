import { exec } from "child_process";
import { writeFile } from "fs";

export class FileUpdater {
  constructor(options) {
    this.counter = 0;
    this.doc = `# ${options.head}`;
    this.options = options;

    const configOption = options.config ? `-c ${options.config}` : "";
    this.command = `echo $(jsdoc ${options.source} ${configOption} -X)`;
  }

  update() {
    exec(this.command, (_, stdout) => {
      const result = stdout.replace(/\n/g, " ").replace(/"\[.+\]"/g, '""');

      JSON.parse(result)
        .filter(
          (obj, index, self) =>
            index === self.findIndex(({ name }) => name === obj.name) &&
            !obj.undocumented
        )
        .forEach((element) => {
          if (this.isPackage(element)) return;

          this.doc += this.template(element);
        });

      writeFile(this.options.file, this.doc, () => {});
      this.reset();
    });
  }

  reset() {
    this.counter = 0;
    this.doc = `# ${this.options.head}`;
  }

  isPackage(element) {
    return element.kind === "package";
  }

  template(element) {
    this.counter += 1;
    return `
  ## ${this.counter}. \`${element.meta.filename}\`
    
  **Description**: ${element.description}
    
  ---`;
  }
}
