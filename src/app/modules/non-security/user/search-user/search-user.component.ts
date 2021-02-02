import { Component, OnInit } from '@angular/core';
import { User } from '@models';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {
  public user: User;
  public isSearch: boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log('search user it work')
  }

  search() : void {
    this.isSearch = !this.isSearch
  }

}
