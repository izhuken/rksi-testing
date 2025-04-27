export class Slider {
  constructor() {
    this.currentImage = 0;
    this.imagesLength = 5;
  }

  next() {
    this.currentImage = (this.currentImage + 1) % this.imagesLength;
    return this.currentImage;
  }

  prev() {
    this.currentImage =
      (this.currentImage - 1 + this.imagesLength) % this.imagesLength;
    return this.currentImage;
  }
}
