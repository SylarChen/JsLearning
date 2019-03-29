/**
 * == 与 ===
 */
function foo() {
    var a = "1"
    var b = 1
    var c = new String("1")
    console.log(a == b)
    console.log(b == c)
    console.log(a == c)

    console.log("============")

    console.log(a === b)
    console.log(b === c)
    console.log(a === c)
}

/**
 * ArrayBuffer 是分配连续的内存
 * https://juejin.im/entry/59ae664d518825244d207196
 */
function boo() {
    var LIMIT = 10000000;
    var buffer = new ArrayBuffer(LIMIT * 4);
    var arr = new Int32Array(buffer);
    console.time("ArrayBuffer insertion time");
    for (var i = 0; i < LIMIT; i++) {
        arr[i] = i;
    }
    console.time("ArrayBuffer read time");
    for (var i = 0; i < LIMIT; i++) {
        var p = arr[i];
    }
    console.timeEnd("ArrayBuffer read time");
}

/**
 * 对象
 * 1. field
 * 2. function
 * 3. 取值
 */
function too() {
    var a = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue",
        getName: function () {
            return this.lastName + " " + this.firstName
        }
    };
    console.log(a.getName())
    console.log(a.firstName)
    console.log(a["firstName"])
}

/**
 * 局部变量：在函数中通过var声明的变量。
 * 全局变量：在函数外通过var声明的变量。
 * 没有声明就使用的变量，默认为全局变量，不论这个变量在哪被使用
 */
function coo() {
    a = "zzzzz";
    var b = "xxxxx";
    console.log(a)
    console.log(b)
    console.log("============")
    doo()
}

function doo() {
    console.log(a)
    // throw exception
    // console.log(b)
}

/**
 * 不要创建 String 对象。它会拖慢执行速度，并可能产生其他副作用
 */
function voo() {
    var x = "John";
    var y = new String("John");
    console.log(typeof x) // 返回 String
    console.log(typeof y) // 返回 Object
    console.log(x === y)
    console.log(x == y)
}

/**
 * 字符串操作
 */
function poo() {
    var x = "abcde";
    console.log("1 : " + x.charAt(0))  // 返回指定索引位置的字符
    console.log("2 : " + x.charCodeAt(0))  //返回指定索引位置字符的 Unicode 值
    console.log("3 : " + x.concat("fgh"))  //连接两个或多个字符串，返回连接后的字符串
    console.log("4 : " + String.fromCharCode(65, 66, 67))  //将 Unicode 转换为字符串
    console.log("5 : " + x.indexOf("e"))  //返回字符串中检索指定字符第一次出现的位置
    console.log("6 : " + x.lastIndexOf("a"))  //返回字符串中检索指定字符最后一次出现的位置
    console.log("7 : " + x.localeCompare("abcdd"))  //用本地特定的顺序来比较两个字符串
    console.log("8 : " + x.match("bc"))  //找到一个或多个正则表达式的匹配
    console.log("9 : " + x.replace())  //替换与正则表达式匹配的子串
    console.log("10 : " + x.search())  //检索与正则表达式相匹配的值
    console.log("11 : " + x.slice(1, 3))  //提取字符串的片断，并在新的字符串中返回被提取的部分
    console.log("12 : " + x.split())  //把字符串分割为子字符串数组
    console.log("13 : " + x.substr(0, 1))  //从起始索引号提取字符串中指定数目的字符
    console.log("14 : " + x.substring(0, 1))  //提取字符串中两个指定的索引号之间的字符
    console.log("15 : " + x.toLocaleLowerCase())  //根据主机的语言环境把字符串转换为小写，只有几种语言（如土耳其语）具有地方特有的大小写映射
    console.log("16 : " + x.toLocaleUpperCase())  //根据主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射
    console.log("17 : " + x.toLowerCase())  //把字符串转换为小写
    console.log("18 : " + x.toString())  //返回字符串对象值
    console.log("19 : " + x.toUpperCase())  //把字符串转换为大写
    console.log("20 : " + x.trim())  //移除字符串首尾空白
    console.log("21 : " + x.valueOf())  //返回某个字符串对象的原始值
}

