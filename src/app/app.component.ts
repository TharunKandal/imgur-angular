import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ImgurService } from './imgur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ImgurService],
})
export class AppComponent implements OnInit {
  title = 'imgur';
  images: any = [];
  url = 'https://api.imgur.com/3/gallery/hot/viral/day/0';

  constructor(
    private imgurService: ImgurService,
    private formBuilder: FormBuilder
  ) {}

  specsForm = new FormGroup({
    section: new FormControl('hot'),
    sort: new FormControl('viral'),
    period: new FormControl('day'),
  });

  ngOnInit() {
    this.getAlbum();
  }

  onSubmit() {
    console.log(this.specsForm.value);
  }

  handleChange() {
    console.log(this.specsForm.value);
    this.url = `https://api.imgur.com/3/gallery/${this.specsForm.value.section}/${this.specsForm.value.sort}/${this.specsForm.value.period}/0`;
    this.getAlbum();
  }

  getAlbum() {
    this.images = this.imgurService.getAlbum(this.url).subscribe({
      next: (album: { data: any }) => {
        this.images = album.data;
        this.images = this.images.filter((image: any) => {
          // console.log(image);
          return image.images && image.images[0].type !== 'video/mp4';
        });
        // console.log(this.images);
      },
      error: (err: any) => console.log(err),
    });
  }
}
