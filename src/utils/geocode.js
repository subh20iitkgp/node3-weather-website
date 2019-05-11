const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic3ViaDIwaWl0a2dwIiwiYSI6ImNqdjBxM2gyMTFtODg0ZHF4czZnZjJ5YzYifQ.I-Qj5Po4VHYt6npzpoiwxQ'
  
    request({ url, json: true }, (error, res) => {
        console.log(res.body.features)
        if (error) {
            callback('Unable to connect to location services!', undefined)
        }
        else if (res.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: res.body.features[0].center[1],
                longitude: res.body.features[0].center[0],
                location: res.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode