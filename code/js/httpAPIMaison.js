/*
 * Couche de services HTTP pour API ____(worker). 
 *
 * @author Brodard Clara
 * date: 06.06.2023
 * version: 1
 */
class HttpService {
  constructor() {}

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
  login(identifiant, successCallback) {
	// Uploade votre propre fichier PHP et adaptez l'URL ci-dessous.
    let url = "https://anapioficeandfire.com/api/houses";
    let param = "name=" + identifiant.name + 
      "&region="+identifiant.region + "&coatOfArms=" + identifiant.coatOfArms + 
      "&words="+identifiant.words+ "&titles="+ identifiant.titles+ "&seats="+ identifiant.seats+
      "&currentLord="+ identifiant.currentLord+ "&titles="+ identifiant.titles+ "&overlord="+ identifiant.overlord+ 
      "&founded="+ identifiant.founded+ "&diedOut="+ identifiant.diedOut+ "&ancestralWeapons="+ identifiant.ancestralWeapons;

    // envoi de la requête
    $.ajax(url, {
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      data: param,
      success: successCallback
    });
  }
}
