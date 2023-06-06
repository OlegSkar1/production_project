const { rmSync } = require('fs');
const path = require('path');

const cachePath = path.join(__dirname, '..', '/node_modules/.cache');

rmSync(cachePath, { recursive: true, force: true });
