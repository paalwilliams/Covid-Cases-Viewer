# Covid Case Viewer

This project was completed for the coding challenge given by Aaron AI.

The application consists of a React application, as well as a backend API using Nest.JS.

## Running the Application

```
$ cd covid-case-api
$ npm install
$ npm run start:dev


<!-- In a separate terminal window -->

$ cd covid-case-ui
$ npm install
$ npm run start

```

The API runs by default on port 3000, and the UI will run on port 3001.

## Endpoint Documentation

### Healthcheck

> URL: `/healthcheck` </br>
> Method: GET
> </br>
> Returns: The status of the Nest.JS service.

---

### Death Endpoints

> URL: `/deaths/<country>` </br>
> Method: GET
> </br>
> Params: country
> </br>
> Returns: A summary of total covid death information for a given country.

```
 Acceptable Parameter Values:

 country: ["Germany", "Deutschland"]
```

---

> URL: `/deaths/<country>/latest/<dayRange>` </br>
> Method: GET
> </br>
> Params: country, dayRange
> </br>
> Returns: A summary of covid death information for a given country for the last `<dayRange>` days.

```
Acceptable Parameter Values:

country: ["Germany", "Deutschland"]

dayRange: A number between 1 and 364
```

---

> URL: `/deaths/<country>/<state>`</br>
> Method: GET
> </br>
> Params: country, state
> </br>
> Returns: A summary of total covid death information for a given country and state.

```
Acceptable Parameter Values:

country: ["Germany", "Deutschland"]

state: [ Hamburg, HH, Schleswig-Holstein, SH, Niedersachsen, NI, Bremen, HB, Nordrhein-Westfalen, NW, Hessen, HE, Rheinland-Pfalz, RP, Berlin, BE, Bayern, BY, Baden-Württemberg, BW, Sachsen, SN, Thüringen, TH, Sachsen-Anhalt, ST, Brandenburg, BB, Mecklenburg-Vorpommern, MV, Saarland, SL]
```

---

> URL: `/deaths/<country>/<state>/latest/<dayRange>` </br>
> Method: GET
> </br>
> Params: country, state, dayRange
> </br>
> Returns: A summary of latest covid death information for a given country for the last `<dayRange>` days.

```
Acceptable Parameter Values:

country: ["Germany", "Deutschland"]

dayRange: A number between 1 and 364

state: [ Hamburg, 'HH', 'Schleswig-Holstein', 'SH', Niedersachsen, 'NI', Bremen, 'HB', 'Nordrhein-Westfalen', 'NW', Hessen, 'HE', 'Rheinland-Pfalz', 'RP', Berlin, 'BE', Bayern, 'BY', 'Baden-Württemberg', 'BW', Sachsen, 'SN', Thüringen, 'TH', 'Sachsen-Anhalt', 'ST', Brandenburg, 'BB', 'Mecklenburg-Vorpommern', 'MV', Saarland, 'SL']
```

---

### Case Endpoints

> URL: `/cases/<country>` </br>
> Method: GET
> </br>
> Params: country
> </br>
> Returns: A summary of totalcovid case information for a given country.

```
 Acceptable Parameter Values:
 country: ["Germany", "Deutschland"]
```

---

> URL: `/cases/<country>/latest/<dayRange>`</br>
> Method: GET
> </br>
> Params: country, dayRange
> </br>
> Returns: A summary of covid case information for a given country for the last `<dayRange>` days.

```
Acceptable Parameter Values:

country: ["Germany", "Deutschland"]

dayRange: A number between 1 and 364
```

---

> URL: `/cases/<country>/<state>`</br>
> Method: GET
> </br>
> Params: country, state
> </br>
> Returns: A summary of total covid case information for a given country and state.

```
Acceptable Parameter Values:

country: ["Germany", "Deutschland"]

state: [ Hamburg, HH, Schleswig-Holstein, SH, Niedersachsen, NI, Bremen, HB, Nordrhein-Westfalen, NW, Hessen, HE, Rheinland-Pfalz, RP, Berlin, BE, Bayern, BY, Baden-Württemberg, BW, Sachsen, SN, Thüringen, TH, Sachsen-Anhalt, ST, Brandenburg, BB, Mecklenburg-Vorpommern, MV, Saarland, SL]
```

---

> URL: `/cases/<country>/<state>/latest/<dayRange>` </br>
> Method: GET
> </br>
> Params: country, state, dayRange
> </br>
> Returns: A summary of latest covid case information for a given country and satate for the last `<dayRange>` days.

```
Acceptable Parameter Values:

country: ["Germany", "Deutschland"]

dayRange: A number between 1 and 364

state: [ Hamburg, 'HH', 'Schleswig-Holstein', 'SH', Niedersachsen, 'NI', Bremen, 'HB', 'Nordrhein-Westfalen', 'NW', Hessen, 'HE', 'Rheinland-Pfalz', 'RP', Berlin, 'BE', Bayern, 'BY', 'Baden-Württemberg', 'BW', Sachsen, 'SN', Thüringen, 'TH', 'Sachsen-Anhalt', 'ST', Brandenburg, 'BB', 'Mecklenburg-Vorpommern', 'MV', Saarland, 'SL']
```

---

## Additional Information

The endpoints are also documented using Swagger:

[Swagger API Documentation](http://localhost:3000/api)
