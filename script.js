let activities
let result

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
    getActivities()


const search = document.querySelector('#activity-search');
search.addEventListener('submit', handleSearch)


    function handleSearch(e) {
        e.preventDefault()
        const input = document.querySelector('#search')
        let inputValue = input.value.toLowerCase()
        if (inputValue === '') {
            alert ("Please enter a search type.")
        } else if (inputValue === 'education' || inputValue === 'recreational' || inputValue === 'social' || inputValue === 'diy' || inputValue === 'charity' || inputValue === 'cooking' || inputValue === 'relaxation' || inputValue === 'music' || inputValue === 'busywork') {
            getActivitiesByInput(inputValue)
        } else {
            alert("Please enter a valid activity type.")
        }
        clearInput()
    }


    function getActivitiesByInput(inputValue) {
        let correctActivities = activities.filter(activity => activity.type === inputValue);
        correctActivities.forEach(activity => renderActivity(activity))
    }


    function clearInput() {
        document.querySelector('#activity-search').reset()
    }
    

    function renderActivity(activity) {
        result = document.createElement('li')
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


const removeAll = document.querySelector('#removeAll')
removeAll.addEventListener('click', () => {
    let allActivities = document.querySelector('#activities')
    allActivities.innerHTML = ''
})


const darkmode = document.querySelector('#darkmode')
darkmode.addEventListener('mouseover', () => {
    const header = document.querySelector('#header')
    header.style.backgroundColor = '#503E62'
    const main = document.querySelector('#main')
    main.style.backgroundColor = '#3E8383'
    const body = document.querySelector('body')
    body.style.backgroundImage = 'url(https://media.istockphoto.com/id/1209030907/vector/abstract-triangular-background.jpg?s=612x612&w=0&k=20&c=WL6sXFy_wr1z7Yk_lPbJ2Zhd2EjoM1eomgCN8C05Q6U=)'
})


const lightmode = document.querySelector('#lightmode')
lightmode.addEventListener('mouseover', () => {
    const header = document.querySelector('#header')
    header.style.backgroundColor = 'rgb(170, 129, 209)'
    const main = document.querySelector('#main')
    main.style.backgroundColor = 'aquamarine'
    const body = document.querySelector('body')
    body.style.backgroundImage = 'url(https://img.freepik.com/free-vector/blank-white-notepaper-design-vector_53876-161340.jpg?w=2000)'

})