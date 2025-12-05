const crawlers = [
  "screenjesus",
  "googlebot",
  "bingbot",
  "yandexbot"
]

const userWarned = localStorage.getItem("warned");
const userBot = checkUser();

if ( 
  userWarned != "true" && 
  userBot == false && 
  window.location.pathname != "/meta/warning"
) {
	window.location.href = "/meta/warning?" + window.location.pathname;
}

function checkUser () {
  for ( i=0; i < crawlers.length; i++ ){
    if ( navigator.userAgent.toLowerCase().includes(crawlers[i])) {
      return true;
    } 
  }
  return false;
}