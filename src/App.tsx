import React, { useState } from "react";
import "./styles.css";

// Написать компонент (ФК или классы), показывающий вот такую структуру:

interface Props {
  id: number;
  text: string;
  children?: Array<Props>;
  onChange?: (selectedOptions: Array<Props>) => void;
  selectedOptions?: Array<Props>;
}


let comments: Props[] = [
  {
    id: 1,
    text: "message 1",
    children: [
      {
        id: 3,
        text: "message 3"
      }
    ]
  },
  {
    id: 2,
    text: "message 2",
    children: [
      {
        id: 4,
        text: "message 4",
        children: [
          {
            id: 7,
            text: "message 7"
          },
          {
            id: 8,
            text: "message 8"
          }
        ]
      },
      {
        id: 5,
        text: "message 5"
      }
    ]
  }
];

// + message 1
// - message 2
//   + message 4
//     message 5

export function ListChild({...props}: Props) {
  return (<div>
    {props.children && 
      <a href='#'> + <ListChild {...props.children} /></a> 
    } {props.text}
    </div>);
}

export default function App() {

  const [selectedOptions, setOptions] = useState<Props[]>([]);

  return <>
    <h1>Toppings</h1>
    <ListChild 
      children={comments} 
      onChange={(selectedOptions) => setOptions(selectedOptions)}
      selectedOptions={selectedOptions} 
    />
  </>;
}



