import { Component, OnInit } from '@angular/core';
import {GithubService} from "../github.service";
import {User} from "../user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  user$: Observable<User> | undefined;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.user$ = this.githubService.getUser();
  }

}
