class Snake {
  head: HTMLElement; //蛇头
  bodies: HTMLCollectionOf<HTMLElement>; //蛇身实时刷新
  element: HTMLElement; //获取蛇容器

  constructor() {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector("#snake>div")! as HTMLElement;
    this.bodies = this.element.getElementsByTagName("div");
  }

  // 获取蛇的X,Y坐标
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }
  // 设置蛇头坐标
  set X(value: number) {
    if (this.X === value) {
      return;
    }

    if (value < 0 || value > 290) {
      throw new Error("蛇撞墙");
    }

    //判断左右掉头
    if (
      this.bodies[1] &&
      (this.bodies[1] as HTMLElement).offsetLeft === value
    ) {
      if (value > this.X) {
        value = this.X - 10;
      } else {
        value = this.X + 10;
      }
    }
    //判断上下掉头，蛇向上移动时不能向下移动
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if (value > this.Y) {
        value = this.Y - 10;
      } else {
        value = this.Y + 10;
      }
    }

    // 移动身体
    this.moveBody();

    this.head.style.left = value + "px";
  }

  set Y(value: number) {
    if (this.Y === value) {
      return;
    }

    if (value < 0 || value > 290) {
      throw new Error("蛇撞墙");
    }
    this.moveBody();

    this.head.style.top = value + "px";


    // 检查撞到自己了没
    this.checkHeadBody();
  }

  // 蛇增加身体
  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }

  // 添加身体跟着位置移动,后边身体覆盖之前的身体，从后往前改
  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      // 获取前边身体
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      // 值设置为当前身体
      (this.bodies[i] as HTMLElement).style.left = X + "px";
      (this.bodies[i] as HTMLElement).style.top = Y + "px";
    }
  }

  //检查蛇头与身体坐标
  checkHeadBody(){
    // 获取所有身体坐标
     for(let i = 1;this.bodies.length;i++){
        let bd = this.bodies[i];
        if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
            throw new Error('撞到自己了');
        }
     }
  }
}

export default Snake;
