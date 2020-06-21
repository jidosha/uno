import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private firestore: AngularFirestore) { 
    this.getGame();
  }

  getGame() {
    return this.firestore.collection('game').doc('joshGame').snapshotChanges().subscribe(res => {
      console.log('GameService.getGame', res.payload.data());
    });
  }
}
