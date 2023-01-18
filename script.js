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
    .then(data => {renderActivity(data)
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


function renderActivity(activity) {
    const result = document.createElement('li')
    result.classname = 'activity'
    result.innerHTML = `
    Activity: ${activity.activity} <br/>
    Type: ${activity.type} <br/>
    Price: ${activity.price} <br/>
    Number of Participants: ${activity.participants} <br/>
    <br/>
    `
    const activities = document.querySelector('#activities')
    activities.append(result)
}

// function activityError() {

// }

// if (activity exists){
//     renderActivity(data)
// } else {
//    activityError()
// }