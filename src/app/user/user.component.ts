import {Component, computed, signal, Input, Output, EventEmitter} from '@angular/core';
import {DUMMY_USERS} from "../dummy-users";
import {User} from "./user.model";

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)


@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  //selectedUser = DUMMY_USERS[randomIndex] ;
//  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)
  @Input({required: true}) user!: User;
  @Input({required:true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();


  get imagePath(){
   // return 'assets/users/' + this.selectedUser().avatar;
     return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
//    const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)
//    this.selectedUser.set(DUMMY_USERS[randomIndex]);
      this.select.emit(this.user.id);
  }

}
