
var pf_not_blk = {};
pf_not_blk.listening = true;

pf_not_blk.blocksListen = function() {
	var blocks = document.querySelectorAll(".notion-frame .notion-selectable");
	for (var i=0; i<blocks.length; i++) {
		var block = blocks[i];
		block.onmouseover = function (e) {
			if ( !pf_not_blk.listening ) return;
			e.stopImmediatePropagation();
			e.preventDefault();
			pf_not_blk.onOver(this);
		};
		block.onmousedown = function (e) {
			if ( !pf_not_blk.listening ) return;
			e.stopImmediatePropagation();
			e.preventDefault();
			pf_not_blk.onClick(this);
		};
		block.onmouseleave = function (e) {
			if ( !pf_not_blk.listening ) return;
			e.stopImmediatePropagation();
			e.preventDefault();
			pf_not_blk.clearBlocks();
		};
	}
};

pf_not_blk.clearBlocks = function() {
	var blocks = document.querySelectorAll(".notion-frame .notion-selectable");
	for (var i=0; i<blocks.length; i++) {
		var block = blocks[i];
		var id = block.getAttribute("data-block-id");
		if ( id ) {
			block.style.border = "unset";
		}
	}
};

pf_not_blk.onOver=function(elm) {
	pf_not_blk.clearBlocks();
	var id = elm.getAttribute("data-block-id");
	if ( ! id ) return;
	elm.style.border = "1px solid red";
};

pf_not_blk.onClick = function(elm) {
	pf_not_blk.clearBlocks();
	var id = elm.getAttribute("data-block-id");
	if ( ! id ) return;
	alert(id);
	pf_not_blk = {};
	pf_not_blk.listening = false;
};

if ( document.location.href.indexOf("notion.so") <= 0 ) {
	console.error("this does not appear to be a notion page");
} else {
	console.log("starting up notion block selector");
	pf_not_blk.blocksListen();
}
