(() => {
  // string is the default type
function identity<T = string>(arg: T): T {
  return arg
}
const num = identity<number>(1)
const str = identity('Hello World')
const bool = identity(true)
console.log(num)
console.log(str)
console.log(bool)

})()