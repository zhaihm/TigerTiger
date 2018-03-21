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
        }
    } catch (e) {
    
    }
}

window.setInterval(speakProfit, 60000);  // speak once a minute
