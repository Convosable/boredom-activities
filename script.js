let array =[]
let result

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
            }
        })
    }

let search = document.querySelector('#activity-search');
search.addEventListener('submit', handleSearch)


    function handleSearch(e) {
        e.preventDefault()
        const input = document.querySelector('#search')
        let inputValue = input.value.toLowerCase()
        let dropDown = document.querySelector('#activitiesamount')
        let amountofActivities = dropDown.value
        for (let i = 0; i < amountofActivities; i++) {
            getActivity(inputValue)
        }
        clearInput()
        }

    function clearInput() {
        document.querySelector('#activity-search').reset()
    }
    
let showResults = document.querySelector('#show')
showResults.addEventListener('click', displayResults)

    function displayResults() {
        if (array.length < 1){
            alert('Submit an activity type first!')
        } else {
        array.forEach(activity => renderActivity(activity))
        array.length = 0
        }
    }

    function renderActivity(activity) {
        result = document.createElement('li')
        result.classname = 'activity'
        result.innerHTML = `
            <div class="container" id = ${activity.key}>
            <br/>
            <h3>Activity:</h3> 
            <p>${activity.activity}</p>
            <h3>Type:</h3> 
            <p>${activity.type}</p>
            <h3>Participants:</h3> 
            <p>${activity.participants}</p>
            <br/>
            </div>
        `
        const activities = document.querySelector('#activities')
        activities.append(result)
    }

let removeAll = document.querySelector('#removeAll')
removeAll.addEventListener('click', () => {
    let allActivities = document.querySelector('#activities')
    allActivities.innerHTML = ''
})

