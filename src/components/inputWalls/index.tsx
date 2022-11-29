import { inputWallProps } from '../../types/inputTypes';
import Input from '../input';



export default function InputWall({ wall, setWall }: inputWallProps) {
  return (
    <Input
      label="Width"
      value={wall.width}
      setValue={(value) => setWall({ ...wall, width: value })}
    />
  );
}
