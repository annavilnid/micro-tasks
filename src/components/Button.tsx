type ButtonType = {
  name: string | number
  callBack: () => void
}
export const Button = (props: ButtonType) => {

  const onClickHandler = () => {
    props.callBack()
  }


  return (
    <button onClick={onClickHandler}>{props.name}</button>
  )
}