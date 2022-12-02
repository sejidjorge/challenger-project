import { useEffect, useState } from 'react';
import { inputWallProps } from '../../types/inputTypes';
import Input from '../input';
import { Error, SubTitle } from '../typograph';

export default function InputWall({ wall, setWall, title }: inputWallProps) {
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    if (wall.height < 2.1) {
      setError('A parede deve ter altura minima de 2,10m');
    } else {
      setError(null);
    }
  }, [wall]);

  return (
    <>
      <SubTitle>{title}</SubTitle>
      <Input
        label="Width"
        value={wall.width}
        setValue={(value) => setWall({ ...wall, width: Number(value) })}
      />
      <Input
        label="Height"
        value={wall.height}
        setValue={(value) => setWall({ ...wall, height: Number(value) })}
      />
      {error && <Error>{error}</Error>}
      <Input
        label="Doors"
        value={wall.doors}
        setValue={(value) => setWall({ ...wall, doors: Number(value) })}
      />
      <Input
        label="Windows"
        value={wall.windows}
        setValue={(value) => setWall({ ...wall, windows: Number(value) })}
      />
    </>
  );
}
