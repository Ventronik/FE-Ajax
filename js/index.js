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
    // FILL IN HERE
    let uuid = post.getAttribute('uuid')
    
    request(`/${uuid}`, 'delete')
    .then(()=> window.location.reload())
  }

  function editPost(post){
    // FILL IN HERE
    let uuid = post.getAttribute('uuid')

  }

  let form = document.querySelector('#post-form')
  form.addEventListener('submit',(event) => submit(event))


})()
