$(document).ready(function() {

  var getWiki = function() {
    //Save search as variable
    var searchVal = $('#term').val();

    if (searchVal == "") {
      $("#results").html("<h4 class='noSearch'>Please enter a search term.</h4>");
      //$("#results").css({"color":"maroon", "font-weight": "bold"})
    } else {
      //call Wiki API off search term
      $.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch=" + searchVal + "&utf8=&callback=?", function(data) {
        //Clear results if a search has already taken place.
        $("#results").html("");
        var searchArray = data.query.search;
        
        if (searchArray.length == 0) {
          $("#results").html("<h4 class='noSearch'>No results found.  Please try a simpler search.</h4>");
        } else {        
          for (var i = 0; i < searchArray.length; i++) {
            $("#results").append("<a href='http://en.wikipedia.org/wiki/" + searchArray[i].title + "' target='_blank' class='searchLink'><div id='searchResult" + i + "'class='searchResult'><h4 class='searchHeader'>" + searchArray[i].title + "</h4><p class='snippets'>" + searchArray[i].snippet + "...</p></div></a>");
          }
        }
        
        /*console.log(searchArray);
        console.log(data);*/
        
      });
      //$("#results").html("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Albert%20Einstein&utf8=");

      
      
      
      /*$.ajax({
        url:"https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch=" + searchVal + "&utf8=?",
        dataType:'jsonp',
        crossDomain:true,
        success:function(data){console.log(data);}
      });*/
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      /*$.ajax( {
        url: "https://en.wikipedia.org/w/api.php",
        jsonp: "callback", 
        dataType: 'jsonp', 
        data: { 
            action: "query", 
            list: "search", 
            srsearch: "javascript", 
            format: "json" 
        },*/
      /*xhrFields: { withCredentials: true },
      success: function(response) { ... }*/
      //});      

    }

  };
  $("#search").click(getWiki);

  
  $("#term").keyup(function(event){
    if(event.keyCode == 13){
        $("#search").click();
    }
  });
  $("#term").focusin(function(){
    $(this).val("");
    $(this).attr("placeholder", "");
  });
  $("#term").focusout(function(){
    $(this).attr("placeholder", "Enter Search Term Here");
  });
  
});