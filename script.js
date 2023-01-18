// document.addEventListener("DOMContentLoaded", initialize)

// function initialize(e) {
//     e.preventDefault()
// }

// let activityType 

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
        // activityType = data
        console.log(data)
    })
}


let search = document.querySelector('#activity-search');
search.addEventListener('submit', handleSearch)


function handleSearch(e) {
    e.preventDefault()
    const input = document.querySelector('#search')
    let type = input.value
    console.log(type)
    getActivity(type)
}


// function renderActivity(activity) {

// }