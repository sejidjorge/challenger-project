export interface doorTypes {
  door: {
    width: number;
    heigth: number;
  };
}
export interface windowTypes {
  window: {
    width: number;
    heigth: number;
  };
}

export interface wallTypes {
  wall: {
    width: number;
    heigth: number;
    windows: windowTypes[];
    doors: doorTypes[];
  };
}
