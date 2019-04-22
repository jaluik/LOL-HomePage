window.onload = function (){
    // 1、滚动时切换小图
    window.onscroll = function(){
        var head = document.getElementsByClassName('head')[0];
        var detail = document.getElementsByClassName("detail")[0];
        if(head.style.height != "360px"){
        detail.style.bottom = "32px";
        startMove(head,{ "height":360,});
        head.style.backgroundImage= "url('img/bgc.jpeg')"
        }   
    }
    // 2、顶部mouseenter时显示，mouseleave时消失
    var menuUl = document.getElementById("menu_left");
    var MaskAll = document.getElementById("mask_all");
    var right = document.getElementsByClassName("right")[0];
    var phone = document.getElementsByClassName("phone")[0];
    var QRC = document.getElementById("QRC");
    var login = document.getElementsByClassName("login")[0];
    var loginMask = document.getElementById("login_mask");
    var arrowAll = document.getElementsByClassName("arrow");   
    var AllMenuLi = menuUl.getElementsByTagName('li');

    for (var i = 1 ; i < AllMenuLi.length; i ++){
        AllMenuLi[i].onmouseenter = function(){
            MaskAll.className = "mask-all show"
        }
    }
    MaskAll.onmouseleave = function(){
        MaskAll.className = "mask-all"
    }
    right.onmouseenter = function(){
        MaskAll.className = "mask-all"
    }
    phone.onmouseenter = function(){
        loginMask.className = "login-mask";
        QRC.className = "QRC show";
        phone.onmouseleave = function(){
            QRC.className = "QRC" 
        }
    }
    login.onmouseenter = function(){
        QRC.className = "QRC"
        loginMask.className = "login-mask show"
        login.onmouseleave= function(){
            loginMask.className = "login-mask" 
        }
        loginMask.onmouseenter = function(){
            loginMask.className = "login-mask show"
        }
        loginMask.onmouseleave = function(){
            loginMask.className = "login-mask"
        }
    }
    var arrow = arrowAll[0]
    arrow.onmouseenter = function(){
        arrow.style.animation= "arrow 1.2s linear infinite"
    }
    arrow.onmouseleave = function(){
        arrow.style.animation = ""
    }

    // 3、轮播图效果
    var promo = document.getElementsByClassName('promo')[0];
    var proPic = document.getElementsByClassName('promo-pic')[0];
    var proPics = proPic.getElementsByTagName('li');
    var proLi = document.getElementsByClassName('promo-li') [0];
    var proLis = proLi.getElementsByTagName('li');
    // 3.1自动播放
    var iNow = 0;
    var index = 0;
    clearInterval(timer);
    var timer = setInterval(function(){
        var width = 820;
        if (iNow == proPics.length - 1) iNow = 0;
        startMove(proPic,{
            "left": - width * iNow,
        })
        for(var j = 0; j < proLis.length; j ++){
            proLis[j].className = "";
        }
        proLis[iNow].className = "current";
        iNow ++;
    },1000)
    // 3.2 进入暂停播放
    promo.onmouseenter = function(){
        clearInterval(timer);
    }
    promo.onmouseleave = function(){
        timer = setInterval(function(){
            var width = 820;
            if (iNow == proPics.length - 1) iNow = 0;
            startMove(proPic,{
                "left": - width * iNow,
            })
            for(var j = 0; j < proLis.length; j ++){
                proLis[j].className = "";
            }
            proLis[iNow].className = "current";
            iNow ++;
        },1000)
    }
    
       
    // 3.3 Li控制播放
    for (var i = 0; i < proLis.length; i ++){
        proLis[i][index] = i;
        proLis[i].onmouseenter = function(){
            for(var j = 0; j < proLis.length; j ++){
                proLis[j].className = "";
            }
            this.className = "current";
            var width = 820;
            startMove(proPic,{
                "left": - width * this[index],
            })
            iNow = this[index];
        }
    }
    
    // 4、公告栏效果
    var infoHead = document.getElementsByClassName("info-head")[0];
    var infoAllLis = infoHead.getElementsByTagName("li");
    var infoContent = document.getElementsByClassName("info-content")[0];
    var infoAllUls = infoContent.getElementsByTagName("ul");
    for (var i = 0; i < infoAllLis.length; i ++){
        (function(i){
            var infoUl = infoAllUls[i];
            infoAllLis[i].onmouseenter = function(){
                for (var j = 0; j < infoAllLis.length; j ++){
                    infoAllLis[j].className = "";
                    infoAllUls[j].style.display = "none";
                }
                this.className = "current";
                infoUl.style.display = "block"
            }
        }(i))
    }
    // 5、活动栏效果
    var activityTop = document.getElementById("activity_top");
    var activityDown = document.getElementById("activity_down");
    var activityTopLis = activityTop.getElementsByTagName("li");
    var activityDownUls = activityDown.getElementsByTagName("ul");
    for (var i = 0; i < activityTopLis.length; i++ ){
        var activityLi = activityTopLis[i];
        activityLi.index = i;
        activityLi.onmouseenter = function(){
            for (var j = 0; j < activityTopLis.length; j ++ ){
                activityTopLis[j].className = "";
                activityDownUls[j].className = "";
            }
            this.className = "selected"
            var activityUl = activityDownUls[this.index] 
            activityUl.className = "selected"
        }
        // 6、更多皮肤显示效果
    }
    var skin = document.getElementsByClassName("skin")[0]
    var moreSkin = document.getElementsByClassName("more-skin")[0];
    skin.onmouseenter = function(){
         moreSkin.style.display = "block";
         moreSkin.style.animation = "topin ease 1.3s 1";
    }
    var time1;
    skin.onmouseleave = function(){
        timer1 = setTimeout(function(){
            moreSkin.style.animation = "topin_reverse ease 1.3s 1";
            moreSkin.style.display = "none";
        },300)

    }
    moreSkin.onmouseenter = function(){
        clearTimeout(timer1);
        moreSkin.style.display = "block";
    }
    moreSkin.onmouseleave = function(){
        moreSkin.style.animation = "topin_reverse ease 1.3s 1";
        moreSkin.style.display = "none";     
    }
    // 7、给每个小标题的下面装饰添加鼠标滚动效果
    headDecoration("video");
    headDecoration("alblum");


    // 8.1、专辑页的换屏效果
    var alblumMiddle = document.getElementById("alblum_middle");
    var alblunUls = alblumMiddle.getElementsByTagName("ul");


    // 8.2、专辑页的滚动效果
    var alblum = document.getElementById("alblum");
    var alblunUl = alblum.getElementsByClassName("alblum-selected")[0];
    var alblumLis = alblunUl.getElementsByTagName("li");
    var leftBtn = alblum.getElementsByClassName("left-btn")[0];
    var rightBtn = alblum.getElementsByClassName("right-btn")[0];
    var alblumLiWidth = 171;
    var albInow = 1;
    var gx = Math.floor((alblumLis.length -3)/3);


    
    alblunUl.style.width = alblumLiWidth * ( alblumLis.length + 1) +"px";
    rightBtn.onclick = function(){
        if(albInow > gx + 1) {
            albInow = 1;
            alblunUl.style.left = "0"; 
        }
        if(albInow <= gx){
            startMove(alblunUl,{
                "left" : - (albInow * 3 * alblumLiWidth),
            });
        }else if(albInow == gx + 1 ){
            startMove(alblunUl,{
                "left" : - ((albInow-1) * 3 * alblumLiWidth) - ((alblumLis.length % 3) * alblumLiWidth),
            });
        }
        albInow ++;
    }
    leftBtn.onclick = function(){
        if(albInow == 1){
            albInow = 4 ;
            alblunUl.style.left = - (alblumLis.length -3 ) * alblumLiWidth+ "px"; 
        }
        if(albInow == 2){
            startMove(alblunUl,{
                "left" : 0
            });
        }else if (albInow == 3){
            startMove(alblunUl,{
                "left" : - (3 * alblumLiWidth),
            });
        }else{
            startMove(alblunUl,{
                "left" : - (6 * alblumLiWidth),
            });
        }
        albInow --;
    }
        // 8.3、专辑页的自动滚动效果
        var albTimer = setInterval(function(){
            if(albInow > gx + 1) {
                albInow = 1;
                alblunUl.style.left = "0"; 
            }
            if(albInow <= gx){
                startMove(alblunUl,{
                    "left" : - (albInow * 3 * alblumLiWidth),
                });
            }else if(albInow == gx + 1 ){
                startMove(alblunUl,{
                    "left" : - ((albInow-1) * 3 * alblumLiWidth) - ((alblumLis.length % 3) * alblumLiWidth),
                });
            }
            albInow ++;
        },2000)

        alblunUl.onmouseenter = function(){
            clearInterval(albTimer);
        }
        leftBtn.onmouseenter = function(){
            clearInterval(albTimer);
        }
        rightBtn.onmouseenter = function(){
            clearInterval(albTimer);
        }
        alblunUl.onmouseleave = function(){
            alblumMove();
        }
        leftBtn.onmouseleave = function(){
            alblumMove();
        }
        rightBtn.onmouseleave = function(){
            alblumMove();
        }

        // 9、赛事中心翻屏效果
        var championContent = document.getElementById("champion_content");
        var chLeftBtn = championContent.getElementsByClassName("left-btn")[0];
        var chRightBtn = championContent.getElementsByClassName("right-btn")[0];
        var championUl = championContent.getElementsByTagName("ul")[0];
        var championLis = championUl.getElementsByTagName("li");
        var champNow = 1;
        var maxChampNow = parseInt(championLis.length/5)
        championUl.style.width = championLis.length *275 + "px";
        chRightBtn.onclick = function(){
            if(champNow >= maxChampNow){return}
            startMove(championUl,{
                "left": - champNow * 5 * 275,
            })
            champNow ++;
        }
        chLeftBtn.onclick = function(){
            if(champNow <= 1){return}
            startMove(championUl,{
                "left": - (champNow-2) * 5 * 275 ,
            })
            champNow --;
        }

        // 10、选手滚动效果
        var playerList;
        var matchTop = document.getElementById("match_top");
        var matchLis = matchTop.getElementsByTagName("li");
        var matchBottom =  document.getElementById("match_bottom");
        var player,matchLi,oneLi; 

        for (var i = 0; i < matchLis.length; i++){
            matchLi = matchLis[i];
            matchLi.setAttribute("index",i)
            matchLi.onmouseenter = function(){
                var playerLists = matchBottom.getElementsByTagName('ul');
                var playerList = playerLists[this.getAttribute("index")];
                var allLis = matchBottom.getElementsByTagName('li') 
                var players = playerList.getElementsByTagName("li");
                for(var j = 0; j<playerLists.length;j ++){
                    playerLists[j].style.visibility = "hidden";
                    matchLis[j].className = "none"
                }
                for(var j = 0; j<allLis.length;j ++){
                    oneLi = allLis[j];
                    oneLi.className = "none";
                }
                playerList.style.visibility = "visible";
                this.className = "selected"
                    for(var i = 0; i < players.length; i ++){
                        player = players[i];
                        player.className = "shows";
                    }

            }
        }
        // 11、赛事中心切换
             var champHead = document.getElementById("champion_top")
             var champHeadLis = champHead.getElementsByTagName("li")
             var champ1 = document.getElementById("champion_content")
             var champ2 = document.getElementById("game")
             champHeadLis[0].onmouseenter = function(){
                champ1.style.display = "block";
                champ2.style.display = "none";
                this.className = "selected"
                champHeadLis[1].className = "none"

             }
             champHeadLis[1].onmouseenter = function(){
                champ2.style.display = "block";
                champ1.style.display = "none"
                this.className = "selected"
                champHeadLis[0].className = "none"
             }
             // 12、动态添加英雄图片
             var jsonHero = {
                "暗裔剑魔":"Aatrox",
                "九尾妖狐":"Ahri",
                "暗影之拳":"Akali",
                "牛头酋长":"Alistar",
                "殇之木乃伊":"Amumu",
                "冰晶凤凰":"Anivia",
                "黑暗之女":"Annie",
                "寒冰射手":"Ashe",
                "铸星龙王":"AurelionSol",
                "沙漠皇帝":"Azir",
                "星界游神":"Bard",
                "蒸汽机器人":"Blitzcrank",
                "复仇焰魂":"Brand",
                "弗雷尔卓德之心":"Braum",
                "皮城女警":"Caitlyn",
                "魔蛇之拥":"Cassiopeia",
                "虚空恐惧":"ChoGath",
                "英勇投弹手":"Corki",
                "诺克萨斯之手":"Darius",
                "皎月女神":"Diana",
                "祖安狂人":"DrMundo",
                "荣耀行刑官":"Draven",
                "时间刺客":"Ekko",
                "蜘蛛女皇":"Elise",
                "寡妇制造者":"Evelynn",
                "探险家":"Ezreal",
                "末日使者":"Fiddlesticks",
                "无双剑姬":"Fiora",
                "潮汐海灵":"Fizz",
                "哨兵之殇":"Galio",
                "海洋之灾":"Gangplank",
                "德玛西亚之力":"Garen",
                "迷失之牙":"Gnar",
                "酒桶":"Gragas",
                "法外狂徒":"Graves",
                "战争之影":"Hecarim",
                "大发明家":"Heimerdinger",
                "海兽祭司":"Illaoi",
                "刀锋意志":"Irelia",
                "翠神":"Ivern",
                "风暴之怒":"Janna",
                "德玛西亚皇子":"JarvanIV",
                "武器大师":"Jax",
                "未来守护者":"Jayce",
                "戏命师":"Jhin",
                "暴走萝莉":"Jinx",
                "复仇之矛":"Kalista",
                "天启者":"Karma",
                "死亡颂唱者":"Karthus",
                "虚空行者":"Kassadin",
                "不祥之刃":"Katarina",
                "审判天使":"Kayle",
                "狂暴之心":"Kennen",
                "虚空掠夺者":"Khazix",
                "永猎双子":"Kindred",
                "暴怒骑士":"Kled",
                "深渊巨口":"KogMaw",
                "诡术妖姬":"LeBlanc",
                "盲僧":"LeeSin",
                "曙光女神":"Leona",
                "冰霜女巫":"Lissandra",
                "圣枪游侠":"Lucian",
                "仙灵女巫":"Lulu",
                "光辉女郎":"Lux",
                "熔岩巨兽":"Malphite",
                "虚空先知":"Malzahar",
                "扭曲树精":"Maokai",
                "无极剑圣":"MasterYi",
                "赏金猎人":"MissFortune",
                "金属大师":"Mordekaiser",
                "堕落天使":"Morgana",
                "唤潮鲛姬":"Nami",
                "沙漠死神":"Nasus",
                "深海泰坦":"Nautilus",
                "狂野女猎手":"Nidalee",
                "永恒梦魇":"Nocturne",
                "雪人骑士":"Nunu",
                "狂战士":"Olaf",
                "发条魔灵":"Orianna",
                "战争之王":"Pantheon",
                "钢铁大使":"Poppy",
                "德玛西亚之翼":"Quinn",
                "披甲龙龟":"Rammus",
                "虚空遁地兽":"RekSai",
                "荒漠屠夫":"Renekton",
                "傲之追猎者":"Rengar",
                "放逐之刃":"Riven",
                "机械公敌":"Rumble",
                "流浪法师":"Ryze",
                "凛冬之怒":"Sejuani",
                "恶魔小丑":"Shaco",
                "暮光之眼":"Shen",
                "龙血武姬":"Shyvana",
                "炼金术士":"Singed",
                "亡灵勇士":"Sion",
                "战争女神":"Sivir",
                "水晶先锋":"Skarner",
                "琴瑟仙女":"Sona",
                "众星之子":"Soraka",
                "策士统领":"Swain",
                "暗黑元首":"Syndra",
                "岩雀":"Taliyah",
                "刀锋之影":"Talon",
                "河流之王":"TahmKench",
                "宝石骑士":"Taric",
                "迅捷斥候":"Teemo",
                "魂锁典狱长":"Thresh",
                "麦林炮手":"Tristana",
                "巨魔之王":"Trundle",
                "蛮族之王":"Tryndamere",
                "卡牌大师":"TwistedFate",
                "瘟疫之源":"Twitch",
                "兽灵行者":"Udyr",
                "首领之傲":"Urgot",
                "惩戒之箭":"Varus",
                "暗夜猎手":"Vayne",
                "邪恶小法师":"Veigar",
                "虚空之眼":"VelKoz",
                "皮城执法官":"Vi",
                "机械先驱":"Viktor",
                "猩红收割者":"Vladimir",
                "雷霆咆哮":"Volibear",
                "嗜血猎手":"Warwick",
                "齐天大圣":"MonkeyKing",
                "远古巫灵":"Xerath",
                "德邦总管":"XinZhao",
                "疾风剑豪":"Yasuo",
                "掘墓者":"Yorick",
                "生化魔人":"Zac",
                "影流之主":"Zed",
                "爆破鬼才":"Ziggs",
                "时光守护者":"Zilean",
                "荆棘之兴":"Zyra",}
            var heroUl = document.getElementById("hero-ul")
            for (var attr in jsonHero){
                var newHeroLi = document.createElement("li");
                newHeroLi.innerHTML = "<img src='./img/hero1/" + jsonHero[attr] + ".png' alt=''>" +
                            "<p>" + attr + "</p>" + 
                            " <div class='hero-mask'><span></span></div>"
                heroUl.appendChild(newHeroLi)
            }
            // 12.1 图片上方点击效果
    
    // 函数
    function headDecoration(id){
        var allTop = document.getElementById(id);
        var oneTop = allTop.getElementsByClassName("top")[0];
        var allTopLis = oneTop.getElementsByTagName("li");
        var oneTopLi;
        for (var i = 0; i < allTopLis.length; i ++ ){
            oneTopLi = allTopLis[i];
            oneTopLi.onmouseenter = function(){
                for (var k = 0; k < allTopLis.length; k ++){
                    allTopLis[k].className = "";
                }
                this.className = "selected";
            }
        }
    }
    function alblumMove(){
        clearInterval(albTimer);
        albTimer = setInterval(function(){
            if(albInow > gx + 1) {
                albInow = 1;
                alblunUl.style.left = "0"; 
            }
            if(albInow <= gx){
                startMove(alblunUl,{
                    "left" : - (albInow * 3 * alblumLiWidth),
                });
            }else if(albInow == gx + 1 ){
            startMove(alblunUl,{
                    "left" : - ((albInow-1) * 3 * alblumLiWidth) - ((alblumLis.length % 3) * alblumLiWidth),
                })
            }
            albInow ++;
        },2000);
    }
   
}