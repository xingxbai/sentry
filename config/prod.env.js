"use strict";
// let gitSha = require("child_process")
//   .execSync("git rev-parse HEAD")
//   .toString()
//   .trim();
// process.env.RELEASE_VERSION = gitSha;

module.exports = {
  //RELEASE_VERSION: `"${gitSha}"`,
  NODE_ENV: '"production"'
};

const release = "1.0.0"; // 可以根据package.json的版本号或者Git的tag命名
process.env.RELEASE_VERSION = release;
module.exports = {
  NODE_ENV: '"production"',
  RELEASE_VERSION: `"${release}"`
};
