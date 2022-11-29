import { SetStateAction } from 'react';

export type wall = {
  width: number;
  height: number;
  windows: number;
  doors: number;
};

export interface InputProps {
  label: string;
  value?: number;
  setValue: (
    value: number
  ) => void | React.Dispatch<SetStateAction<wall | undefined>>;
}

export interface inputWallProps {
  title: string;
  wall: wall;
  setWall: (
    value: wall
  ) => void | React.Dispatch<SetStateAction<wall | undefined>>;
}
