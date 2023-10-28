
const btn=document.querySelector("#btn");
const main=document.querySelector(".main");


const saveNote=()=>{
    const notes=document.querySelectorAll(".note textarea");
    console.log(notes);
    const data=[];
   notes.forEach(
    (note)=>{
       data.push(note.value);
    }
   )
   console.log(data);
   localStorage.setItem("notes",JSON.stringify(data));
//    when we will click on save button .all the data will store on notes in the form of array  and  we will make it or convert it into string and store in local memory
}

//self calling function

// it is a type of function which is run when user will read the page 
btn.addEventListener(
    "click",function(){
      addNote();
    }
)
const addNote=(noteContent)=>{
    const note=document.createElement("div");
    note.classList.add("note");
    note.innerHTML=`
    <div class="tool">
    <i class=" save fa-solid fa-floppy-disk"></i>
    <i class="trash fa-solid fa-trash"></i>
</div>
<textarea>
${noteContent}
</textarea>`;
note.querySelector(".trash").addEventListener(
    'click', 
    function(){
        note.remove();
    }
)
note.querySelector(".save").addEventListener(
    "click",
    function(){
        saveNote();
        //    it will send the notes in local storage ,so it will save on local storage
    }
)
main.appendChild(note);
}

//self calling function

(
    function(){
    const lsnotes=JSON.parse(localStorage.getItem("notes"));
    // yee local storage se notes niakle ga and console pr dikhayega
    console.log(lsnotes);
    // local storage se jitne bhi notes aaye hai ekk ekk kr ke usko utthao
    lsnotes.forEach(
        (lsnotes)=>{
            addNote(lsnotes);
        }
    )
    }
)()