/**
 * for in 循环
 * 是遍历对象的属性，数组的index
 */
function roo() {
    var a = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    };
    var b = ["a", "b", "c", "d"]
    for (var i in a) {
        console.log(i)
    }
    console.log("=========")
    for (var i in b) {
        console.log(i)
    }
}

function zoo() {
    var a = ["a", "b", "c", "d"]
    a.ccc = "ccc";
    for (var i in a) {
        console.log(i)
    }
    console.log(typeof a)
    console.log("===========")
    console.log(a[3])
    console.log(a[4])
}

/**
 * 类型
 * 1. 在JavaScript中，数组是一种特殊的对象类型。 因此 typeof [1,2,3,4] 返回 object。
 * 2. 用 typeof 检测 null 返回是object
 * 3. 任何变量都可以通过设置值为 undefined 来清空。 类型为 undefined.
 */
function uoo() {
    console.log(typeof "John"); // 返回 string
    console.log(typeof 3.14); // 返回 number
    console.log(typeof false);   // 返回 boolean
    console.log(typeof [1, 2, 3, 4]);  // 返回 object
    console.log(typeof {name: 'John', age: 34}); // 返回 object
    console.log(typeof null); // 返回 object
    console.log(typeof undefined); // 返回 undefined

    console.log(null === undefined) // false
    console.log(null == undefined)  // true
}

/**
 * 在 JavaScript 中有 5 种不同的数据类型：
 * string
 * number
 * boolean
 * object
 * function
 *
 * 对象类型有三种：
 * Object
 * Date
 * Array
 * RegExp
 *
 * 2个不包含任何值的数据类型：
 * null
 * undefined
 */
function goo() {
    console.log(typeof new Object())
    console.log(typeof new Array())
    console.log(typeof new Date())
    console.log(typeof new RegExp())

    console.log(typeof "sss")
    console.log(typeof 12.56)
    console.log(typeof false)
    console.log(typeof function () {
    })
}

/**
 * 如果对象是 JavaScript Array 或 JavaScript Date ，我们就无法通过 typeof 来判断他们的类型，因为都是 返回 object。
 * 可以使用 constructor 属性来查看对象是否为数组 (包含字符串 "Array"):
 */
function koo() {
    function isArr(a) {
        return a.constructor.toString().indexOf("Array") > -1;
    };

    function isDate(a) {
        return a.constructor.toString().indexOf("Date") > -1;
    }

    console.log(isArr(new Array()))
    console.log(isArr(new Date()))
    console.log(isDate(new Array()))
    console.log(isDate(new Date()))
}

/**
 * JavaScript 中，函数及变量的声明都将被提升到函数的最顶部。
 * JavaScript 中，变量可以在使用后声明，也就是变量可以先使用再声明。
 *
 * 建议使用    JavaScript 严格模式(strict mode)不允许使用未声明的变量。 在下一个章节中我们将会学习到 "严格模式(strict mode)" 。
 */
function coo() {
    x = 5;
    testFunc = function (temp) {
        console.log(temp)
    };
    // 函数以及变量的声明，会被提升
    var x;

    var testFunc;

    testFunc(x);

}

/**
 * 在 JavaScript 中, null 用于对象, undefined 用于变量，属性和方法。
 * 对象只有被定义才有可能为 null，否则为 undefined。
 * 如果我们想测试对象是否存在，在对象还没定义时将会抛出一个错误。
 */
function xoo() {
    /**
     * 只要未赋值的就都是undefine
     */
    var a;
    var c = null;
    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)

    function isNullRight(x) {
        return typeof x !== undefined && x === null;
    }

    function isNullWrong(x) {
        // undefine 时会报错
        return x === null;
    }

    console.log(isNullRight(a))
    console.log(isNullRight(c))
    console.log(isNullWrong(a))
    console.log(isNullWrong(c))
}

xoo(12.5, "ASd", "Ad");
