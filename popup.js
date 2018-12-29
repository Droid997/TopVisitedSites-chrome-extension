
function setTopSites(topSites)
{
	for(var i=0;i<topSites.length;i++)
	{
			var tr = $('<tr class="no-margin">');
			var a=$('<a style="font-size: small;">').text(topSites[i].title);
			a.attr("href",topSites[i].url);
			a.click(function(data){

				var tag=data.currentTarget;
				console.log(tag.href);
				chrome.tabs.create({url:tag.href});
			});
			tr.append($('<td>').append(a));
			$('#key_table').append(tr);
	}
}

chrome.topSites.get(setTopSites);