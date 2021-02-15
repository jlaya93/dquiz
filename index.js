
var name; var score1; var score2;
$(".submit").click(function()
{
  name = $("input:text").val();
  score1 = $("input[name='fq']:checked").val();
  score2 = $("input[name='sq']:checked").val();
  if (score1 === "0" && score2 === "0")
  {alert("Oops "+name+", you have got two wrong answers😕");}
  else if (score1 === "1" && score2 === "1")
  {alert("Yayy! Congratulations, "+name+" . You got all right. I'm soo proud of you!❤️");}
  else
  {alert("You're almost close "+name+" , better luck next time!😁")}
});
