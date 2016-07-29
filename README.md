# Strelka Code Style Eslint configuration

Basically based on [JS standard Code Style](http://standardjs.com) with specific additions (see `index.js`)

Full rules description coming soon...


## Setup in new project

- Install Eslint globally and in project:

  ```bash
  $ npm i -g eslint
  $ npm i -D eslint
  ```

- Install dependencies

  ```bash
  $ npm i -D eslint-config-{standard,standard-jsx} eslint-plugin-{meteor,promise,react,standard}
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

- Check Code Style `eslint . --ext=js,jsx`
- (Optional) Fix some Code Style errors with `eslint . --fix --ext=js,jsx`

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
