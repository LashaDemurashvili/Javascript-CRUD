$(document).ready(function (){
    let id_counter = 0;
    $(".submit-btn").click(function() {
        id_counter ++;

        let text_header = $("#text-label-header").val()
        let text_desc = $("#text-input").val()


        alert(`${text_header} ${text_desc}`)
    })




    $(".edit-btn").click(function (){
        alert("Edited")
    })


    $(".del-btn").click(function (){
        alert("Deleted")
    })


})



