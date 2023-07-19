
// 记分牌得类
class ScorePanel{
    score = 0;
    level=1;

    // 分数和等级元素以及初始化
    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    maxLevel:number;//最高级数
    upScore:number;

    constructor(maxLevel:number,upScore:number){
        this.scoreEle =document.getElementById("score")!;
        this.levelEle = document.getElementById("food")!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    
    // 加分
    addScore(){
        this.score++;
        this.scoreEle.innerHTML = ++this.score+'';
        // 每10分升一级，调用一次升级函数
        if(this.score % this.upScore ==0){
            this.levelUp();
        }
    }

    // 升级
    levelUp(){
        if(this.level < this.maxLevel){
        this.level++;       
        this.levelEle.innerHTML = ++this.level+'';             
        }
    }
}
// 测试
// let Scorepanel = new ScorePanel( maxLevel:100,upScore:2 );
// console.log(Scorepanel.addScore());
export default ScorePanel;