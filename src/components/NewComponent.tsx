import React from "react";
import {ButtonType} from "../App";
import {Button} from "./Button";

type NewComponentPropsType = {
  currentMoney: Array<CurrentMoneyType>
  onClickFilterHandler: (nameButton: ButtonType) => void
}

type CurrentMoneyType = {
  banknots: string
  value: number
  number: string
}

export const NewComponent = (props: NewComponentPropsType) => {
  return (
    <>
      <ul>
        {props.currentMoney.map((el, index) => {
          return (
            <li key={index}>
              <span> {el.banknots}</span>
              <span> {el.value}</span>
              <span> {el.number}</span>
            </li>
          )
        })}
      </ul>
      <Button name={'ALL'} callBack={()=>props.onClickFilterHandler("ALL")}/>
      <Button name={'Dollars'} callBack={()=>props.onClickFilterHandler("Dollars")}/>
      <Button name={'RUBLS'} callBack={()=>props.onClickFilterHandler("RUBLS")}/>
      {/*<button onClick={(e) =>props.onClickFilterHandler('ALL')}>ALL</button>*/}
      {/*<button onClick={(e) =>props.onClickFilterHandler('Dollars')}>Dollars</button>*/}
      {/*<button onClick={(e) =>props.onClickFilterHandler('RUBLS')}>RUBLS</button>*/}
    </>
  )
}
