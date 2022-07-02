import {ChangeEvent, useState} from "react";

type FullInputPropsType = {

  addTitle: (title: string) => void
}

export const FullInput = (props: FullInputPropsType)=> {
  let [title, setTitle] = useState('')

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  }

 function onClickButtonHandler() {
   props.addTitle(title)
   setTitle('')
  }

  return (
      <div>
        <input onChange={onChangeInputHandler} value={title} />
        <button onClick={onClickButtonHandler}>+</button>
      </div>
  )

}

