import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public hideMenu = true;
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  goUs() {
    this.router.navigate(['about-us']);
  }

  goContact() {
    this.router.navigate(['contact']);
  }

  goHome() {
    this.router.navigate(['']);
  }

  showMenu() {
    this.hideMenu = !this.hideMenu;
  }
}
