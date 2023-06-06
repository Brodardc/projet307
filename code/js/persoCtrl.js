/*
  But :     controleur de la vue personnages
  Auteur : Brodard Clara
  Date :   06.06.2023 / V1.0
*/
class persoCtrl {
  constructor() {
    // Ajouter un écouteur par bouton. On est obligé de le faire là car l'objet n'est pas connu dans le html si on le fait directement dans l'html
    // bouton maison et personnages
    $("#compte-valider").click(() => {
      this.validerCompte();
    });
    $("#compte-retour").click(() => {
      this.retourLogin();
    });
  }


}