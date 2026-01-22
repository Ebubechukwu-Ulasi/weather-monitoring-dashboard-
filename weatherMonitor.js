/**
 * Project: weather Monitoring Dashboard
 * Nomenclature: Matches SDLC Phase 1 & 2
 * /
 
class WeatherMonitor {
constructor () {
// Data Layer: Storage for our records
this.weatherList = [];
}

// Method: addRecord() - Captures data based on requirements
addRecord(cityName, temperature, condition) {
const record = {
id: this.weatherList.length + 1,
cityName: cityNmae,
temperature: temperature,
condition: condition.
timestamp: new Date()
};

this.weatherList.push(record);
console.log('Sucess: Record added for $ {cityName}. ');
return record;
}

// Method: geSummary() - Retrieves all records getSummary() {
console.log("---Weather Summary Report---");
return this.weatherList;
}

// Method: deleteRecord() - Removes a  record by ID
deleteRecord(id) {
this.weatherList =
this.weatherList.filer(record => record.id !==id);
console.log('Record ${id} deleted. ');
}
}

// --Implentation Execution ---
const myDashboard = new WeatherMonitor();
myDashboard.addRecord("Lagos", 32, "Sunny");
myDashboard.addRecord("Abuja", 28, "Cloudy");

console.log(myDashboard.getSummary());