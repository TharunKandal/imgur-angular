import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImgurService } from '../services/imgur.service';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css'],
})
export class ImageDetailsComponent implements OnInit {
  imageDetails: any;
  constructor(
    private route: ActivatedRoute,
    private imgurService: ImgurService
  ) {}

  id: any;
  url: any;

  ngOnInit(): void {
    this.url = `https://api.imgur.com/3/image/${this.route.snapshot.paramMap.get(
      'id'
    )}`;
    this.imageDetails = this.imgurService.getImages(this.url).subscribe({
      next: (album: { data: any }) => {
        this.imageDetails = album.data;
      },
      error: (err: any) => console.log(err),
    });
  }
}
