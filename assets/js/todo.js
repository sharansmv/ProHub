//adding function to click on task/li and check them off
$("ul").on("click","li",function(){
   $(this).toggleClass("completed");
});

//deleting a task by clicking on X
$("ul").on("click","span",function(event){
    $(this).parent().remove();
    event.stopPropagation();
});

//adding a new task on hitting enter
$("input").keypress(function(event){
    if(event.which === 13){
        var task = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>X</span>" + task + "</li>");
    }
});

