import {parse} from "../src/index.js"

const code = "let a = 1"

debugger
const result = parse(code, {
  ecmaVersion: 6
})

console.log(result)
