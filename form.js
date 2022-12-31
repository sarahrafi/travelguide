function yesnoCheck(that) 
{
if (that.value == "malaysia") 
{
  document.getElementById("adc").style.display = "block";
}
else
{
  document.getElementById("adc").style.display = "none";
}
if (that.value == "italy")
{
  document.getElementById("pc").style.display = "block";
}
else
{
  document.getElementById("pc").style.display = "none";
}
if (that.value == "south korea")
{
  document.getElementById("ps").style.display = "block";
}
else
{
  document.getElementById("ps").style.display = "none";
}
if (that.value == "france"){
  document.getElementById("fr").style.display = "block";
}
else {
  document.getElementById("fr").style.display = "none";
}
}    

  function clicked(e)
  {
      if(!confirm('Thank you for your interest! We will contact you soon!')) {
          e.preventDefault();
      }
  }
