(function() {
  'use strict';
  request('/')
  .then(function(response){
    const posts = new Posts (
                    response.data.data ,
                    document.querySelector('.blog-main'),
                  )
                        // console.log(posts)
                  posts.render(posts)

    let deletor = document.querySelectorAll('.btn-danger')
    deletor.forEach(function(elem) {
      elem.addEventListener('click',(event) => removePost(elem))
    })

    let editor = document.querySelectorAll('.btn-info')
    editor.forEach(function(elem) {
      elem.addEventListener('click',(event) => editPost(elem))
    })
  })
  .catch(function(error){
    console.log(error)
  })

  function submit(event){
    event.preventDefault()

    const title = document.querySelector('#postTitle').value
    const body = document.querySelector('#postBody').value

    request('/post', 'post', {title, body})
    .then(()=> window.location.reload())
  }

  function removePost(post){
    let uuid = post.getAttribute('uuid')

    request(`/${uuid}`, 'delete')
    .then(()=> window.location.reload())
  }

  function editPost(post){
    let parent = post.parentNode
    let title = parent.firstElementChild
    let body = title.nextElementSibling.innerHTML
    let titleText = title.innerHTML
    let uuid = post.getAttribute('uuid')

    let newTitle = document.querySelector('#editTitle')
    newTitle.value = title.innerHTML
    document.querySelector('#editBody').innerHTML = body
    newTitle.setAttribute('uuid', uuid)
  }

// function saveChanges(){
//     let body = document.querySelector('#editBody').innerHTML
//     let title = document.querySelector('#editTitle').value
//     let uuid = document.querySelector('#editTitle').getAttribute('uuid'))
//       request(`/${uuid}`, 'put', {title, body})
//       // .then(()=> window.location.reload())
// }

  function editSubmit (event) {
    event.preventDefault()
    // let parent = document.querySelector('#post-edit')
    let title = document.querySelector('#editTitle').value
    let body = document.querySelector('#editBody').value
    let uuid = document.querySelector('#editTitle').getAttribute('uuid')
    console.log(title, body, uuid)
    request(`/${uuid}`, 'put', {title, body})
    .then(()=> window.location.reload())
  }

  let form = document.querySelector('#post-form')
  form.addEventListener('submit',(event) => submit(event))

  let editForm = document.querySelector('#post-edit')
  editForm.addEventListener('submit',(event) => editSubmit(event))
})()
