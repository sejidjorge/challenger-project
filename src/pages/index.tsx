/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';
import { Button } from '../components/button';
import { CardBody, CardBodyResult, CardLoad } from '../components/card';
import {
  ContainerCards,
  ContainerContent,
  FormStyled,
} from '../components/container';
import InputWall from '../components/inputWall';
import { LoadingCircle } from '../components/loading';
import { Label, Title } from '../components/typograph';
import { wall } from '../types/inputTypes';
import { returnTypes } from '../types/returnTypes';

export default function Home() {
  const [stage, setStage] = useState('INITIAL');
  const [wallOne, setWallOne] = useState<wall>({} as wall);
  const [wallTwo, setWallTwo] = useState<wall>({} as wall);
  const [wallThree, setWallThree] = useState<wall>({} as wall);
  const [wallFour, setWallFour] = useState<wall>({} as wall);
  const [result, setResult] = useState<returnTypes>({
    majorPaintCanQuantity: 0,
    mediumPaintCanQuantity: 0,
    minorPaintCanQuantity: 0,
    smallPaintCanQuantity: 0,
  });

  const wallsConfig = [
    {
      title: 'Wall 01',
      value: wallOne,
      setValue: setWallOne,
    },
    {
      title: 'Wall 02',
      value: wallTwo,
      setValue: setWallTwo,
    },
    {
      title: 'Wall 03',
      value: wallThree,
      setValue: setWallThree,
    },
    {
      title: 'Wall 04',
      value: wallFour,
      setValue: setWallFour,
    },
  ];

  async function calcPaintNeed() {
    setStage('LOAD');
    try {
      const body = {
        walls: [
          {
            wall: wallOne,
          },
          {
            wall: wallTwo,
          },
          {
            wall: wallThree,
          },
          {
            wall: wallFour,
          },
        ],
      };
      const { data } = await axios.post('/api/amount', body);
      console.log(body);
      
      setResult(data);
      setStage('RESULT');
    } catch (error: any) {
      window.alert(error.message);
      Reset();
    }
  }

  function Reset() {
    setStage('INITIAL');
    setWallOne({} as wall);
    setWallTwo({} as wall);
    setWallThree({} as wall);
    setWallFour({} as wall);
    setResult({} as returnTypes);
  }

  function ViewStages() {
    switch (stage) {
      case 'INITIAL':
        return (
          <FormStyled>
            <ContainerCards>
              {wallsConfig.map(({ title, value, setValue }) => (
                <CardBody key={title}>
                  <InputWall title={title} wall={value} setWall={setValue} />
                </CardBody>
              ))}
            </ContainerCards>
            <Button onClick={calcPaintNeed}>Submit</Button>
          </FormStyled>
        );
      case 'LOAD':
        return (
          <CardLoad>
            <LoadingCircle />
          </CardLoad>
        );

      case 'RESULT':
        return (
          <>
            <CardBodyResult>
              <Label>
                You need:
                <br />
                {result?.majorPaintCanQuantity > 0 && (
                  <>
                    <span>
                      {result?.majorPaintCanQuantity === 1
                        ? `${result?.majorPaintCanQuantity} can 18 liters`
                        : `${result?.majorPaintCanQuantity} cans 18 liters `}
                    </span>
                    <br />
                  </>
                )}
                {result?.mediumPaintCanQuantity > 0 && (
                  <>
                    <span>
                      {result?.mediumPaintCanQuantity === 1
                        ? `${result?.mediumPaintCanQuantity} can 3,6 liters`
                        : `${result?.mediumPaintCanQuantity} cans 3,6 liter`}
                    </span>
                    <br />
                  </>
                )}
                {result?.minorPaintCanQuantity > 0 && (
                  <>
                    <span>
                      {result?.minorPaintCanQuantity === 1
                        ? `${result?.minorPaintCanQuantity} can 2,5 liters`
                        : `${result?.minorPaintCanQuantity} cans 2,5 liters`}
                    </span>
                    <br />
                  </>
                )}
                {result?.smallPaintCanQuantity > 0 && (
                  <>
                    <span>
                      {result?.smallPaintCanQuantity === 1
                        ? `${result?.smallPaintCanQuantity} can 0,5 liters`
                        : `${result?.smallPaintCanQuantity} cans 0,5 liters`}
                    </span>
                    <br />
                  </>
                )}
              </Label>
            </CardBodyResult>
            <Button onClick={Reset}>Return</Button>
          </>
        );
      default:
        break;
    }
  }

  return (
    <div>
      <Head>
        <title>Challenger Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContainerContent>
        <Title>Paint Calculator</Title>
        {ViewStages()}
      </ContainerContent>
    </div>
  );
}
