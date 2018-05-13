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
