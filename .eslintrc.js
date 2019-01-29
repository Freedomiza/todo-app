module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        "no-underscore-dangle": 0,
        "import/prefer-default-export": 0,
        "react/prefer-stateless-function": 0,
        "react/forbid-prop-types": 0
    },
    "settings": {
        "import/resolver": {
          "node": {
            "paths": ["./src"]
          }
        },
      },
};