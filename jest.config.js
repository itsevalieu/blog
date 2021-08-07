module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules",
    "<rootDir>/coverage",
    "<rootDir>/dist",
  ],
  // moduleDirectories: ["<rootDir>/node_modules", "<rootDir>/pages"],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/components$1",
    "^@pages(.*)$": "<rootDir>/pages$1",
    "^@hooks(.*)$": "<rootDir>/hooks$1",
    "^@styles(.*)$": "<rootDir>/styles$1",
    "\\.module.(scss|sass|css)$": "identity-obj-proxy",
  },
};
