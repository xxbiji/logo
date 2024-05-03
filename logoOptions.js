fetchLogos().then(list => {
  const container = document.querySelector('.body')

  function createImage(item) {
    return `<div class="image-wrapper">
  <img class="image" src="${item.url}" />  
  <span class="image-label">${item.label}</span>
</div>`
  }

  container.innerHTML = list.map(item => createImage(item)).join('')
})
