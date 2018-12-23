
$( document ).ready(function() {
	var value="dishanth";
	chrome.storage.sync.get(['key'], function(result) {
          for(var i=0;i<result.key.array.length;i++)
			{
					var tr = $('<tr class="no-margin">');
					var a=$('<a style="font-size: small;">').text(result.key.array[i].title);
					a.attr("href",result.key.array[i].url);
					a.click(function(data){
		
						var tag=data.currentTarget;
						console.log(tag.href);
						chrome.tabs.create({url:tag.href});
					});
					tr.append($('<td>').append(a));
					$('#key_table').append(tr);
			}
        });
	
	
});