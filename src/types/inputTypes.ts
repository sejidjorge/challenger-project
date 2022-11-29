import { SetStateAction } from 'react';

export type wall = {
  width: string;
  height: string;
  windows: string;
  doors: string;
};

export interface InputProps {
  label: string;
  value?: string;
  setValue: (
    value: string
  ) => void | React.Dispatch<SetStateAction<wall | undefined>>;
}

export interface inputWallProps {
  title: string;
  wall: wall;
  setWall: (
    value: wall
  ) => void | React.Dispatch<SetStateAction<wall | undefined>>;
}
