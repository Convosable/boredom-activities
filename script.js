let array =[]
let result

document.addEventListener('DOMContentLoaded', getActivities)

    function getActivities() {
        fetch(`http://localhost:3000/activities`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
            body: JSON.stringify()
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }


let search = document.querySelector('#activity-search');
search.addEventListener('submit', handleSearch)


    function handleSearch(e) {
        e.preventDefault()
        const input = document.querySelector('#search')
        let inputValue = input.value.toLowerCase()
        let dropdownValue = document.querySelector('#activitiesamount').value
        if (inputValue === '') {
            alert ("Please enter a search type.")
        } else {
            for (let i = 0; i < dropdownValue; i++) {
                getActivity(inputValue)
            }
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