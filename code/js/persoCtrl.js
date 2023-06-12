/*
  But :     controleur de la vue personnages
  Auteur : Brodard Clara
  Date :   06.06.2023 / V1.0
*/
class persoCtrl {
  constructor() {
    // Ajouter un écouteur par bouton. On est obligé de le faire là car l'objet n'est pas connu dans le html si on le fait directement dans l'html
    // bouton maison et personnages
    $("#afficheMaison").click(() => {
      this.allerMaison();
    });
    this.afficherPersonne();
  }

  afficherPersonne() {
    console.log(httpApiP.jsonP);
    let tab = httpApiP.jsonP;


    tab.forEach(element => {
      $("#afficherPero").append(
        "<div class='affichePerso'>"+
        "<p id='nom'>" + element.firstName + " " +element.lastName+ "</p>"+
        "<img src='" + element.imageUrl+"'width='100%'/>"+
        "<p>Titre : "+element.title+"</p>" +
        "<p>Famille : "+element.family+"</p>"+
        "<p>Nom complet : "+element.fullName+"</p>"+
        "</div>");
      console.log(element.firstName);
    });
  }

  allerMaison() {
    indexCtrl.loadMaison();
  }

}