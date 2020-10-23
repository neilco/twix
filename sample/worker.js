importScripts('../twix.min.js');

getTime();
setInterval(getTime, 1000);

function getTime() { 
    Twix.ajax({
        url: "https://neilcowburn.com/api/time.php",
        success: function(data) {
            postMessage(data);
        }
    });
}
