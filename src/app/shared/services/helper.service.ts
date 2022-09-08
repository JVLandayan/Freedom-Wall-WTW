import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor() {}

  uniqueIdGenerator(): number {
    return Math.floor(Math.random() * Date.now());
  }
}
