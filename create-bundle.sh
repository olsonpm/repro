#! /usr/bin/env sh

if [ "$1" == "--watch" ]; then
  npx nodemon --watch ./editor.mjs \
    --exec node_modules/.bin/rollup editor.mjs \
    -f iife \
    -o editor.bundle.js \
    -p @rollup/plugin-node-resolve
else
  node_modules/.bin/rollup editor.mjs \
    -f iife \
    -o editor.bundle.js \
    -p @rollup/plugin-node-resolve \
    -p @rollup/plugin-commonjs \
    -p @rollup/plugin-json
fi
