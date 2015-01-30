Package.describe({
  summary: "A Natural Language Processor in JS",
  version: "0.0.1",
  git: "https://github.com/Agnito/meteor-knwl.git",
  name: "agnito:knwl"
});

Package.onUse(function (api, where) {
  api.addFiles('knwl.min.js', ['client','server']);
});

