import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-server-route',
  templateUrl: './server-route.component.html',
  styleUrls: ['./server-route.component.css']
})
export class ServerRouteComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("querParam : ",this.route.snapshot.queryParams);
    console.log("fragment : ",this.route.snapshot.fragment);
    this.route.queryParams.subscribe();
    this.route.fragment.subscribe();
  }

  onReloadPage(){
    //this.router.navigate(['servers']); //router.navigate dont know where the current path is. so localhost:4200/servers
    //this.router.navigate(['servers'],{relativeTo: this.route}); //error becuse now know the current routerpath
    this.router.navigate(['/servers'],{relativeTo: this.route});
  }

  onNavigatePage(){
    this.router.navigate(['/servers', "4", "edit"], {relativeTo : this.route});
  }

  onNavigatePageQueryParams(){
    this.router.navigate(['/servers',"4","edit"], {queryParams :{allowedit: '1'}, fragment : 'loading'});
  }

}
