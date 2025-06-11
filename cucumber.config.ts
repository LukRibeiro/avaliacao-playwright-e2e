export default {
  default: {
    paths: ['features/**/*.feature'],
    require: ['steps/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress'],
    publishQuiet: true
  }
};
