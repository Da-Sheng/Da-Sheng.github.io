var Tab = function (options) {
	if (!options) {
		throw new Error("请传入参数");
	} else if(!options.containerId){
		throw new Error("请给options传入一个属性containerId")
    }
    this.container = $('#' + options.containerId);
    var initActiveIndex = options.initActiveIndex || 0;
    var initByIndexClass = options.initByIndexClass;
    let initClass = `tab-item-${initActiveIndex}`
    // 初始高亮
    var firstItem = $(this.container.children(".tab-item")[initActiveIndex]);
    var firstContent = $(this.container.children(".tab-content")[initActiveIndex]);
    if (initByIndexClass) {
        firstItem = $(`.${initClass}`);
        console.log('firstItem', firstItem)
    }
    if (firstItem) {
        firstItem.addClass('tab-item-active');
        firstContent.addClass('tab-content-active')
    }
    var that = this

    this.container.on('click', function (e) {
        const key = e.target.dataset && e.target.dataset.key;
        if (e.target.className.indexOf('tab-item') > -1) {
            // 如果点的子，才处理
            if (e.target.className.indexOf('tab-item-active') > -1) {
                // 点的当前高亮，不处理
                return;
            }
            if (options.callback && key) {
                options.callback(key);
            }
            var targetContent = $('.tab-content[data-key='+key +']')
            // 去除旧的active
            var oldActive = that.container.find(".tab-item-active")[0];
            var oldKey = oldActive.dataset.key;
            var oldContent = $('.tab-content[data-key='+oldKey +']')
            if (oldActive) {
                $(oldActive).removeClass('tab-item-active');
                oldContent.removeClass('tab-content-active');
            }
            // 标记active
            $(e.target).addClass('tab-item-active')
            targetContent.addClass('tab-content-active')
        }
    })
}

/**
 * fixme 目前所有页面都引入tab.js，为了cms维护方便，不新建js了。以这个为主
 * footer.js
 * 展开点击逻辑
 */
function onExpand() {
    var target = $('.expand-trigger');
    var container = $('#footer-link');
    var textCon = $('.expand-trigger-text');
    var footerHeight = 'auto';
    if (target) {
        var isExpanded = target.attr('data-expanded') === '1';
        if (isExpanded) {
            footerHeight = '48px';
            target.attr('data-expanded', '0');
            textCon.text('展开');
            target.removeClass('expanded');
        } else {
            footerHeight = 'auto';
            target.attr('data-expanded', '1');
            textCon.text('收起');
            target.addClass('expanded');
        }
        container.height(footerHeight)
    }
}
// (function() {
//     let count = 0;
//     function initEvent() {
//         var target = document.querySelector('.expand-trigger');
//         console.log('target', target)
//         if (target) {
//             target.addEventListener('click', onExpand)
//         } else if (count < 5) {
//             count++
//             setTimeout(() => {
//                 initEvent();
//             }, 500)
//         }
//     }
//     initEvent();
// })()