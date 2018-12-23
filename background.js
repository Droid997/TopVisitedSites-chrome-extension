
  chrome.runtime.onInstalled.addListener(function() {
     chrome.topSites.get(function(topsites)
	{	var title=[];
		topsites.forEach(function(object)
		{	
			var temp_obj={};
			temp_obj["url"]=object.url;
			temp_obj["title"]=object.title;
			title.push(temp_obj);
			
		});
		var temp_obj={};
		temp_obj["array"]=title;
		chrome.storage.sync.set({key: temp_obj}, function() {
          console.log('Value is set to ' + title);
        });
		
	});
  });
  
  chrome.browserAction.onClicked.addListener(function(tabs) {
	  chrome.topSites.get(function(topsites)
	{	var title=[];
		topsites.forEach(function(object)
		{
			title.push(object.title);
			
		});
		var temp_obj={};
		temp_obj["array"]=title;
		chrome.storage.sync.set({key: temp_obj}, function() {
          console.log('Value is set to ' + title);
        });
		
	});
});