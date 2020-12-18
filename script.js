var hours = ["15", "16", "17", "18", "19", "20", "21", "22", "23"];
var date = moment().format("MMMM Do YYYY, h:mm:ss a");
var currentTime = moment().hours();

$("#currentDay").append(date);

for (i = 0; i < hours.length; i++) {
  var row = $("<div>");
  row.addClass("row time-block");
  row.attr("data-row", hours[i]);

  var hour = $("<div>");
  hour.addClass("hour col-1");
  hour.text(hours[i]);
  row.append(hour);

  var textArea = $("<textarea>");
  textArea.addClass("col-10");
  row.append(textArea);

  var button = $("<button>");
  button.addClass("saveBtn col-1 far fa-save");
  row.append(button);

  $(".container").append(row);
}

$("button").on("click", function (event) {
  event.preventDefault();
  var textArea1 = $("textarea")[0].value;
  var textArea2 = $("textarea")[1].value;
  var textArea3 = $("textarea")[2].value;
  var textArea4 = $("textarea")[3].value;
  var textArea5 = $("textarea")[4].value;
  var textArea6 = $("textarea")[5].value;
  var textArea7 = $("textarea")[6].value;
  var textArea8 = $("textarea")[7].value;
  var textArea9 = $("textarea")[8].value;

  localStorage.setItem("textarea1", textArea1);
  localStorage.setItem("textarea2", textArea2);
  localStorage.setItem("textarea3", textArea3);
  localStorage.setItem("textarea4", textArea4);
  localStorage.setItem("textarea5", textArea5);
  localStorage.setItem("textarea6", textArea6);
  localStorage.setItem("textarea7", textArea7);
  localStorage.setItem("textarea8", textArea8);
  localStorage.setItem("textarea9", textArea9);
});

function localStorageFunction() {
  $("textarea")[0].value = localStorage.getItem("textarea1");
  $("textarea")[1].value = localStorage.getItem("textarea2");
  $("textarea")[2].value = localStorage.getItem("textarea3");
  $("textarea")[3].value = localStorage.getItem("textarea4");
  $("textarea")[4].value = localStorage.getItem("textarea5");
  $("textarea")[5].value = localStorage.getItem("textarea6");
  $("textarea")[6].value = localStorage.getItem("textarea7");
  $("textarea")[7].value = localStorage.getItem("textarea8");
  $("textarea")[8].value = localStorage.getItem("textarea9");
}

function updateTime() {
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("data-row").split(" ")[0]);

    if (blockHour < currentTime) {
      $(this).addClass("past");
    } else if (blockHour === currentTime) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

updateTime();
localStorageFunction();
