<!-- PROJECT SHIELDS -->
<!--
*** We use markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Tela][tela-shield]][tela-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![AGPL V3 License][license-shield]][license-url]




## About The Project


A demonstration of the use of absolute imports in Typescript on NodeJS.


Example:

```typescript
import { foo } from './foo'; // relative import
import { bar } from '#src/hello'; // absolute import
import { baz } from '#lib/baz'; // absolute import
```


**Features:**

- Can use `ts-node` to run Typescript directly. This relies on the third-party module `tsconfig-paths`.

- Can compile to Javascript and run with `node`. This relies on the third-party module `module-alias`.

- Includes a `mocha` test that uses an absolute import. Link: [hello.spec.ts](src/hello/hello.spec.ts).


**Licensing:**
- AGPL v3 software license
- Licensed for personal use
- Licensed for commercial use, if and only if all derivative source code is made public
- A private commercial software license is available for purchase - this removes the obligation for your company to publish any derived source code


**If you would like to:**
- ask a question
- report a bug
- ask for an addition to the README
- request a feature
- get a private commercial software license
- make a complaint
- hire me

Then [please contact me on Tela](https://www.tela.app/magic/stjohn_piano/a852c8). Thank you.

[![Tela][tela-shield]][tela-url]

If you would like to add me as a professional contact, you can [send me a connection request on LinkedIn](https://www.linkedin.com/in/stjohnpiano):

[![LinkedIn][linkedin-shield]][linkedin-url]




## Future Expansion

- You need to carefully define your absolute paths in `tsconfig.json`, in the `compilerOptions` / `paths` section.

- You need to ensure that the search patterns in the `tsconfig.json`, in the `include` section, will allows these files to be found.

- You need to ensure that the paths in the `"_moduleAliases"` section of `package.json` match the definitions in the `compilerOptions` / `paths` section of `tsconfig.json`.




## Setup


```bash
git clone git@github.com:sj-piano/nodejs-absolute-imports-typescript

cd nodejs-absolute-imports-typescript && npm install
```




## Commands


```bash

# Run mocha unit test
npm run test

# Run Typescript code directly
npm run ts-node

# Compile Typescript to Javascript
npm run build

# Run Javascript
npm run node
```




## Notes


In `package.json`, `"type"` is deliberately set to be `"commonjs"`. When using NodeJS + Typescript, and trying to get absolute paths to work, support for ES Modules _within the compiled Javascript code_ appears to be somewhat tricky, and I haven't tackled it yet.




## Resources


- [ts-node](https://github.com/TypeStrong/ts-node)

- [tsconfig-paths](https://github.com/dividab/tsconfig-paths)

- [module-alias](https://github.com/ilearnio/module-alias)




## Background


Source:  
https://github.com/dividab/tsconfig-paths


> Use this to load modules whose location is specified in the `paths` section of `tsconfig.json` or `jsconfig.json`. Both loading at run-time and via API are supported.
>
> Typescript by default mimics the Node.js runtime resolution strategy of modules. But it also allows the use of [path mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html) which allows arbitrary module paths (that doesn't start with "/" or ".") to be specified and mapped to physical paths in the filesystem. The typescript compiler can resolve these paths from `tsconfig` so it will compile OK. But if you then try to execute the compiled files with node (or ts-node), it will only look in the `node_modules` folders all the way up to the root of the filesystem and thus will not find the modules specified by `paths` in `tsconfig`.
>
> If you require this package's `tsconfig-paths/register` module it will read the `paths` from `tsconfig.json` or `jsconfig.json` and convert node's module loading calls into to physical file paths that node can load.




Source:  
https://github.com/nestjs/typescript-starter/issues/74#issuecomment-522800484


```
There are several solutions:

...

3. Provide mapping without src in dist using module-alias package.

3.1. Install the package. npm i --save module-alias or yarn add module-alias.

3.2. Add next code to the end of package.json

 "_moduleAliases": {
   "@app": "./dist"
}

3.3. Add paths to compileOptions in the tsconfig.json

  "paths": {
    "@app/*": ["./src/*"]
  },

3.4. The package will break execution via ts-node. Therefore we need to update start command in the package.json

"start": "IS_TS_NODE=true ts-node -r tsconfig-paths/register src/main.ts",

3.5. Add next code to the top of src/main.ts file:

if (!process.env.IS_TS_NODE) {
  // tslint:disable-next-line:no-var-requires
  require('module-alias/register');
}

3.6. Write your imports like import { ... } from '@app/utils/foo'; instead of src/utils/foo.

Notice: You can define multiple aliases - For example, @utils for src/utils
```



Source:  
https://www.reddit.com/r/typescript/comments/y94333/comment/it53s69

> Unfortunately, the relationship between CJS/ESM/TypeScript is complex and unintuitive, and even if I did want to devote an hour to it I have no reason to believe I'd do a better job clarifying it than any of the other devs who have attempted to do so after many hours of trial and error.
> 
> However, you can always use `import` syntax in TypeScript, regardless of any of these compiler settings, as it is a feature of the language. The problems arise when executing compiled code, either via the JS build output or dynamically via a tool like `ts-node`.
> 
> Again, you are far from alone getting tripped up on this stuff, and it's a big part of > the reason a lot of people are either pushing for full adoption of ESM or another > runtime altogether like Deno or Bun. If you do still want to learn more, here are the > relevant TS docs:
> 
> https://www.typescriptlang.org/docs/handbook/modules.html
> https://www.typescriptlang.org/docs/handbook/module-resolution.html
> https://www.typescriptlang.org/docs/handbook/esm-node.html




I found the `hello` mocha unit test in this repo:
https://github.com/oleersoy/tsmochanyc




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/sj-piano/eth-contract-hello-world-javascript.svg?style=for-the-badge
[license-url]: https://github.com/sj-piano/eth-contract-hello-world-javascript/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-StJohn_Piano-blue.svg?style=for-the-badge&logo=linkedin
[linkedin-url]: https://linkedin.com/in/stjohnpiano
[tela-shield]: https://img.shields.io/badge/Tela-StJohn_Piano-blue?style=for-the-badge
[tela-url]: https://www.tela.app/magic/stjohn_piano/a852c8
