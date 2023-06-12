/*
  But :     controleur de la vue maison
  Auteur : Brodard Clara
  Date :   06.06.2023 / V1.0
*/
class maisonCtrl {
  constructor() {
    // Ajouter un écouteur par bouton. On est obligé de le faire là car l'objet n'est pas connu dans le html si on le fait directement dans l'html
    // bouton maison et personnages
    $("#affichePersonnages").click(() => {
      this.allerPersonnages();
    });
    this.afficherMaison();
  }
  afficherMaison() {
    console.log(httpApiM.jsonM);
    let tab = httpApiM.jsonM;


    tab.forEach(element => {
      $("#afficherMaison").append(
        "<div class='afficheMaison'>"+
        "<p id='nomMaison'>" + element.name + "</p>"+
        "<p>Region : "+element.region+"</p>" +
        "<p>Armoiries : "+element.coatOfArms+"</p>"+
        "<p>Armoiries : "+element.coatOfArms+"</p>"+
        "<p>Citation : "+element.words+"</p>"+
        "<p>Fondation : "+element.founded+"</p>"+
        "</div>");
      console.log(element.name);
    });
  }
  

  allerPersonnages() {
    indexCtrl.loadPersonnages();
  }
}
