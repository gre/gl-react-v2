const createComponent = require("./createComponent");
const createSurface = require("./createSurface");
const Node = require("./Node");
const Shaders = require("./Shaders");
const Uniform = require("./Uniform");
const runtime = require("./runtime");

const mod = {
  createComponent,
  createSurface,
  Node,
  Shaders,
  Uniform,
  runtime
};

Object.defineProperty(mod, "GLSL", {
  enumerable: false,
  get() {
    throw new Error(
      "You are trying to use GLSL from gl-react v2 but this feature is only available in gl-react v3. Please upgrade gl-react OR downgrade any library that expect gl-react v3."
    );
  }
});

module.exports = mod;
