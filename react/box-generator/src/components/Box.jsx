import React, {useState} from "react";

const Box = () =>{

let [color, setcolor] = useState("")

let [boxes, setboxes] = useState([])

const addBox = (e)=>{
    e.preventDefault();

    let boxObj = {color};
    // copies the array of boxes and adds the most recently submitted box color
    return setboxes([...boxes, boxObj])
}


    return(
        <div>
            <div>
                <form onSubmit={addBox} >
                    <label htmlFor="addColor">Pick a Color Add a Box!  </label>
                    <input onChange={(e)=>setcolor(e.target.value)} type="text"/>
                    <input type="submit" value="add box" />
                </form>
            </div>
            {
                boxes.map((box, index)=>{
                    return(
                        <div>
                            <p style={{backgroundColor: box.color, height: 100, width: 100, margin: 20}}></p>
                        </div>
                        
                    )
                })
            }

        </div>
    )

}


export default Box