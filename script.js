let activities
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
        .then(data => {
            activities = data
        })
    }

let search = document.querySelector('#activity-search');
search.addEventListener('submit', handleSearch)

    function handleSearch(e) {
        e.preventDefault()
        const input = document.querySelector('#search')
        let inputValue = input.value.toLowerCase()
        let correctActivities = activities.filter(activity => activity.type === inputValue)
        if (inputValue === '') {
            alert ("Please enter a search type.")
        } else if (inputValue === 'education') {
            correctActivities.forEach(activity => renderActivity(activity))
        } else if (inputValue === 'recreational') {
            correctActivities.forEach(activity => renderActivity(activity))
        } else if (inputValue === 'social') {
            correctActivities.forEach(activity => renderActivity(activity))
        } else if (inputValue === 'diy') {
            correctActivities.forEach(activity => renderActivity(activity))
        } else if (inputValue === 'charity') {
            correctActivities.forEach(activity => renderActivity(activity))
        } else if (inputValue === 'cooking') {
            correctActivities.forEach(activity => renderActivity(activity))
        } else if (inputValue === 'relaxation') {
            correctActivities.forEach(activity => renderActivity(activity))
        } else if (inputValue === 'music') {
            correctActivities.forEach(activity => renderActivity(activity))
        } else if (inputValue === 'busywork') {
            correctActivities.forEach(activity => renderActivity(activity))
        } else {
             alert("Please enter a valid activity type.")
        }
        clearInput()
        }
        
    function clearInput() {
        document.querySelector('#activity-search').reset()
    }
    
    function renderActivity(activity) {
        result = document.createElement('li')
        result.classname = 'activity'
        result.innerHTML = `
            <div class="container" id = 1++>
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
        const activitiesList = document.querySelector('#activities')
        activitiesList.append(result)    
    }

let removeAll = document.querySelector('#removeAll')
removeAll.addEventListener('click', () => {
    let allActivities = document.querySelector('#activities')
    allActivities.innerHTML = ''
})

let darkmode = document.querySelector('#darkmode')
darkmode.addEventListener('mouseover', () => {
    let header = document.querySelector('#header')
    header.style.backgroundColor = '#503E62'
    let main = document.querySelector('#main')
    main.style.backgroundColor = '#3E8383'
    let body = document.querySelector('body')
    body.style.backgroundImage = 'url(https://media.istockphoto.com/id/1209030907/vector/abstract-triangular-background.jpg?s=612x612&w=0&k=20&c=WL6sXFy_wr1z7Yk_lPbJ2Zhd2EjoM1eomgCN8C05Q6U=)'
})

let lightmode = document.querySelector('#lightmode')
lightmode.addEventListener('mouseover', () => {
    let header = document.querySelector('#header')
    header.style.backgroundColor = 'rgb(170, 129, 209)'
    let main = document.querySelector('#main')
    main.style.backgroundColor = 'aquamarine'
    let body = document.querySelector('body')
    body.style.backgroundImage = 'url(https://img.freepik.com/free-vector/blank-white-notepaper-design-vector_53876-161340.jpg?w=2000)'

})