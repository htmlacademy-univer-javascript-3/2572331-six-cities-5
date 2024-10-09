import { CreateMainPage } from '../pages/mainPage';

type AppProps = {
  placeCardsCount: number;
};

export function CreateApp({placeCardsCount} : AppProps) {
  return(
    <CreateMainPage placeCardsCount={placeCardsCount}/>
  );
}
