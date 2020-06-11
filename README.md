# @xyclos/commitlint-plugin-references

Custom commitlint rules which allows requiring references only for specific commit types..

## Install

`npm i -D @xyclos/commitlint-plugin-references`

### Usage

```javascript
module.exports = {
    plugins: [
        "@xyclos/references"
    ],
    rules: {
        "references-empty-enum": [
            2,
            "never",
            [
                "fix",
                "feat"
            ]
        ]
    },
    parserPreset: {
        parserOpts: {
            issuePrefixes: ["ABC-"]
        }
    }
}
```

## License

[MIT](https://mit-license.org/)
