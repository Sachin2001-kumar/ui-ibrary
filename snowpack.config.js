module.exports = {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: [
    "@snowpack/plugin-babel",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-sass",
  ],
  install: [],
  installOptions: {
    installTypes: true,
  },
  buildOptions: {},
  devOptions: {},
};
