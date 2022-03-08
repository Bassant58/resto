import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Meal } from '../model/meal';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
 FevArray:Meal[]=[]
 MainFavArray=new Subject<any>()


  sendfev(id:any):Observable<Meal>{
    const headers = new HttpHeaders({
      Authorization: localStorage.getItem('toke')??""
    })
    return this.Http.post<Meal>(environment.Api+'add-fav',id,{headers});
  }

  getFev(){
    const headers = new HttpHeaders({
      Authorization: localStorage.getItem('toke')??""
    })
    this.Http.get<Meal[]>(environment.Api+'get-fav',{headers}).subscribe(
      (next)=>{
        this.MainFavArray.next(next)
      },
      (error)=>{console.log(error)}
    );
  }

  deleteFev(id:any):Observable<Meal>{
    const headers = new HttpHeaders({
      Authorization: localStorage.getItem('toke')??""
    })
    return this.Http.post<Meal>(environment.Api+`delete-fav/${id}`,'blog',{headers});
  }

  addToLocalFev(meal: Meal){
    var index = this.FevArray.findIndex((x) => x.id == meal.id);
    if (index === -1) {
      this.FevArray.push(meal);
    }
    const res = this.FevArray;
    return res;
  }

  delFromLocalFev(meal: Meal){
    this.FevArray.splice(this.FevArray.indexOf(meal), 1);
  }

  constructor(private Http: HttpClient) { }
}
