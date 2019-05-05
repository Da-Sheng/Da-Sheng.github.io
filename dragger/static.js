var hash = '1577f72fff1f6d70fd01';
var min = 'min.';
var prefix = '/opstool';

// 每次更新lib为防止缓存，加版本号
requireOwnJs(prefix + '/lib/common.js?version=1.1.4');

setTimeout(function(){
  requireOwnJs('bundle.'+ min + hash +'.js');
}, 1800);

function requireOwnJs(src) {
  var scriptEle = document.createElement("script");
  scriptEle.src = src;
  document.body.appendChild(scriptEle);
}
