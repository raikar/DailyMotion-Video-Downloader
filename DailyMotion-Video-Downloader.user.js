// ==UserScript==
// @name           DailyMotion Video Downloader
// @id             DailyMotionVideoDownloader
// @version        0.0.1
// @description    raikar
// @namespace      
// @match          *://www.dailymotion.com/video/*
// @grant          none
// ==/UserScript==
var title = document.querySelector("span#video_title").textContent.replace(/^\s+/, "").replace(/\s{2,}/g, " ");
var container = document.createElement("div");
var scriptTags = Array.slice(document.getElementsByTagName("script")).map(function (node) {
	return node.innerHTML;
});
scriptTags.join("").match(/http[^\"]+?\\\/H264-\d+x\d+\\\/[^\"]+/g).forEach(function (url) {
	url = url.replace(/\\/g, "");
	url.match(/\/(\w+-\d+x\d+)\//);
	var resolution = RegExp.$1;
	var div = document.createElement("div");
	var span = div.appendChild(document.createElement("span"));
	span.innerHTML = resolution;
	span.style.display = "inline-block";
	span.style.width = "130px";
	var a = div.appendChild(document.createElement("a"));
	a.textContent = title;
	a.href = url;
	container.appendChild(div);
});
var node = document.querySelector("div.pl_video_bottombox.bottom_box");
node.parentNode.insertBefore(container, node);
