if (!process.env.IS_TS_NODE) {
  //tslint:disable-next-line:no-var-requires
  require('module-alias/register');
}

import { foo } from './foo';
import { bar } from '#src/hello';
import { baz } from '#lib/baz';

console.log('main.ts - start');

console.log(foo());
console.log(bar());
console.log(baz());

export {
  foo,
  bar,
  baz,
}
