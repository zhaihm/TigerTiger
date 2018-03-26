var enableAudio = true;
var interval = 60;
chrome.storage.sync.get(['enableAudio', 'interval'], function(items) {
    enableAudio = items.enableAudio;
    interval = items.interval;

    if (enableAudio) {
        window.setInterval(speakProfit, interval * 1000);
    }
  });

function speakProfit() {
    try {
        var holdings = document.querySelectorAll('.holdings')[0].getElementsByTagName('table')[0].getElementsByTagName('tbody')[0].getElementsByTagName('tr');
        if (holdings.length == 0) {
            return;
        }

        for (var i = 0; i < holdings.length; i++) {
            var profit = holdings[i].getElementsByTagName('td')[3].getElementsByTagName('p')[0].innerText;

            // speak the text
            console.log('profit is: ', profit);
            speakText(profit);
        }
    } catch (e) {
    
    }
}

function speakText(text) {
    var audioMap = {
        '-': 'minus',
        '.': 'dot'
    };
    for (var i = 0; i < text.length; i++) {
        var fileName = 'audios/';
        fileName += audioMap[text[i]] ? audioMap[text[i]] : text[i];
        fileName += '.mp3';

        playAudio(fileName, i*500);
    }
}

function playAudio(fileName, delay) {
    setTimeout(function() {
        new Audio(chrome.extension.getURL(fileName)).play();
    }, delay);
}
