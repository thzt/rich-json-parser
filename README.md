# rich-json-parser
Support regular expression to be a JSON value.

Using [PEG.js](https://github.com/pegjs/pegjs), the parser will not return an AST, but a javascript object directly.

For example: 

```
{
    "a": 1,
    "b": [2, "3", /^\d+$/],
    "c": /x(.+?)y/g
}
```

or 

```
{ "a": 1, "b": [2, "3", /^\d+$/], "c": /a(.+?)y/g }
```

We will get the a javascript object as the result, 

```
const result = {
    "a": 1,
    "b": [2, "3", /^\d+$/],
    "c": /x(.+?)y/g
};
```