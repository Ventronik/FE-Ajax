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
  })
  .catch(function(error){
    // user is not authenticated
    console.log(error)
  })

  function submit(event){
    event.preventDefault()

    const title = document.querySelector('#postTitle').value
    const body = document.querySelector('#postBody').value

    request('/post', 'post', {title, body})
    .then(()=> window.location.reload())
      // .then(function(response){
        // return request(`/post`, 'post', {title, post})
      // })
      // .then(function(response){
      //   const posts = new Posts (
      //                   response.data.data ,
      //                   document.querySelector('.blog-main'),
      //                 )
      //                       // console.log(posts)
      //                 posts.render(posts)
      // })
  }
  let form = document.querySelector('#post-form')
  form.addEventListener('submit',(event) => submit(event))

})()
