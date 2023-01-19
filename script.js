// document.addEventListener("DOMContentLoaded", initialize)

// function initialize(e) {
//     e.preventDefault()
// }

function getActivity(type) {
    fetch(`https://www.boredapi.com/api/activity?type=${type}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        },
        body: JSON.stringify()
    })
    .then(res => res.json())
    .then(data => {
       renderActivity(data)
    })
}
// clear previous data when submit is clicked again

let search = document.querySelector('#activity-search');
search.addEventListener('submit', handleSearch)

function handleSearch(e) {
    e.preventDefault()
    const input = document.querySelector('#search')
    let type = input.value
    console.log(type)
    getActivity(type)
    // for (i = 0; i < 5; i++) {
    //     getActivity(type)
    //     }
    //  if activity id exists, dont return it again
}


function renderActivity(activity) {
    const result = document.createElement('li')
    result.classname = 'activity'
    result.innerHTML = `
    Activity: ${activity.activity} <br/>
    Type: ${activity.type} <br/>
    Number of Participants: ${activity.participants} <br/>
    <br/>
    `
    const activities = document.querySelector('#activities')
    activities.append(result)
}

// crrate a function that allows search to be case insensitive
