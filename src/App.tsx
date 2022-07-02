import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Footer} from "./components/Footer";
import {NewComponent} from "./components/NewComponent";
import {FullInput} from "./components/FullInput";
import {InputPart} from "./components/input/InputPart";
import {Button} from "./components/Button";
import {ButtonPart} from "./components/input/ButtonPart";

export type ButtonType = 'ALL' | 'Dollars' | 'RUBLS' | ''

function App() {

  const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
  ]

  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])

  const [nameButton, setNameButton] = useState<ButtonType>('')

  let currentMoney = money;
  if (nameButton === 'Dollars') {
    currentMoney = money.filter((el) => el.banknots === 'Dollars')
  }  else if (nameButton === 'RUBLS') {
    currentMoney = money.filter((el) => el.banknots === 'RUBLS')
  }

  const onClickFilterHandler = (nameButton: ButtonType) => {
    setNameButton(nameButton);
  }

  const [messageList, setMessageList] = useState([
    {message: 'message1'},
    {message: 'message2'},
    {message: 'message3'},
    {message: 'message4'},
    {message: 'message5'}
  ])
  let [title, setTitle] = useState('')

  const addTitle = (title: string) => {
    let newMessage = {message: title}
    setMessageList([newMessage,...messageList])
  }

  const callbackButtonHandler = () => {
    addTitle(title)
    setTitle('')
  }

  return (
    <>
      <div className="container">
        <InputPart
          setTitle={setTitle}
          title={title}
        />
        <ButtonPart callback={callbackButtonHandler}/>
        {/*<FullInput addTitle={addTitle}/>*/}
        {messageList.map((el, index) => {
          return (
            <div key={index}>{el.message}</div>
          )
        })}
      </div>
      <Header title={'New Header'}/>
      <NewComponent
        currentMoney={currentMoney}
        onClickFilterHandler={onClickFilterHandler}
      />
      {/*<ul>*/}
      {/*  {currentMoney.map((el, index) => {*/}
      {/*    return (*/}
      {/*      <li key={index}>*/}
      {/*        <span> {el.banknots}</span>*/}
      {/*        <span> {el.value}</span>*/}
      {/*        <span> {el.number}</span>*/}
      {/*      </li>*/}
      {/*    )*/}
      {/*  })}*/}
      {/*</ul>*/}
      {/*<button onClick={(e) => onClickFilterHandler('ALL')}>ALL</button>*/}
      {/*<button onClick={(e) =>onClickFilterHandler('Dollars')}>Dollars</button>*/}
      {/*<button onClick={(e) =>onClickFilterHandler('RUBLS')}>RUBLS</button>*/}
      <Main
        title={'New Main'}
        cars={topCars}
      />
      <Footer title={'New Footer'}/>
    </>
  );
}

export default App;
