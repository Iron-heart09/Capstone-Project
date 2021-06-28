// Task 20


//save the table(Table of Survey)  
var myFile = new function () {
  this.printTable = function () {
      var save = document.getElementById('save');
      var win = window.open('', '', 'height=700,width=700');
      win.document.write(save.outerHTML);
      win.document.close();
      win.print();
  }
}

//Save form data(Comments)
let saveFile = () => {
    	
  // Get the data from each element on the form.
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const comment = document.getElementById('comment');
  
  
  // This variable stores all the data.
  let data = 
      '\r Name: ' + name.value + ' \r\n ' + 
      'Email: ' +email.value + ' \r\n ' + 
      'Comment: ' + comment.value + ' \r\n '  
    
  
  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: 'text/plain' });
  const sFileName = 'formData.txt';	   // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  }
  else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
  }

  newLink.click(); 
}

//This is a funcrtion to hide and show the  quote in Table of survey
$(document).ready(function(){
  $("#hide").click(function(){
    $("q").hide();
  });
  $("#show").click(function(){
    $("q").show();
  });
});

// This is a function for the drop-down menu in index.html 
$("nav div").click(function() {
  $("ul").slideToggle();
  $("ul ul").css("display", "none");
});

$("ul li").click(function() {
  $("ul ul").slideUp();
  $(this).find('ul').slideToggle();
});

$(window).resize(function() {
  if($(window).width() > 768) {
        $("ul").removeAttr('style');
  }
});


