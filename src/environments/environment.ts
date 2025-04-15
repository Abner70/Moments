// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    baseApiUrl: 'http://localhost:3333'  ////banco adonis
  };
  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

  export const API_PATH = "https://my-json-server.typicode.com/EduAraujoLima/cursos-mock/"  //// API externa Eduardo

  export const API_PATH_Local = "http://localhost:3000/" ////servidor local que eu criei   db.json, é necessário adicionar uma dependencia no 
  // package.json-> ""server": "json-server --watch db.json"" para utilizar o banco de dados local e ele entender que é uma API

  