console.log('loading complete')

const fetch1 = (location, callback) => { 
    fetch("/weather?address=" + location).then((response)=>{
    response.json().then((data) =>{
        if (data.error){
            callback(data.error, undefined)
            } 
        else {
           callback(undefined, data)
            }
        })
    })
}
    
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

if(messageOne){
    messageOne.textContent = 'From Javascript';
}

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch1(location,(error, response)=>{
        if(error){
            console.log(error)
            messageOne.textContent= error
        }
        else{
            console.log(response.location)
            messageOne.textContent= response.location
            messageTwo.textContent= response.forecast
        }
    })
})