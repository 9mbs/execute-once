# @hi-matbub/once

A function that executes once, and returns `undefined` on sequential calls. Learn how to build a scoped package yourself [here!](https://javascript.plainenglish.io/publish-a-scoped-package-to-npm-using-typescript-b36f2f7475c9)

## Setup

```sh
npm i @hi-matbub/once
```

## Usage

```js
const { executeOnce } = require("@hi-matbub/once");

const once = executeOnce();

for (let i = 0; i < 3; i++){
  console.log(once(() => "Hello, World!"));
}
```

