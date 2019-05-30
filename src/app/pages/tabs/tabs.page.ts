import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private authService: AuthenticationService, public router: Router) { }

  logout() {
    this.authService.logout();
    this.goHome();
  }

  goHome() {
    this.router.navigateByUrl('tabs/feed');
  }
  ngOnInit() {
  }

}
