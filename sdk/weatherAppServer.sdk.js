/**
* This is an auto generated code. This code should not be modified since the file can be overwriten
* if new genezio commands are executed.
*/

import { Remote } from "./remote.js"

export class WeatherAppServer {
  static remote = new Remote("http://127.0.0.1:8083/WeatherAppServer")

  static async randomLocation() {
    return WeatherAppServer.remote.call("WeatherAppServer.randomLocation")
  }

  static async apiKey() {
    return WeatherAppServer.remote.call("WeatherAppServer.apiKey")
  }

}
