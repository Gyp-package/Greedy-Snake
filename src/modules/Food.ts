// 定义食物的类
class food{
    element:HTMLElement;
    constructor(){
    //获取页面元素并赋值给element
        this.element = document.getElementById("food")!;
    }
    // 获取食物x轴
    get X(){
        return this.element.offsetLeft;
    }
    // 获取食物y轴
    get Y(){
        return this.element.offsetTop;
    }
    //修改食物位置
    change(){
        //生成随机位置[0,290],蛇每次移动10px，食物位置整10px，
        let top = Math.round( Math.random() * 29 ) * 10;
        let left = Math.round( Math.random() * 29 ) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}
// 测试
const Food = new food();
// console.log(Food.X,Food.Y);
Food.change();
console.log(Food.X,Food.Y);
export default food;