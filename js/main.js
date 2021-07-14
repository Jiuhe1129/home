    //********************开局选框************************
    $(function () {
        $(".srdj").focus();
    })

    //********************百度接口************************
    $(function () {
        $("#search").on("keyup", function () {
            var value = $(this).val();        //输入的关键字
            $.ajax({
                methods: "get",
                //根据关键字搜索的api
                url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=sr&wd=" + value,
                dataType: "jsonp",
                jsonpCallback: "sr",         //远程API即不同域之间jq跨域请求方式1
                success: function (data) {
                    var datalist = data.s;
                    var ul = $("<ul></ul>");
                    ul.addClass("ul");
                    for (var i = 0; i < datalist.length; i++) {
                        $(".block").find("ul").remove();
                        //创建新标签并加上
                        var li = $("<li></li>");
                        li.bind("click", function () {
                            var tex = $(this).text();
                            $("#search").val(tex);
                            $(this).parent("ul").remove();
                        });
                        li.html(datalist[i]);
                        //点击显示对应网页的API
                        var a = $("<a href='https://www.baidu.com/s?tn=15007414_9_dg&wd=" + datalist[i] + "' target='_blank'></a>");
                        a.append(li);
                        ul.append(a)
                    }
                    $(".block").append(ul);
                }
            })
        })
    })

console.log("少年有梦想国家有希望")
console.log("%c阿伟yyds","background: rgba(252,234,187,1);background: -moz-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%,rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -webkit-gradient(left top, right top, color-stop(0%, rgba(252,234,187,1)), color-stop(12%, rgba(175,250,77,1)), color-stop(28%, rgba(0,247,49,1)), color-stop(39%, rgba(0,210,247,1)), color-stop(51%, rgba(0,189,247,1)), color-stop(64%, rgba(133,108,217,1)), color-stop(78%, rgba(177,0,247,1)), color-stop(87%, rgba(247,0,189,1)), color-stop(100%, rgba(245,22,52,1)));background: -webkit-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -o-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -ms-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: linear-gradient(to right, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#f51634', GradientType=1 );font-size:1em")
console.log("%c\n\
 永 远 跟 党 走 心 中 有 党 事 业 理 想  \n\
  ⣿⣿⣿⣿⣿⠟⠋⠄⠄⠄⠄⠄⠄⠄⢁⠈⢻⢿⣿⣿⣿⣿⣿⣿⣿  \n\
  ⣿⣿⣿⣿⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⡀⠭⢿⣿⣿⣿⣿  \n\
  ⣿⣿⣿⣿⡟⠄⢀⣾⣿⣿⣿⣷⣶⣿⣷⣶⣶⡆⠄⠄⠄⣿⣿⣿⣿  \n\
  ⣿⣿⣿⣿⡇⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠄⠄⢸⣿⣿⣿⣿  \n\
  ⣿⣿⣿⣿⣇⣼⣿⣿⠿⠶⠙⣿⡟⠡⣴⣿⣽⣿⣧⠄⢸⣿⣿⣿⣿  \n\
  ⣿⣿⣿⣿⣿⣾⣿⣿⣟⣭⣾⣿⣷⣶⣶⣴⣶⣿⣿⢄⣿⣿⣿⣿⣿  \n\
  ⣿⣿⣿⣿⣿⣿⣿⣿⡟⣩⣿⣿⣿⡏⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿  \n\
  ⣿⣿⣿⣿⣿⣿⣹⡋⠘⠷⣦⣀⣠⡶⠁⠈⠁⠄⣿⣿⣿⣿⣿⣿⣿  \n\
  ⣿⣿⣿⣿⣿⣿⣍⠃⣴⣶⡔⠒⠄⣠⢀⠄⠄⠄⡨⣿⣿⣿⣿⣿⣿  \n\
  ⣿⣿⣿⣿⣿⣿⣿⣦⡘⠿⣷⣿⠿⠟⠃⠄⠄⣠⡇⠈⠻⣿⣿⣿⣿  \n\
  ⣿⣿⣿⣿⡿⠟⠋⢁⣷⣠⠄⠄⠄⠄⣀⣠⣾⡟⠄⠄⠄⠄⠉⠙⠻  \n\
  ⡿⠟⠋⠁⠄⠄⠄⢸⣿⣿⡯⢓⣴⣾⣿⣿⡟⠄⠄⠄⠄⠄⠄⠄⠄  \n\
  ⠄⠄⠄⠄⠄⠄⠄⣿⡟⣷⠄⠹⣿⣿⣿⡿⠁⠄⠄⠄⠄⠄⠄⠄⠄  \n\
",'color:red;background-color:black;')

    //********************回车搜索************************
    $("#search").keydown(function (event) { //给input绑定一个键盘点击事件
        event = event || window.event;
        var aa = $("#search").val()//获取input的值并命名为 aa
        if (event.keyCode == 13) { //判断点的是否是回车键
            window.open("https://www.baidu.com/s?tn=15007414_9_dg&wd=" + aa);//回车在百度里搜索aa
        }
    });

    //********************清除搜索框内容************************
    $(".qc").click(function () {
        $(".ul").css("display", "none")
        $(".srdj").val("");
    });

    //********************点击搜索框事件************************
    $("#search").click(function () {
        $(".sr").addClass("srdj")
        $(".sr").removeClass("sr")
        $(".srdj").css("width", "200%")
        $(".qc").css("opacity", "1")
        $(".bj").css("backgroundSize", "110% 110%")
        $(".bj").css("filter", " blur(5px)")
        $(".cover").css("opacity", "1")
    });

    //********************点击搜索框以外的事件************************
    $(".cover").click(function () {
        $(".srdj").addClass("sr")
        $(".srdj").removeClass("srdj")
        $(".sr").css("width", "100%")
        $(".qc").css("opacity", "0")
        $(".ul").css("display", "none")
        $(".bj").css("backgroundSize", "100% 100%")
        $(".bj").css("filter", " blur(0px)")
        $(".cover").css("opacity", "0")
        $(".sr").val("");
    });

    //********************搜索框缩放************************
    $("#search").mousemove(function () {
        $(".sr").css("width", "200%")
    })
    $("#search").mouseout(function () {
        $(".sr").css("width", "100%")
    })

    //********************跳转页面************************
    $(".bk").click(function () {
        setTimeout(function () {
            window.location.href = "index.html"
        }, 0)
    });

