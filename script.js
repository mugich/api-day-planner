
var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

for (i = 0; i < hours.length; i++){

  var row = $("<div>");
  row.addClass("row time-block");
  row.attr("data-row", hours[i]);

  var hour = $("<div>");
  hour.addClass("hour col-1");
  hour.text(hours[i]);
  row.append(hour);
  
  var textArea =$("<textarea>");
  textArea.addClass("past present future description col-10");
  row.append(textArea);
  
  var button = $("<button>");
  button.addClass("saveBtn col-1");
  row.append(button);
  
  
  $(".container").append(row);

}


  
  



