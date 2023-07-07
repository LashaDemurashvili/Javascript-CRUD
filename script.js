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

    let div_clone = $(".box").clone()

    $(".submit-btn").click(function () {
        $(".textContainer").css({"visibility": "visible"})

        $(".box").attr("id", `box-id-${id_counter}`)
        $(".text-title").attr("id", `text-title-id-${id_counter}`).text(text_header)
        $(".text-description").attr("id", `text-description-id-${id_counter}`).text(text_desc)


        // $(".text-title").text(text_header)
        // $(".text-description").text(text_desc)
        alert("Submitted")

    })

    $(".edit-btn").click(function (){
        alert("Edited")
    })


    $(".del-btn").click(function (){
        let get_box_id = $(".box").attr("id")
        let box_id = document.getElementById(get_box_id)
        $(box_id).remove()

    })
})


// $(".box").addClass(`id_${id_counter++}`)

// $(".element").attr("id","SomeID");