  // var noDiv = prompt("Please enter no. of Divs to Add", "0");
  //
  // if (noDiv=='0')
  //   {
  //   alert("No Div Has Been Added!");
  //   }
  // var n = noDiv.length;
  // var div = new Array(n);
  //
  // if (noDiv!='0')
  // {
  //     var stringOpt="1fr 1fr 1fr 1fr 1fr ";
  //     for (var i = 0; i <n; i++)
  //     {
  //       var div[i] = document.createElement("DIV");
  //       var x = document.getElementsByClassName("sel");
  //       x[0].appendChild(div);
  //       div[i].classList.add("box-inner");
  //       stringOpt+="1fr";
  //       document.getElementById("myDiv").style.gridTemplateColumns = stringOpt;
  //     }
  // }

var element = document.getElementById("Player1");
element.classList.add("Player");
var sum=1;
var count=1;
var disablediv=0;

function rollDice(){
  if(disablediv == 0){
  count++;

  var element = document.getElementById("Player1");
  element.classList.remove("Player");
      if (count>2)
      {
        element.classList.remove("Player");
        var element = document.getElementById("Player"+sum);
       element.classList.remove("Player");
      }


    var randomNumber = (Math.floor(Math.random() * 6)+1);
    document.getElementById("r1c1").style.visibility = "hidden";
    document.getElementById("r2c1").style.visibility = "hidden";
    document.getElementById("r3c1").style.visibility = "hidden";
    document.getElementById("r1c2").style.visibility = "hidden";
    document.getElementById("r2c2").style.visibility = "hidden";
    document.getElementById("r3c2").style.visibility = "hidden";
    document.getElementById("r1c3").style.visibility = "hidden";
    document.getElementById("r2c3").style.visibility = "hidden";
    document.getElementById("r3c3").style.visibility = "hidden";
    console.log(randomNumber);

   switch (randomNumber) {

    case 1:
      document.getElementById("r2c2").style.visibility = "visible";
      break;

    case 2 :
      document.getElementById("r1c1").style.visibility = "visible";
      document.getElementById("r3c3").style.visibility = "visible";
      break;

    case 3 :
      document.getElementById("r1c1").style.visibility = "visible";
      document.getElementById("r3c3").style.visibility = "visible";
      document.getElementById("r2c2").style.visibility = "visible";
      break;

  case 4 :
      document.getElementById("r1c1").style.visibility = "visible";
      document.getElementById("r1c3").style.visibility = "visible";
      document.getElementById("r3c1").style.visibility = "visible";
      document.getElementById("r3c3").style.visibility = "visible";
      break;

  case 5 :
      document.getElementById("r1c1").style.visibility = "visible";
      document.getElementById("r1c3").style.visibility = "visible";
      document.getElementById("r3c1").style.visibility = "visible";
      document.getElementById("r3c3").style.visibility = "visible";
      document.getElementById("r2c2").style.visibility = "visible";
      break;

  case 6 :
      document.getElementById("r1c1").style.visibility = "visible";
      document.getElementById("r2c1").style.visibility = "visible";
      document.getElementById("r3c1").style.visibility = "visible";
      document.getElementById("r1c3").style.visibility = "visible";
      document.getElementById("r2c3").style.visibility = "visible";
      document.getElementById("r3c3").style.visibility = "visible";
      break;

  default:
     console.log('Sorry, Nothing is been selected');
      break;
    }
    sum=sum+randomNumber;
    if (sum > 24)
    {
      sum=sum-randomNumber;
      for (var k = 0; k < randomNumber; k++)
      {
        sum=sum+1;
        if (sum==25)
        {
          sum=1;
        }
      }

    }
    console.log(sum);
    var element = document.getElementById("Player"+sum);
    element.classList.add("Player");
  }
    var deadline = new Date("nov 26, 2019 18:42:00").getTime();
    var x = setInterval(function() {
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
      disablediv++;
    document.getElementById("demo").innerHTML = days + "d "
    + hours + "h " + minutes + "m " + seconds + "s ";
        if (t < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
            disablediv=0;
        }
    }, 1000);


}
