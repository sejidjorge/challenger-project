import { SetStateAction } from 'react';

export interface InputProps {
  label: string;
  value?: number;
  setValue: (
    value: number
  ) => void | React.Dispatch<SetStateAction<number | undefined>>;
}
