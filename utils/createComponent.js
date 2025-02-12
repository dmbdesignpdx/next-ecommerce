/**
 * @file Provides a CLI to create a new component
 */


const fs = require("fs/promises");
const { print } = require("./print");
const { createSpinner } = require("nanospinner");
const spinner = createSpinner();

/**
 * @type {import("node").process}
 */

/**
 * @type {import("node").fs}
 */

/**
 * Main function to run
 * @async
 * @returns {void}
 */
const main = async () => {
  const [
    ,
    ,
    arg,
    ...args
  ] = process.argv;

  if (!arg) {
    print("error", "No component name specified.");

    process.exit(0);
  }

  const element = args.indexOf("-e");
  const path = args.indexOf("-d");

  let el = "div";
  let dir = `./components/${arg}`;

  if (element > -1) {
    /** @type {string} */
    const name = args[element + 1];

    if (name) {
      el = name;
    }
  }

  if (path > -1) {
    /** @type {string} */
    const name = args[path + 1];

    if (name) {
      dir = `./${name}/${arg}`;
    }
  }

  const index = `export * from "./${arg}";\nexport type * from "./types.d";\n` ;
  const styles = `.root {\n  contain: content\n};\n`;
  const component =
    `import type { ${arg}Props as Props } from "./types.d";`
    + `\nimport style from "./${arg}.module.css";`
    + `\n\n\nexport function ${arg}({}: Props) {`
    + '\n  return ('
    + `\n    <div className={style.root}>${arg} Component</div>`
    + '\n  );\n}\n';
  const types = `export type ${arg}Props = {\n  children?: never;\n};\n`;
  const test = `import { render } from "@testing-library/react";\n\n`;



  spinner.start({
    color: "yellow",
    text: "Creating your component...\n",
  });

  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (e) {
    if (e.code === "EEXIST") {
      print("warn", `${dir} already exists.`);
    }

    if (e.code === "ENOENT") {
      print("error", `${dir} does not exist.`);
    }

    return;
  }

  await fs.writeFile(`${dir}/index.ts`, index);
  await fs.writeFile(`${dir}/types.d.ts`, types);
  await fs.writeFile(`${dir}/${arg}.tsx`, component);
  await fs.writeFile(`${dir}/${arg}.module.css`, styles);
  // await fs.writeFile(`${dir}/${name}.test.tsx`, test);


  setTimeout(() => {
    spinner.stop({
      text: `Component ${arg} created!\n`,
      mark: "🎉",
    });
    spinner.clear();
  }, 1000);
};

main();
