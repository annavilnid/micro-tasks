import {Button} from "./Button";
import {useState} from "react";

type MainType = {
  title?: string
  cars: Array<CarsType>
}

type CarsType = {
  manufacturer:string
  model: string
}

export const Main = (props: MainType) => {
  let [a, setA] = useState(1)


  const sayHello = (name: string) => console.log(name)

  const foo1 = () => {console.log(100200)}

  const foo2 = (value: number) => {console.log(value)}

  const foo3 = (name: string) => {console.log(name)}

  const foo4 = () => {console.log('I am stupid button')}

  const foo5 = () => {
    setA(++a);
    console.log(a)
  }

  const foo6 = () => {
    setA(0);
    console.log(a)
  }

  return (
    <>
      <h2>{props.title}</h2>
      <table>
        <thead>
          <tr>
            <th>manufacturer</th>
            <th>model</th>
          </tr>
        </thead>
        <tbody>
        {props.cars.map((el, index) => {
          return (
            <tr key={index+1}>
              <td>{el.manufacturer}</td>
              <td>{el.model}</td>
            </tr>
          )
        })
        }
        </tbody>
      </table>
      <button onClick={(e) =>sayHello("Vasya")}>Первая кнопка</button>
      <button onClick={(e) =>sayHello("Petya")}>Первая кнопка</button>
      <button onClick={foo1}>1</button>
      <button onClick={((e) =>foo2(100200))}>2</button>
      <Button name={'universal button-1'} callBack={()=>foo3("Anna")} />
      <Button name={'universal button-2'} callBack={()=>foo3("Mary")}/>
      <Button name={'stupid button'} callBack={foo4}/>
      <Button name={a} callBack={foo5}/>
      <Button name={'zero button'} callBack={foo6}/>
    </>
  )
}