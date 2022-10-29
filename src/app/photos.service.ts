import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type PhotoResponse = {
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
};

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private httpClient: HttpClient) {}

  public getPhoto() {
    return this.httpClient.get<PhotoResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID Ae3WtmA9lKvQLxlCMSVYQN996vnO-CrXzg9eIfBnbeM',
      },
    });
  }
}
