const check = require("./references");
const cases = require("jest-in-case");

cases(
  "succeeds when",
  ({ commit, when, value, expected }) => {
    const [actual] = check(commit, when, value);
    expect(actual).toBe(expected);
  },
  {
    "the commit has no type": {
      commit: { type: "" },
      when: undefined,
      value: undefined,
      expected: true,
    },
    "the type enum is empty": {
      commit: { type: "fix" },
      when: "always",
      value: [],
      expected: true,
    },
  }
);

describe("when references", () => {
  const references = [];
  cases(
    "is empty",
    ({ commit, when, expected }) => {
      const [actual] = check(commit, when, ["a"]);
      expect(actual).toBe(expected);
    },
    {
      'a on "always [a]" succeeds': {
        commit: { references, type: "a" },
        when: "always",
        expected: true,
      },
      'b on "always [a]" succeeds': {
        commit: { references, type: "b" },
        when: "always",
        expected: true,
      },
      'a on "never [a]" fails': {
        commit: { references, type: "a" },
        when: "never",
        expected: false,
      },
      'b on "never [a]" succeeds': {
        commit: { references, type: "b" },
        when: "never",
        expected: true,
      },
    }
  );
});

describe("when references", () => {
  const references = ["CMS-123"];
  cases(
    "is not empty",
    ({ commit, when, expected }) => {
      const [actual] = check(commit, when, ["a"]);
      expect(actual).toBe(expected);
    },
    {
      'a on "always [a]" fails': {
        commit: { references, type: "a" },
        when: "always",
        expected: false,
      },
      'b on "always [a]" succeeds': {
        commit: { references, type: "b" },
        when: "always",
        expected: true,
      },
      'a on "never [a]" succeeds': {
        commit: { references, type: "a" },
        when: "never",
        expected: true,
      },
      'b on "never [a]" succeeds': {
        commit: { references, type: "b" },
        when: "never",
        expected: true,
      },
    }
  );
});
