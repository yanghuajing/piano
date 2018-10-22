/**
 * Created by lenovo on 2018/10/21.
 */
/*第6单元 项目6-2 HTML5 Web钢琴 js文件*/
//利用JavaScript为钢琴添加音效：
//1.当鼠标单击某个琴键时，加载相应的音频（调用load（）方法），并且播放（调用play
//(）方法)；
//2.每个琴键（div）包括黑键都有对应的音频文件，也就是说有多少个div标签就有多少个audio标签；
//3.使用document.getElementsByTagName(tagName)方法来获取琴键和对应音频文件的数组，然后通过数组
//的下标获取每个琴键和每个音频，数组的下标从0开始，然后是1,2,3……n，使用for循环来循环调用音频
//的load（）和play（）方法;


//获取所有的div琴键;
var mydivs = document.getElementsByTagName("div");
//获取所有的audio音频源;
var myaudios = document.getElementsByTagName("audio");
var Arraycolor=new Array(65,85,68,70,71,72,74,75,76,73,79,87,69);

//页面加载完毕后执行
window.onload = function(){

    //通过数组的下标获取每个琴键和每个音频，数组的下标从0开始;
    // 使用for循环来循环调用音频的load()和play()方法;
    for(var i=0 ; i<14; i++){
        mydivs[i].index = i;



        mydivs[i].onclick = function(){//图片
            // alert(this.index);
            myaudios[this.index].load(); //保持余音绕梁，开启新的声音;
            myaudios[this.index].play();
        }

        if (window.event.keyCode == Arraycolor[i]){
            // 当鼠标单击某个琴键时，加载相应的音频（调用load()方法），并且播放（调用play()方法）
            // mydivs[i].onclick();
            alert("sksk");
            myaudios[i].load(); //保持余音绕梁，开启新的声音;
            myaudios[i].play();
        }
    }
}

/*function Myenter(i) {
    if (window.event.keyCode == Arraycolor[i]){
        // 当鼠标单击某个琴键时，加载相应的音频（调用load()方法），并且播放（调用play()方法）
        mydivs[i].onclick();
        alert("sksk");
        // myaudios[i].load(); //保持余音绕梁，开启新的声音;
        // myaudios[i].play();
    }
}*/
// document.onkeypress = Myenter;
