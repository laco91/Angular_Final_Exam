import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/_models/model_collector';
import { VisibilityService } from 'src/app/_services/visibility.service';
import { GalleryService } from 'src/app/_services/service_collector';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: Gallery[] = [];

  constructor(public visibility: VisibilityService,
              private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.visibility.showNavbar();
    this.visibility.hideSidebar();
    this.getImages();
  }

  getImages() {
    this.galleryService.getAllImages()
      .subscribe(data => this.images = data);
  }

}