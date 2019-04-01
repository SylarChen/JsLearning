
global.name = "全局对象xxx的值"

/**
 * 这是一个函数
 */
function thisIsFunction() {
    console.log(this.name)
}

var sylar = {
    name: "sylar",
    age: 28,
    /**
     * 对象的属性为函数时，叫方法
     */
    thisIsMethod: function () {
        console.log(this.name);
    }
}

thisIsFunction()
sylar.thisIsMethod();