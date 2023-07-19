// 控制器
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel; //记分牌
  direction: string = ""; // 存储蛇的移动方向
  isLive = true; //游戏进行中

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(10, 2);

    this.init();
  }
  // 游戏初始化
  init() {
    // 绑定键盘按键按下的事件
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    // 调用移动
    this.run();
  }

  // 键盘按下响应事件
  keydownHandler(event: KeyboardEvent) {
    // console.log(event.key);
    console.log(this);
    // 检查方向合法
    this.direction = event.key;
    // console.log('111');
  }

  //蛇移动的方向
  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;

    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        // 上移10
        Y -= 10;
        break;

      case "ArrowDown":
      case "Down":
        Y += 10;
        break;

      case "ArrowRight":
      case "Right":
        X += 10;
        break;

      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
    }

    // 吃到食物
    this.checkEat(X, Y);

    //try修改值，catch出现异常
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e: any) {
      alert(e.message + "游戏结束");
      this.isLive = false;
    }

    // 游戏继续时采取定时调用
    this.isLive &&
      setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }

  //   蛇经过坐标一直，表示吃到食物
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      // 重置位置
      this.food.change();
      //    分数增加
      this.scorePanel.addScore();
      // 蛇增加一节
      this.snake.addBody();

    }
  }
}

export default GameControl;
