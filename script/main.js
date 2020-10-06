console.log('In main');

function loadScript(src, onload) {
  let script = document.createElement('script');
  script.onload = onload ? onload : function(e) {
      console.log(e.target.src + ' is loaded.');
    };
  script.src = src;
  script.async = false;
  document.head.appendChild(script);
}

loadScript('../script/mytest0.js');
loadScript('../script/mytest1.js');
loadScript('../script/mytest2.js', function(e) {
	testit0();
	testit1();
	testit2();
	$("#output").html("All the scripts are loaded.");
});
