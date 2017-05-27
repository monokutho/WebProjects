var quote = "";

function resize() {
    //  VARIABLES
    var h = window.innerHeight;
    var w = window.innerWidth;
    var quote_body = document.getElementById('quote_body');
    var quote_button = document.getElementById('get-another-quote-button');
    var footer = document.getElementById('footer');
    
    quote_body.style.width = w/2 + "px";
    quote_body.style.top = h/4 + "px";
    quote_body.style.left = w/4 + "px";
    quote_body.style.padding = w/40 + "px";
    
    quote_button.style.width = w/8 + "px";
    quote_button.style.height = h/12 + "px";
    
    footer.style.paddingTop = h/35 + "px";

}

function randomColor() {
    var newColor = ['#'];
    for(var i = 0; i < 6; i++){
        newColor.push(Math.round(Math.random() * 10));// hay que limitarlo de 0 - 9
    }
    
    return newColor.join('');
}


function setup() {
    resize();
    
    
}

setup();

function getQuote(e) {
        var newColor = randomColor();
        console.log(newColor);
        $('#get-another-quote-button').css('backgroundColor', newColor);
        $('body').css('backgroundColor', newColor);
        $('.content').css('color', newColor);
        
        e.preventDefault();
        $.ajax({
          url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
          success: function(data) {
            post = data.shift(); // The data is an array of posts. Grab the first one.
            $('#quote-title').text(post.title);
            $('#quote-content').html(post.content);
              quote = post.content;

            // If the Source is available, use it. Otherwise hide it.
            if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
              $('#quote-source').html('Source:' + post.custom_meta.Source);
            } else {
              $('#quote-source').text('');
            }
          },
          cache: false
        });
        
    };



$(document).ready( function() {
    
    var post = {};
    
    $('#get-another-quote-button').on('click', getQuote);
      
});
