function typografy() {
    var colorArray = ['#369', '#000', '#aaa', '#ccc', '#3366ff', '#00134d', 'orange', '#ccc', '#993366', '#009933', '#666', '#ff5050'];
    var fontArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q'];
    var imageArray = ['nature', 'abstract', 'food', 'cats']

    //First write the quote
    var q = getRandomInt(0, quotes.length - 1);
    var $numWords = quotes[q].quote.split(" ").length;
    $(".quote").text(quotes[q].quote);
    $(".name").text(quotes[q].attrib);
    
    // Now style the quote
    $(".quote").each(function () {
        var j = getRandomInt(0, colorArray.length - 1); 
        var f = getRandomInt(0, fontArray.length - 1); 
       $(this).css('color', colorArray[j]);
       $(this).css('font-family', fontArray[f]);     
       if ($numWords > 30) { $(this).css('font-size', '35px');  }
    });

    // Style the Author
    $(".name").each(function () {
        var j = getRandomInt(0, colorArray.length - 1); 
        var f = getRandomInt(0, fontArray.length - 1); 
       $(this).css('color', colorArray[j]);
       $(this).css('font-family', fontArray[f]);     
    });

    // Create the background
    $(".back").each(function () {
       var j = getRandomInt(0, colorArray.length - 1); 
       var i = getRandomInt(0, imageArray.length - 1); 
    //    var imageURL = 'url(http://lorempixel.com/640/480/'+imageArray[i]+')';
    var imageURL = 'url(http://pipsum.com/800x600.jpg)';
       $(this).css('background-image', imageURL);
       $(this).css('background-color', colorArray[j]);
    });
}

// Get's a random value between 2
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}