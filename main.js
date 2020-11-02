// const modal=document.querySelector('.modal');
// const show=document.querySelector(".show");
// const close =document.querySelector(".close");
// console.log(show);


function bindModal(triggerSelector, modalSelector, closeSelector) {

        const trigger = document.querySelector(triggerSelector),

              modal = document.querySelector(modalSelector),

              close = document.querySelector(closeSelector);


        trigger.addEventListener('click', (e) => {
	            modal.style.display = "block";
                document.body.style.overflow = "hidden";

            });



        close.addEventListener('click', () => {

            modal.style.display = "none";
			document.body.style.overflow = "";

        });

       

  
    //     window.addEventListener('click', (e) => {

    //         if (e.target == modal) {

    //             modal.style.display = "none";
				// document.body.style.overflow = "";
				//  console.log("fire");

    //         }
           

    //     });

    }



    

// const	id = document.getElementById("item1");
// const  content = document.getElementById("modal-content");
// id.addEventListener('click', korset);
// function korset(){
// 	content.style.display="block";

// }




    bindModal('.show', '.modal', '.close');
    bindModal('#birinwi', '#modal-content', '#close');
    bindModal('#second', '.modal2', '.close2');
    bindModal('#third', '.modal3', '.close3');


    