# stemplate

[![Build Status](https://travis-ci.org/freewil/stemplate.png)](https://travis-ci.org/freewil/stemplate)

`stemplate` exports a single function which takes a string and an object.
It uses CoffeeScript-style placeholders to replace values within the string and
returns a new string.

```javascript
/**
* @param {string} text         - A Text with placeholders in it you want to replace
* @param {object} objectHash  - A Hash object.
*/
function stemplate(text, objectHash);

```

## Usage

Example 1:

```javascript
var stemplate = require('stemplate');
var exampleString = "Hi, my name is #{myName}";
var objectHash = {
    myName: "Thomas"
}
console.log(stemplate(exampleString, objectHash)); // "Hi, my name is Thomas"
```


Example 2:
```javascript
var stemplate = require('stemplate');
var exampleString = "Hi, my name is #{firstname} #{lastname}";
var objectHash = {
    firstname: "Thomas"
}
console.log(stemplate(exampleString, objectHash)); // "Hi, my name is Thomas #{lastname}"
```

Example 3:
```javascript
var stemplate = require('stemplate');
var exampleString = "!{firstname} #{lastname} - #{kids} kid(s)";
var objectHash = {
    firstname: '<a href="/profile/thomas">Thomas</a>',
    lastname: "Fritz",
    kids: 11
}
console.log(stemplate(exampleString, objectHash)); // '<a href="/profile/thomas">Thomas</a> Fritz - 11 kid(s)'
```

Example 4:
```javascript
var stemplate = require('stemplate');
var exampleString = "#{firstname} #{lastname} - #{kids} kid(s)";
var objectHash = {
    firstname: "Thomas",
    lastname: "Fritz",
    kids: 11
}
console.log(stemplate(exampleString, objectHash)); // "Thomas Fritz - 11 kid(s)"
```

## LICENSE

The MIT License

Copyright (c) 2012 Thomas Fritz

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
