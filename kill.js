function killNewsFeed() {
	document.querySelector('[aria-label="News Feed"]').innerHTML = "News Feed slain!";
}

function killSponsoredAds() {
	document.getElementById("pagelet_ego_pane").innerHTML = "Sponsored ads slain!";
}

killNewsFeed();
killSponsoredAds();
