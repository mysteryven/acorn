import {parse} from "../src/index.js"

const code = `
  {
    for (let i = 0; i < 10; i++) {
      console.log(i)
    }
  }
`

debugger
const result = parse(code, {
  ecmaVersion: 6
})

debugger
console.log(result)
