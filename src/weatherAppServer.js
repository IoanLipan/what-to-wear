export class WeatherAppServer {
  randomLocation() {
    const locations = [
      "Kabul", "Tirana", "Algiers", "Andorra la Vella", "Luanda", "Saint John's",
      "Buenos Aires", "Yerevan", "Canberra", "Vienna", "Baku", "Nassau", "Manama",
      "Dhaka", "Bridgetown", "Minsk", "Brussels", "Belmopan", "Porto-Novo",
      "Thimphu", "La Paz", "Sarajevo", "Gaborone", "Brasília", "Bandar Seri Begawan",
      "Sofia", "Ouagadougou", "Bujumbura", "Phnom Penh", "Yaoundé", "Ottawa",
      "Praia", "Bangui", "N'Djamena", "Santiago", "Beijing", "Bogotá", "Moroni",
      "Kinshasa", "Brazzaville", "San José", "Yamoussoukro", "Zagreb", "Havana",
      "Nicosia", "Prague", "Copenhagen", "Djibouti", "Roseau", "Santo Domingo",
      "Dili", "Quito", "Cairo", "San Salvador", "Malabo", "Asmara", "Tallinn",
      "Addis Ababa", "Suva", "Helsinki", "Paris", "Libreville", "Banjul",
      "Tbilisi", "Berlin", "Accra", "Athens", "Saint George's", "Guatemala City",
      "Conakry", "Bissau", "Georgetown", "Port-au-Prince", "Tegucigalpa", "Budapest",
      "Reykjavik", "New Delhi", "Jakarta", "Tehran", "Baghdad", "Dublin",
      "Jerusalem", "Rome", "Kingston", "Tokyo", "Amman", "Astana", "Nairobi",
      "Tarawa", "Pristina", "Kuwait City", "Bishkek", "Vientiane", "Riga", "Beirut",
      "Maseru", "Monrovia", "Tripoli", "Vaduz", "Vilnius", "Luxembourg", "Skopje",
      "Antananarivo", "Lilongwe", "Kuala Lumpur", "Malé", "Bamako", "Valletta",
      "Majuro", "Nouakchott", "Port Louis", "Mexico City", "Palikir", "Chisinau",
      "Monaco", "Ulaanbaatar", "Podgorica", "Rabat", "Maputo", "Naypyidaw", "Windhoek",
      "Yaren District", "Kathmandu", "Amsterdam", "Wellington", "Managua",
      "Niamey", "Abuja", "Pyongyang", "Oslo", "Muscat", "Islamabad", "Ngerulmud",
      "Panama City", "Port Moresby", "Asunción", "Lima", "Manila", "Warsaw",
      "Lisbon", "Doha", "Bucharest", "Moscow", "Kigali", "Basseterre",
      "Castries", "Kingstown", "Apia", "San Marino"]

    const index = Math.floor(Math.random() * locations.length)
    const location = locations[index];

    return location;
  }
  // apiKey() {
  //   return "120c414439f98f2793a525cb2bf535e0";
  // }
}