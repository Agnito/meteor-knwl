Package.describe({
  summary: "A Natural Language Processor in JS",
  version: "0.0.5",
  git: "https://github.com/Agnito/meteor-knwl.git",
  name: "agnito:knwl"
});

Package.onUse(function (api, where) {
  api.addFiles('knwl.js', ['client','server']);
  api.export('Knwl', ['client','server']);
  api.export('braid', ['client','server']);
});

