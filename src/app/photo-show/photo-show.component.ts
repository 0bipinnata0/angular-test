import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent implements OnInit {
  photoUrl?: string;
  constructor(private photoService: PhotosService) {
    this.#fetchNewPhoto();
  }

  onClick() {
    this.#fetchNewPhoto();
  }

  #fetchNewPhoto() {
    this.photoService.getPhoto().subscribe((v) => {
      this.photoUrl = v.urls.full;
    });
  }

  ngOnInit(): void {}
}
