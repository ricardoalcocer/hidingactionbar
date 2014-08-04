function doClick(e) {
    var w=Ti.UI.createWindow({
    	backgroundColor: "red"
    });

    w.addEventListener('click',function(e){
    	e.source.close();
    })

    w.open();
}

$.index.open();
