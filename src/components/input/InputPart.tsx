import {ChangeEvent} from "react";

type InputPartPropsType= {
  title: string
  setTitle: (title: string) => void
}

export const InputPart = (props: InputPartPropsType) => {

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.setTitle(event.currentTarget.value)
  }

  return (
    <div>
      <input onChange={onChangeInputHandler} value={props.title}/>
  {/*    <input onChange={onChangeInputHandler} value={title} />*/}
    </div>
  )

}