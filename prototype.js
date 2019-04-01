/**
 * 在 JavaScript 中有 5 种不同的数据类型：
 * string
 * number
 * boolean
 * object
 * function
 *
 * 对象类型有四种：
 * Object
 * Date
 * Array
 * RegExp
 *
 * 2个不包含任何值的数据类型：
 * null
 * undefined
 */
function test() {

    console.log("==============================")
    console.log("Js一切皆为对象，连类型都是对象，类型本质是函数（构造函数）")
    console.log(typeof String)
    console.log(typeof Number)
    console.log(typeof Boolean)
    console.log(typeof Object)
    console.log(typeof Function)
    console.log(typeof Date)
    console.log(typeof Array)
    console.log(typeof RegExp)

    console.log("==============================")
    console.log("在 JavaScript 中有 5 种不同的数据类型：string, number, boolean, object, function")
    console.log(typeof "")
    console.log(typeof 123)
    console.log(typeof false)
    console.log(typeof {})
    console.log(typeof function () {})
    console.log(typeof new Date())
    console.log(typeof [])
    console.log(typeof new RegExp(","))
    console.log("==============================")
}

test()