function doClick(e) {
    var w=Ti.UI.createWindow({
    	backgroundColor: "red",
    	theme: "Theme.YesActionBar" // this is only available starting on 3.3.1
    });

    w.addEventListener('click',function(e){
    	e.source.close();
    })

    w.addEventListener('open',function(evt){
    	var actionBar=evt.source.activity.actionBar;
    	if (actionBar){
    		actionBar.displayHomeAsUp=true;
	    	actionBar.onHomeIconItemSelected=function(e){
	    		evt.source.close();
	    	}
    	}
    })

    w.open();
}

$.index.open();
