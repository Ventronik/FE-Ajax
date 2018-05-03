//////////////////////////////////////////////////////////////////////////////
// Build Published Paper Section for easy browsing.
//////////////////////////////////////////////////////////////////////////////

(function() {
  'use strict';

  request('/posts')
  .then(function(response){
    // console.log(response.data.data)
    const posts = new Posts (
                          response.data.data ,
                          document.querySelector('#published-Papers'),
                        )
                  posts.render(posts)


          let cards = document.querySelectorAll('.portfolio-item')

          cards.forEach(function(elem) {
            elem.addEventListener("click", myModal(elem));
          })
  })
  .catch(function(error){
    // user is not authenticated
    console.log(error)
  })

  function myModal(paper){
    return function(event){
      document.querySelector('#paperModalLabel').innerHTML = paper.getAttribute('data-title')
      document.querySelector('.modal-abstract').innerHTML = paper.getAttribute('data-abstract')

    }
  }
})()
