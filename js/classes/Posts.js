class Posts{
  constructor(items, elementToRenderIn){
    this.items = items
    this.elementToRenderIn = elementToRenderIn
  }

  static renderCard(postData, cb){
    const details =  document.querySelector('.details')

    //CREATE CARD ON page

    const div = document.createElement('div')
    addClassesToElement(div, 'blog-post')

    const title = document.createElement('h2')
    addClassesToElement(title, 'blog-post-title')
    title.innerHTML = postData.title
    div.appendChild(title)

    const content = document.createElement('p')
    content.innerHTML = postData.body
    div.appendChild(content)


    const update = document.createElement('button')
    addClassesToElement(update, 'btn', 'btn-info', 'editModal')
    update.setAttribute('uuid', `${postData.uuid}`)
    update.setAttribute('data-toggle', 'modal')
    update.setAttribute('data-target', '#editModal')
    update.innerHTML = 'update'
    div.appendChild(update)

    const deletor = document.createElement('button')
    addClassesToElement(deletor, 'btn-danger', 'btn')
    deletor.setAttribute('uuid', `${postData.uuid}`)
    deletor.innerHTML = 'delete'
    div.appendChild(deletor)

    return div
  }

  // impure method
  render(){
    const renderedPostsArray = this.items.map(post => Posts.renderCard(post))

    // modifying the DOM
    empty(this.elementToRenderIn)
    appendChildrenArray(this.elementToRenderIn, renderedPostsArray)
  }
}
