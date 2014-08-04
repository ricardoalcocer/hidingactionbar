var isVisible=true;

function hideshow(e) {
    if (isVisible){
    	$.index.activity.actionBar.hide();
    	isVisible=false;
    	$.hideshow.title="Show";
    }else{
    	$.index.activity.actionBar.show();
    	isVisible=true;
    	$.hideshow.title="Hide";
    }
}

$.index.open();
