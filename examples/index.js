const fs = require('fs');
const path = require('path');
const peg = require('pegjs');

const grammarFile = path.resolve('../rich-json.pegjs');
const richJsonGrammar = fs.readFileSync(grammarFile, 'utf-8');

const richJsonParser = peg.generate(richJsonGrammar);

const json = `{
    "a": 1,
    "b": [2, "3", /^\d+$/],
    "c": /x(.+?)y/g
}`;
const result = richJsonParser.parse(json);

console.log(result);