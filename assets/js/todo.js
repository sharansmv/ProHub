//adding function to click on task/li and check them off
$("li").click(function(){
    $(this).css("color", "green");
    $(this).css("text-decoration", "line-through");
});