#!/usr/bin/env bash

cd client
npm run build

mv build/bundle.js ../server/build/bundle.js
