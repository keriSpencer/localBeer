let container = document.querySelector('.container')

const data = fetch(
  'https://crossorigin.me/http://api.brewerydb.com/v2/locations?key=36e4387da3868d7fc4da189845062e33&locality=tampa'
)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.data.length; i++) {
      let brewery = data.data[i].brewery

      let breweryNameDiv = document.createElement('div')
      container.appendChild(breweryNameDiv)

      if (brewery.website == undefined) {
        let text = document.createElement('p')
        text.innerHTML = brewery.name
        breweryNameDiv.appendChild(text)
      } else {
        let link = document.createElement('a')
        link.href = brewery.website
        link.innerHTML = brewery.name
        breweryNameDiv.appendChild(link)
      }
    }
  })
