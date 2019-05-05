var hash = '44b8f079657169ec065d';
var min = 'min.';

// 每次更新lib为防止缓存，加版本号
requireOwnJs('lib/common.js?version=1.1.4');

setTimeout(function(){
  requireOwnJs('bundle.'+ min + hash +'.js');
}, 1800);

function requireOwnJs(src) {
  var scriptEle = document.createElement("script");
  scriptEle.src = src;
  document.body.appendChild(scriptEle);
}
