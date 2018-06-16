// what the user sees
//picture
//what the user can do
// click next and go fwd
//click previous button to go back
//img source is cycling based on clicks
//what the user expects
// expects to see a picture when they click either fwd or back


var gallery = ['pic1.png','pic2.png', 'pic3.png','pic5.png', 'pic7.png','pic8.png'];
var count = 0;

$(document).ready(function(){
//create an array



  // event listner for next
  $("#next").on("click",function(){
  //function
  // count +=1;

  count++

  if(count == gallery.length){
    count = 0;
  }
  // else{
  //   count = count ++1
  // }
  console.log(count)

  $('img').attr('src',gallery[count])

  });

  //event listner for previous
  $("#previous").on("click",function(){
    //function
    count--;

    if(count == -1){
      count = gallery.length-1;
    }

  $('img').attr('src',gallery[count]);
  });
});
