var bgroundImage="";
function addPost()
{var title=document.getElementById('title');
var desc=document.getElementById('description');

if(title.value.trim() && desc.value.trim()){

  var posts=document.getElementById("posts");
posts.innerHTML += `<div class="card mb-2">
            <div class="card-header">@post</div>
            
              <div class="card-body" style="background-image:url(${bgroundImage})">
                <blockquote class="post-content blockquote mb-0">
                  <p>${title.value}</p>
                  <footer class="blockquote-footer">
                    ${desc.value}
                     <cite title="Source Title"></cite>
                  </footer>
                </blockquote>
                <div class="overlay">
              </div>
              </div>
              
                      </div>`;
                      title.value='';
                      desc.value='';
}
else
{
  swal.fire({
    icon:'error',
    title:'Oops...',
    text:'Please Enter Title & Description !',
    
  }

  )
}

}

function selectImage(src){
  bgroundImage=src;
  
  var bgimage=document.getElementsByClassName('bg-image');
 for(var i=0;i<bgimage.length;i++){
  bgimage[i].className="bg-image"
 }
 event.target.className += " images-list-selected";
}