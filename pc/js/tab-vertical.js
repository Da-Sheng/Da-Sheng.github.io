var TabVertical = function (options) {
	if (!options) {
		throw new Error("请传入参数");
	} else if(!options.containerId){
		throw new Error("请给options传入一个属性containerId")
	}
	this.container = $('#' + options.containerId);
	var initActiveIndex = options.initActiveIndex || 0;
	// 初始高亮
	var firstItem = $(this.container.children(".tab-vertical-item")[initActiveIndex]);
	var firstContent = $(this.container.children(".tab-content")[initActiveIndex]);
	if (firstItem) {
		firstItem.addClass('tab-item-active');
		firstContent.addClass('tab-content-active')
	}
	var that = this

	this.container.on('click', function (e) {
		const key = e.target.dataset && e.target.dataset.key;
		if (e.target.className.indexOf('tab-vertical-item') > -1) {
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
			var oldActive = that.container.children(".tab-item-active")[0];
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