// document.querySelector(".test-btn").addEventListener('click', function (){
//     const box = document.createElement("div");
//     box.className = "box";
//     document.body.appendChild(box);
//     box.style.backgroundColor = "#e30404";
//
// })
//


$(document).ready(function () {
    let id_counter = 0;
    const text_header = $("#text-label-header").val()
    const text_desc = $("#text-input").val()

    const div_clone = $(".box").clone()

    $(".submit-btn").click(function () {
        $(".textContainer").css({"visibility": "visible"})
        $(".text-title").text(text_header)
        $(".text-description").text(text_desc)


    })

    $(".edit-btn").click(function (){
        alert("EDIT")
    })

    $(".del-btn").click(function (){
        alert("DELETE")
    })
})


// $(".box").addClass(`id_${id_counter++}`)

