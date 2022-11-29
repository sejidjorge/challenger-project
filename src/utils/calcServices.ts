import { measures, wallTypes } from '../types/typesStructures';

function wallArea({ wall }: wallTypes) {
  const { width, height, windows, doors } = wall;

  const area = width * height;

  const windowArea = windows * measures.windowHeight * measures.windowWidth;

  const doorArea = doors * measures.doorHeight * measures.doorWidth;

  return area - (windowArea + doorArea);
}

function validateWallArea(wall: wallTypes) {
  const area = wallArea(wall);

  if (area < 1 || area > 50) {
    throw new Error(
      'A área de uma parede deve ser entre 1 e 50 metros quadrados'
    );
  }
}

function calculatePaintArea({ wall }: wallTypes) {
  validateWallArea({ wall });

  const area = wallArea({ wall });

  return area / 5;
}

function calculateTotalPaint(walls: wallTypes[]) {
  return walls.reduce((previous: number, wall: wallTypes) => {
    return previous + calculatePaintArea(wall);
}, 0);
}

function calculatePaintCans(area: number) {
  const majorPaintCan = 18;
  const mediumPaintCan = 3.6;
  const minorPaintCan = 2.5;
  const smallPaintCan = 0.5;

  const majorPaintCanQuantity = Math.floor(area / majorPaintCan);
  const mediumPaintCanQuantity = Math.floor(
    (area % majorPaintCan) / mediumPaintCan
  );
  const minorPaintCanQuantity = Math.floor(
    ((area % majorPaintCan) % mediumPaintCan) / minorPaintCan
  );
  const smallPaintCanQuantity = Math.floor(
    (((area % majorPaintCan) % mediumPaintCan) % minorPaintCan) / smallPaintCan
  );

  return {
    majorPaintCanQuantity,
    mediumPaintCanQuantity,
    minorPaintCanQuantity,
    smallPaintCanQuantity,
  };
}

export { calculateTotalPaint, calculatePaintCans };
