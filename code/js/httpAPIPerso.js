/*
 * Couche de services HTTP (worker). 
 *
 * @author Brodard Clara
 * date: 06.06.2023
 * version: 1
 */
class HttpAPIPersos {
  jsonP;
  constructor() {

    this.jsonP = null;

    this.getAPI(((data) => {
      this.jsonP = data;
      indexCtrl.loadPersonnages();

    }));

  }

  /*
  **  $.ajaxSetup permet de définir une fois un élément sans le refaire par la suite. Ici cela se fait l'error
  */
  centraliserErreurHttp(httpErrorCallbackFn) {
    $.ajaxSetup({
      error: function (xhr, exception) {
        let msg;
        if (xhr.status === 0) {
          msg = "Pas d'accès à la ressource serveur demandée !";
        } else if (xhr.status === 404) {
          msg = "Page demandée non trouvée [404] !";
        } else if (xhr.status === 500) {
          msg = "Erreur interne sur le serveur [500] !";
        } else if (exception === "parsererror") {
          msg = "Erreur de parcours dans le JSON !";
        } else if (exception === "timeout") {
          msg = "Erreur de délai dépassé [Time out] !";
        } else if (exception === "abort") {
          msg = "Requête Ajax stoppée !";
        } else {
          msg = "Erreur inconnue : \n" + xhr.responseText;
        }
        httpErrorCallbackFn(msg);
      },
    });
  }

  /*
  */
  getAPI(successCallback) {

    $.ajax({
      type: "GET",
      url: "https://thronesapi.com/api/v2/Characters",
      success: successCallback
    });

  }
}
