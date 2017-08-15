function killNewsFeed() {
	document.querySelector('[aria-label="News Feed"]').innerHTML = "News Feed slain!";
}

function killEgoPane() {
	document.getElementById("pagelet_ego_pane").innerHTML = "Sponsored ads slain!";
}

async function killSponsoredAds() {
	// Thanks https://stackoverflow.com/a/39914235
	killEgoPane();
	await sleep(500);
	// FB likes to buffer another pair of ads
	killEgoPane();
}

function sleep(ms) {
	  return new Promise(resolve => setTimeout(resolve, ms));
}

killNewsFeed();
killSponsoredAds();
