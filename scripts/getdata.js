import fetch from 'node-fetch';
import * as fs from 'fs';
import dotenv from 'dotenv';
dotenv.config()

let geoJ = {
    "type": "FeatureCollection",
    "features": []
}

fetch('https://realty-mole-property-api.p.rapidapi.com/saleListings?state=SC&city=Columbia&propertyType=Single%20Family', {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'realty-mole-property-api.p.rapidapi.com',
            'x-rapidapi-key': process.env.apikey
        }
    })
    .then(response => response.json())
    .then(myBlob => {
        createGeoJ(myBlob)
    });

function createGeoJ(arObj) {
    arObj.map(x => geoJ.features.push({
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [x.longitude, x.latitude]
        },
        "properties": {
            "price": x.price,
            "city": x.city,
            "bedrooms": x.bedrooms,
            "bathrooms": x.bathrooms,
            "sqFt": x.squareFootage,
            "address": x.formattedAddress
        }
    }))
    writeToFile(geoJ)
}

function writeToFile(data) {
    fs.writeFile('data/property-results.geojson', JSON.stringify(data), err => {
        if (err) {
            console.error(err)
            return
        } else {
            console.log('process completed')
        }
    })
}