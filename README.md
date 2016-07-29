# Strelka Code Style Eslint configuration

Full description coming soon...
Based on [JS standard Code Style](http://standardjs.com) with additions (see `index.js`)

## Quick start

```bash
npm i -D eslint babel-eslint eslint-{config-{standard,standard-jsx,strelka},plugin-{meteor,promise,react,standard}} && echo '{ "extends": [ "strelka" ] }' >> .eslintrc && echo '.meteor\nnode_modules\npublic\nprivate' >> .eslintignore && ./node_modules/.bin/eslint . --ext=js,jsx
```


## Setup in new project

- Install Eslint in project:

  ```bash
  $ npm i -D eslint
  # and dependencies
  $ npm i -D babel-eslint
  $ npm i -D eslint-{config-{standard,standard-jsx},plugin-{meteor,promise,react,standard}}
  ```

- Install strelka config

  ```bash
  $ npm i -D eslint-config-strelka
  ```

- Create `.eslintrc` in project folder with following content:

  ```json
  {
    "extends": [ "strelka" ]
  }
  ```

- Additionally create `.eslintignore` with list of ignored files:

  ```
  .meteor
  node_modules
  public
  private
  ```

- Check Code Style `./node_modules/.bin/eslint . --ext=js,jsx`
- (Optional) Fix some Code Style errors with `./node_modules/.bin/eslint . --fix --ext=js,jsx`

## Usage with Sublime Text

1. Install Eslint globally with `npm i -g eslint`
2. Install Sublime packages:
    1. `SublimeLinter`
    2. `SublimeLinter-contrib-eslint`
3. Open `SublimeLinter Settings: User` and add this options:

  ```json
  "user": {
    "linters": {
      "eslint": {
        "@disable": false,
        "args": [
          "--ext=js,jsx,vue",
          "--env=es6"
        ],
        "excludes": []
      }
    },
    "syntax_map": {
      "javascript (babel)": "javascript",
      "vue": "javascript"
    },
  }
  ```
