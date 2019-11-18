#! /usr/bin/env ts-node

import * as commander from 'commander';

commander
  .requiredOption('-c --cheese <type>', 'add cheese')
  .option('-t --test')
  .parse(process.argv);

console.log(commander);

const getArrayOfOptionValues = (args: typeof process.argv) => (
  keys: string[],
) => args.filter((arg, i, a) => keys.includes(a[i - 1]) && arg);

console.log(getArrayOfOptionValues(process.argv)(['-c', '--cheese']));
