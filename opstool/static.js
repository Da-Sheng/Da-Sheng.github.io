var hash = '6c6fd1afd0590398e0f2';
var min = 'min.';
var prefix = '/opstool';

// 每次更新lib为防止缓存，加版本号
requireOwnJs(prefix + '/lib/common.js?version=1.1.4');

setTimeout(function(){
  requireOwnJs('bundle.'+ min + hash +'.js');
}, 3800);

function requireOwnJs(src) {
  var scriptEle = document.createElement("script");
  scriptEle.src = src;
  document.body.appendChild(scriptEle);
}
