import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-camera-test',
  templateUrl: './camera-test.component.html',
  styleUrls: ['./camera-test.component.css']
})
export class CameraTestComponent implements OnInit {

  public webcamImage : WebcamImage = null;
  imgurl = 'assets/images/users/default-image.png';
  fileurl = '';
  photo: any;  
  image: File;
  private trigger: Subject<void> = new Subject<void>();

cameraOn: boolean = false;
  imageDetails = {
    id: 0,
    file: []
  }


  
 
  constructor() { }

  ngOnInit() {
  }

  onSelectFile(event) {    
    if (event.target.files && event.target.files[0]) {
            let temp = event.target.files[0];
            let extension = temp.name.split('.')[1];
            if (extension.toLowerCase() == "jpg" || extension.toLowerCase() == "gif" || extension.toLowerCase() == "png" || extension.toLowerCase() == "jpeg") {
                this.image = event.target.files[0];
              //  this.userDetails.image = event.target.files[0];
                this.imageDetails.file = event.target.files[0];
                this.photo = event.target.files[0]; 
               // console.log("image file==" + this.userDetails.image)
                var reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]); // read file as data url
                reader.onload = (event: any) => { // called once readAsDataURL is completed 
                   this.imgurl = event.target.result;
                    console.log("this.imgurl==" + this.imgurl)
                }      
      }      else {
                alert("Unsupported fileformat");
            }    
    } 

    console.log("this.imgurl : ", this.imgurl);
    console.log("onselectfile : " ,event.target.files[0]);
   }

  toggleCamera() {
    this.cameraOn = !this.cameraOn
  }


  public handleImage(webcamImage): void {
    this.webcamImage = webcamImage;
    this.imgurl = webcamImage.imageAsDataUrl
    this.photo = this.imgurl;
    //this.userDetails.image = this.photo;
    const date = new Date().valueOf();
    let text = '';
    const possibleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      text += possibleText.charAt(Math.floor(Math.random() * possibleText.length));
    }
    // Replace extension according to your media type
    const imageName = date  + text + '.jpeg';
    var blob = new Blob([this.imgurl], { type: 'image/png' });
    var file: any = new File([blob], imageName);
    // this.userDetails.image = file;
    this.cameraOn = false;


    console.log("this.imgurl : ", this.imgurl);
    console.log("file : ",file);
  }


  public triggerSnapshot(): void {
    this.trigger.next();

  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

}
