const ensure = require("@commitlint/ensure");
const message = require("@commitlint/message").default;

module.exports = function ({ references, type }, when = "never", value) {
  if (!type || !value || !ensure.enum(type, value)) {
    return [true];
  }

  const negated = when === "always";
  const empty = references.length === 0;

  return [
    negated ? empty : !empty,
    message([
      "references",
      negated ? "must" : "must not",
      `be empty when type is one of [${value.join(", ")}]`,
    ]),
  ];
};
