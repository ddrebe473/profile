var susoutcomes = {
  "I am the butcher": function () {
    var img = document.getElementById("susimg");
    img.src = "https://i.kym-cdn.com/photos/images/original/002/052/327/b2d";
    var text = document.getElementById("outputtext");
    text.innerHTML = "You are the butcher, you do the trolling";
  },
  1: function () {
    var text = document.getElementById("outputtext");
    text.innerHTML =
      "you aren't that sus, so you will only get trolled a little";
  },
  2: function () {
    var text = document.getElementById("outputtext");
    text.innerHTML = "You are a little sussy prepare for trolling";
  },
  3: function () {
    var text = document.getElementById("outputtext");
    text.innerHTML = "Sussy, trolling will commence";
  },
  4: function () {
    var text = document.getElementById("outputtext");
    text.innerHTML = "You are so sussy prepare for epic amount of trolling";
  },
};

function calculatesus() {
  var suslevel = document.getElementsByName("sus_1");
  console.log(suslevel);
  for (let i = 0; i < suslevel.length; i++) {
    if (suslevel[i].checked === true) {
      console.log(suslevel[i].toString() + "is selected");
      susoutcomes[suslevel[i].id]();
      document.getElementById("questions").remove();
      document.getElementById("submitter").remove();
    }
  }
}
