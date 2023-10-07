import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) {}

  apiUrlRole = 'http://localhost:3000/role';
  apiUrlPays = 'http://localhost:3000/pays';
  apiUrlUser = 'http://localhost:3000/user';
  apiUrlFournisseur = 'http://localhost:3000/fournisseur';
  apiUrlProduit = 'http://localhost:3000/produit';
  apiUrlCommande = 'http://localhost:3000/commande';
  apiUrlCategorie = 'http://localhost:3000/categorie';
  apiUrlLivraison = 'http://localhost:3000/livraison';
  apiUrlLigneDeCommande = 'http://localhost:3000/lignedecommande';
  apiUrlCommandeEtat = 'http://localhost:3000/commandeetat';

  //-----------------ROLE---------------------------
  getAllDataRole():Observable<any> { return this._http.get(`${this.apiUrlRole}`); }
  createDataRole(data:any):Observable<any> { return this._http.post(`${this.apiUrlRole}`, data); }
  updateDataRole(id: any, data: any): Observable<any> {
    let url = `${this.apiUrlRole}/${id}`;
    return this._http.put(url, data);
  }
  deleteDataRole(id:any):Observable<any> { 
    let ids = id;
    return this._http.delete(`${this.apiUrlRole}/${ids}`);
  }
  getSingleDataRole(id:any):Observable<any> {
    let ids = id;
    return this._http.get(`${this.apiUrlRole}/${ids}`);
  }

  //-----------------PAYS---------------------------
  getAllDataPays():Observable<any> { return this._http.get(`${this.apiUrlPays}`); }
  createDataPays(data:any):Observable<any> { return this._http.post(`${this.apiUrlPays}`, data); }
  updateDataPays(id: any, data: any): Observable<any> {
    let url = `${this.apiUrlPays}/${id}`;
    return this._http.put(url, data);
  }
  deleteDataPays(id:any):Observable<any> { 
    let ids = id;
    return this._http.delete(`${this.apiUrlPays}/${ids}`);
  }
  getSingleDataPays(id:any):Observable<any> {
    let ids = id;
    return this._http.get(`${this.apiUrlPays}/${ids}`);
  }

  //-----------------COMMANDE ETAT----------------------------
  getAllDataCommandeEtat():Observable<any> { return this._http.get(`${this.apiUrlCommandeEtat}`); }
  createDataCommandeEtat(data:any):Observable<any> { return this._http.post(`${this.apiUrlCommandeEtat}`, data); }
  updateDataCommandeEtat(id: any, data: any): Observable<any> {
    let url = `${this.apiUrlCommandeEtat}/${id}`;
    return this._http.put(url, data);
  }
  deleteDataCommandeEtat(id:any):Observable<any> { 
    let ids = id;
    return this._http.delete(`${this.apiUrlCommandeEtat}/${ids}`);
  }
  getSingleDataCommandeEtat(id:any):Observable<any> {
    let ids = id;
    return this._http.get(`${this.apiUrlCommandeEtat}/${ids}`);
  }

  //-----------------CATEGORIES----------------------------
  getAllDataCategorie():Observable<any> { return this._http.get(`${this.apiUrlCategorie}`); }
  createDataCategorie(data:any):Observable<any> { return this._http.post(`${this.apiUrlCategorie}`, data); }
  updateDataCategorie(id: any, data: any): Observable<any> {
    let url = `${this.apiUrlCategorie}/${id}`;
    return this._http.put(url, data);
  }
  deleteDataCategorie(id:any):Observable<any> { 
    let ids = id;
    return this._http.delete(`${this.apiUrlCategorie}/${ids}`);
  }
  getSingleDataCategorie(id:any):Observable<any> {
    let ids = id;
    return this._http.get(`${this.apiUrlCategorie}/${ids}`);
  }

  //-----------------USERS----------------------------
  getAllDataUser():Observable<any> { return this._http.get(`${this.apiUrlUser}`); }
  createDataUser(data:any):Observable<any> { return this._http.post(`${this.apiUrlUser}`, data); }
  updateDataUser(id: any, data: any): Observable<any> {
    let url = `${this.apiUrlUser}/${id}`;
    return this._http.put(url, data);
  }
  deleteDataUser(id:any):Observable<any> { 
    let ids = id;
    return this._http.delete(`${this.apiUrlUser}/${ids}`);
  }
  getSingleDataUser(id:any):Observable<any> {
    let ids = id;
    return this._http.get(`${this.apiUrlUser}/${ids}`);
  }

  //-----------------FOURNISSEURS----------------------------
  getAllDataFournisseur():Observable<any> { return this._http.get(`${this.apiUrlFournisseur}`); } 
  createDataFournisseur(data:any):Observable<any> { return this._http.post(`${this.apiUrlFournisseur}`, data); }
  updateDataFournisseur(id: any, data: any): Observable<any> {
    let url = `${this.apiUrlFournisseur}/${id}`;
    return this._http.put(url, data);
  }
  deleteDataFournisseur(id:any):Observable<any> { 
    let ids = id;
    return this._http.delete(`${this.apiUrlFournisseur}/${ids}`);
  }
  getSingleDataFournisseur(id:any):Observable<any> {
    let ids = id;
    return this._http.get(`${this.apiUrlFournisseur}/${ids}`);
  }

  //-----------------PRODUITS----------------------------
  getAllDataProduit():Observable<any> { return this._http.get(`${this.apiUrlProduit}`); }
  createDataProduit(data:any):Observable<any> { return this._http.post(`${this.apiUrlProduit}`, data); }
  updateDataProduit(id: any, data: any): Observable<any> {
    let url = `${this.apiUrlProduit}/${id}`;
    return this._http.put(url, data);
  }
  deleteDataProduit(id:any):Observable<any> { 
    let ids = id;
    return this._http.delete(`${this.apiUrlProduit}/${ids}`);
  }
  getSingleDataProduit(id:any):Observable<any> {
    let ids = id;
    return this._http.get(`${this.apiUrlProduit}/${ids}`);
  }

  //-----------------COMMANDES----------------------------
  getAllDataCommande():Observable<any> { return this._http.get(`${this.apiUrlCommande}`); }
  createDataCommande(data:any):Observable<any> { return this._http.post(`${this.apiUrlCommande}`, data); }
  updateDataCommande(id: any, data: any): Observable<any> {
    let url = `${this.apiUrlCommande}/${id}`;
    return this._http.put(url, data);
  }
  deleteDataCommande(id:any):Observable<any> { 
    let ids = id;
    return this._http.delete(`${this.apiUrlCommande}/${ids}`);
  }
  getSingleDataCommande(id:any):Observable<any> {
    let ids = id;
    return this._http.get(`${this.apiUrlCommande}/${ids}`);
  }

  //-----------------LIVRAISONS----------------------------
  getAllDataLivraison():Observable<any> { return this._http.get(`${this.apiUrlLivraison}`); }
  createDataLivraison(data:any):Observable<any> { return this._http.post(`${this.apiUrlLivraison}`, data); }
  updateDataLivraison(idFourniseur: any, idProduit: any, data: any): Observable<any> {
    return this._http.put(`${this.apiUrlLivraison}/${idFourniseur}/${idProduit}`, data);
  }
  deleteDataLivraison(idFourniseur: any, idProduit: any):Observable<any> {
    return this._http.delete(`${this.apiUrlLivraison}/${idFourniseur}/${idProduit}`);
  }
  getSingleDataLivraison(idFourniseur: any, idProduit: any):Observable<any> {
    return this._http.get(`${this.apiUrlLivraison}/${idFourniseur}/${idProduit}`);
  }

  //-----------------COMMANDE DETAILS----------------------------
  getAllDataLigneDeCommande():Observable<any> { return this._http.get(`${this.apiUrlLigneDeCommande}`); }
  createDataLigneDeCommande(data:any):Observable<any> { return this._http.post(`${this.apiUrlLigneDeCommande}`, data); }
  updateDataLigneDeCommande(idProduit: any, idCommande: any, data: any): Observable<any> {
    return this._http.put(`${this.apiUrlLigneDeCommande}/${idProduit}/${idCommande}`, data);
  }
  deleteDataLigneDeCommande(idProduit: any, idCommande: any):Observable<any> {
    return this._http.delete(`${this.apiUrlLigneDeCommande}/${idProduit}/${idCommande}`);
  }
  getSingleDataLigneDeCommande(idProduit: any, idCommande: any):Observable<any> {
    return this._http.get(`${this.apiUrlLigneDeCommande}/${idProduit}/${idCommande}`);
  }

  // Define the getUserByRole method
  getUserByRole(role: string): Observable<any> {
    // Make the HTTP request to fetch the users by role
    return this._http.get<any>(`http://localhost:3000/user?role=${role}`);
  }
}
