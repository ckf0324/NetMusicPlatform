var index = 0;
var aSpan = document.getElementsByName("carouselLine");

setLinebColor();

var aLiName = ["ilist1", "ilist2", "ilist3", "ilist4", "ilist5", "ilist6"];
var aLi = document.querySelectorAll(".imglist>ul>li");


var btnright = document.getElementById("btnright");
btnright.onclick = nextPic;

var btnleft = document.getElementById("btnleft");
btnleft.onclick = prevPic;

/**
 * 用于打开登录窗口
 */
function openLoginWin() {
    var url = 'login.html';

    //弹出窗口
    layer.open({
        type: 2,
        title: '登录云音乐',
        content: url,
        skin: 'layui-layer-lan',
        area: ['300px', '300px'],
        maxmin: true

    });
}

/*选择歌单窗口*/
function selectMusicList(mid) {
    var url = 'selectMusicList.html';
    url = url + "?mid=" + mid;
    //弹出窗口
    layer.open({
        type: 2,
        title: '选择歌单',
        content: url,
        area: ['275px', '360px'],
        maxmin: true
    });
}

function openAddMusicList() {
    var url = 'addMusicList.html';
    //弹出窗口
    layer.open({
        type: 2,
        title: '添加歌单',
        content: url,
        area: ['300px', '320px'],
        maxmin: true
    });
}

/**
 * 用于打开注册窗口
 */
function openRegisterWin() {
    var url = 'register.html';

    //弹出窗口
    layer.open({
        type: 2,
        title: '注册',
        content: url,
        skin: 'layui-layer-lan',
        area: ['360px', '550px'],
        maxmin: true

    });
}

/**
 * 用于打开上传音乐窗口
 */
function openCreatorCenterWin() {
    var url = 'creatorCenter.html';

    //弹出窗口
    layer.open({
        type: 2,
        title: '创作者中心',
        content: url,
        area: ['500px', '550px'],
        maxmin: true

    });
}

function setLinebColor() {
    for (var i = 0; i < aSpan.length; i++) {
        aSpan[i].style.backgroundColor = "#ccc";
    }
    aSpan[index].style.backgroundColor = "skyblue";
}

function nextPic() {
    aLiName.unshift(aLiName[5]);
    aLiName.pop();
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].setAttribute("class", aLiName[i]);
    }
    index++;
    if (index >= aSpan.length) {
        index = 0;
    }
    setLinebColor();
}

function prevPic() {
    aLiName.push(aLiName[0]);
    aLiName.shift();
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].setAttribute("class", aLiName[i]);
    }
    index--;
    if (index < 0) {
        index = 5;
    }
    setLinebColor();
}

setInterval(function() {
    nextPic();
}, 3000)