let container = document.querySelector('.container')

const data = fetch(
  'https://crossorigin.me/http://api.brewerydb.com/v2/locations?key=36e4387da3868d7fc4da189845062e33&locality=tampa'
)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.data.length; i++) {
      let breweryName = data.data[i].brewery.name

      let breweryNameDiv = document.createElement('div')
      container.appendChild(breweryNameDiv)

      // let text = document.createElement('p')
      // text.innerHTML = breweryName
      // breweryNameDiv.appendChild(text)

      if (data.data[i].website == undefined) {
        let text = document.createElement('p')
        text.innerHTML = breweryName
        breweryNameDiv.appendChild(text)
      } else {
        let link = document.createElement('a')
        link.href = data.data[i].website
        link.innerHTML = breweryName
        breweryNameDiv.appendChild(link)
      }

      // console.log(data.data[i].website)
    }
  })
