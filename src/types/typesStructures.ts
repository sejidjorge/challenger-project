export const measures = {
  windowHeight: 1.2,
  windowWidth: 2,
  doorHeight: 1.9,
  doorWidth: 0.8,
};

export interface wallTypes {
  wall: {
    width: number;
    height: number;
    windows: number;
    doors: number;
  };
}
