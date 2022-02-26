import {Component, OnInit} from '@angular/core';
import {GithubService} from "../github.service";
import {Repository} from "../repository";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  repos$: Observable<Repository[]> | undefined;

  constructor(private githubService: GithubService) {
  }

  ngOnInit(): void {
    this.repos$ = this.githubService.getRepos()
      .pipe(
        map(repos => repos.filter(repo => !repo.fork))
      );
  }

}
