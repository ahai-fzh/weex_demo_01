define('@weex-component/hello', function (require, exports, module) {

;

;module.exports.style = {}

;module.exports.template = {
  "type": "div",
  "children": [
    {
      "type": "text",
      "style": {
        "fontSize": 100
      },
      "attr": {
        "value": "Welcome to weex world"
      }
    }
  ]
}

;})

// require module
bootstrap('@weex-component/hello', {"transformerVersion":"0.3.1"})