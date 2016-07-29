# Strelka Code Style Eslint configuration

Rules desctiption comming soon...


## Setup in new project

- Install eslint globaly and in project:

  ```bash
  $ npm i -g eslint
  $ npm i -D eslint
  ```

- Install Strelka config `npm i -D eslint-config-strelka`
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


## Usage with Sublime Text

1. Install eslint globally `npm i -g eslint`
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
      },
      //...
    },
    "syntax_map": {
      "javascript (babel)": "javascript",
      "vue": "javascript"
    },
  }
  ```
