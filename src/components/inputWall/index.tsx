import { inputWallProps } from '../../types/inputTypes';
import Input from '../input';
import { SubTitle } from '../typograph';

export default function InputWall({ wall, setWall, title }: inputWallProps) {
  return (
    <>
      <SubTitle>{title}</SubTitle>
      <Input
        label="Width"
        value={wall.width}
        setValue={(value) => setWall({ ...wall, width: value })}
      />
      <Input
        label="Height"
        value={wall.height}
        setValue={(value) => setWall({ ...wall, height: value })}
      />
      <Input
        label="Doors"
        value={wall.doors}
        setValue={(value) => setWall({ ...wall, doors: value })}
      />
      <Input
        label="Windows"
        value={wall.windows}
        setValue={(value) => setWall({ ...wall, windows: value })}
      />
    </>
  );
}
