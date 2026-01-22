# Weather Monitoring Dashboard (SEN Assignment)

## 1. Project Overview
This project is a simple Weather Monitoring system designed to demonstrate the full Software Development Life Cycle (SDLC).

## 2. SDLC Phases

### Phase 1: Requirement Analysis
- **Functional Requirements:** The system must record city weather data (City, Temp, Condition) and provide a summary.
- **Nomenclature defined:** `WeatherRecord`, `weatherList`, `addRecord()`, `getSummary()`.

### Phase 2: Design
- **Architecture:** Object-Oriented Logic with an In-Memory Data Store.
- **Data Model:** - `id`: Unique Identifier
  - `cityName`: String
  - `temperature`: Number
  - `condition`: String

### Phase 3: Implementation
The project is implemented in JavaScript. The code strictly follows the nomenclature defined in the design phase.

### Phase 4: Testing
Manual unit testing was performed by verifying the `weatherList` length after adding records.

### Phase 5: Deployment
The project is version-controlled using Git and hosted on GitHub.

## 3. How to Run
1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Run the command: `node weatherMonitor.js`
3. 
