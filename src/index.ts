#!/usr/bin/env node

const main = (args: string[]) => {
  console.log('...args =', args);
};

if (typeof require !== 'undefined' && require.main === module) {
  main(process.argv.slice(2));
}
