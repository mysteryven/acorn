import {parse} from "../src/index.js"

const code = `
function add() {
  let a = 1
  console.log(1)
}
`.trim()

debugger
const result = parse(code, {
  ecmaVersion: 6
})

console.log(result)
