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
        if (data.activity === undefined){
            alert("No activities match the search request. Try using one of the availble search types.") 
        } else {
            renderActivity(data)
        }
    })
    }

let search = document.querySelector('#activity-search');
search.addEventListener('submit', handleSearch)

function handleSearch(e) {
    e.preventDefault()
    const input = document.querySelector('#search')
    let type = input.value.toLowerCase()
    let dropDown = document.querySelector('#activitiesamount')
    let amountofActivities = dropDown.value
    for (let i = 0; i < amountofActivities; i++) {
        getActivity(type)
    }
    clearInput()
}

let result 

function renderActivity(activity) {
    result = document.createElement('li')
    result.classname = 'activity'
    result.innerHTML = `
    <div class="card">
        <div class="container">
            <br/>
            <h3>Activity:</h3> <p>${activity.activity}</p></h4><br/>
            <h3>Type:</h3> <p>${activity.type}</p></h4><br/>
            <h3>Participants:</h3> <p>${activity.participants}</p></h4><br/>
            <br/>
            <button id='btn'>Remove</button>
        </div>
    </div>
    `
    const activities = document.querySelector('#activities')
    activities.append(result)

    result.querySelector('#btn').addEventListener('click', () => result.remove())
}

function clearInput() {
    document.querySelector('#activity-search').reset()
}

