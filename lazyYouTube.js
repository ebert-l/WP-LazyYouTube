let videoFrames = document.getElementsByClassName("video-frame");
for(let v = 0; v < videoFrames.length; v++){
  let videoFrame = videoFrames[v];
  let videoID = videoFrame.dataset.videoId;
  let thumbnailSRC = "https://i.ytimg.com/vi/"+videoID+"/hqdefault.jpg";
  
  let thumbnail = document.createElement("img");
  thumbnail.src = thumbnailSRC;
  thumbnail.classList.add("thumbnail");
  
  videoFrame.appendChild(thumbnail);
  
  videoFrame.addEventListener("click", () => {insertForeignFrame(videoFrame, videoID);})
}

function insertForeignFrame(element, videoID){
  let frame = document.createElement("iframe");
  let src = "https://www.youtube-nocookie.com/embed/" + videoID + "?autoplay=1";
  frame.src = src;
  frame.classList.add("video");
  frame.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
  frame.setAttribute("allowfullscreen", "");
  frame.setAttribute("frameborder", "0");
  frame.setAttribute("autoplay", "true");
  
  element.appendChild(frame);
  element.removeEventListener("click", () => {insertForeignFrame(videoFrame, videoID);});
}
