# eslint-config-strelka

> Based on [Standard JS](http://standardjs.com)


## Setup

### General

1. Install:

  ```bash
  $ yarn add eslint eslint-{config-{standard,strelka},plugin-{promise,import,node,standard}}
  ```

2. In `.eslintrc`:

  ```json
  { "extends": "strelka" }
  ```

### React

1. Install:

  ```bash
  $ yarn add eslint eslint-{config-{standard,standard-jsx,strelka},plugin-{promise,import,node,react,standard}}
  ```

2. In `.eslintrc`:

  ```json
  { "extends": "strelka/react" }
  ```

3. Usage:

  ```bash
  $ eslint --ext js,jsx .
  ```

### Vue

1. Install:

  ```bash
  $ yarn add eslint eslint-{config-{standard,vue,strelka},plugin-{promise,import,node,html,vue,standard}}
  ```

2. In `.eslintrc`:

  ```json
  { "extends": "strelka/vue" }
  ```

3. Usage:

  ```bash
  $ eslint --ext js,vue .
  ```

### Editors

#### Sublime Text

1. Install Eslint globally with `npm i -g eslint`
2. Install Sublime packages:
    - `SublimeLinter`
    - `SublimeLinter-contrib-eslint`
3. Open `SublimeLinter Settings: User` and add this options:

  ```json
  "user": {
    "linters": {
      "eslint": {
        "@disable": false,
        "args": [ "--ext=js,jsx,vue" ],
        "excludes": []
      }
    },
    "syntax_map": {
      "javascript (babel)": "javascript",
      "vue": "javascript"
    },
  }
  ``` 
  
## Rules

> TODO

  
## Related

- [Standard.js](http://standardjs.com/) - One JavaScript Style to Rule Them All
- [ESLint](http://eslint.org/) - The pluggable linting utility for JavaScript and JSX


---
Strelka
