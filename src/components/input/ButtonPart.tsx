import {useState} from "react";

/*type FullInputPropsType = {

  addTitle: (title: string) => void
}
*!/*/

import {stringify} from "querystring";

type ButtonPartPropsType = {
  name?: string
  callback: ()=> void
}
export const ButtonPart = (props: ButtonPartPropsType) => {

  function onClickButtonHandler() {
    props.callback()
  }

  return (
    <div>
      <button onClick={onClickButtonHandler}>+</button>
    </div>
  )

}
