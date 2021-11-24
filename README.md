# MAP675 Exercise 3 - Geospatial Processing with Turf.js
## Real Estate Finder Map

### Mission Statement
In this project my goal is to fetch current real estate data and write it to a file. Then do some further processing on the backend. On the frontend, I'd like a tool to tell you the average value of the real estate in a given area. 

### Data Sources
Realty Mole API - https://www.realtymole.com/api

### Process Outline
1. Build a backend Node application to grab data from the API endpoint and write it to a file.
2. Create a website that has an address locator and based on the search, will buffer that point by one mile to see what the average value of the homes for sale in that area are.

### Closing Thoughts
This simple project ended up being a lot more trouble than I had originally anticipated. I discovered that all of this data is very expensive to acquire right out of the gate. If one ever needs an indicator for just how lucrative the real estate investing industry is, look no further than an API service that charges $0.75 per call and only contains information on one property! I finally settled with just using the Realty Mole API, but I ran into another problem once I made that commitment. That API only returns 50 records per call. There was mention of using pagination to make multiple calls and stack the results in the Q&A threads, but I couldn't find any examples. I had to just settle with a simulation of what my app would be with a few example addresses.

Some good testing addresses are: 
* 604 S Waccamaw Ave
* 1312 Wellington Dr
* 1316 Haynesworth Rd

Idealy the listing data wouldn't be symbolized and it would only call for the listing surrounding the searched address. The API itself actually offers a service like that that can be encoded in the API itself, but for the purposes of completing the requirements of the assignment, I opted to do it "manually".