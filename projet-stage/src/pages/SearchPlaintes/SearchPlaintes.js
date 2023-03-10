 import React, { useState } from 'react'
import './SearchPlaintes.css'

export default function SearchPlaintes() {
  const [id1,setId1]=useState(0)
  const allplaintes=[
    {id:1,de:"name1",a:"provice d'el jadida",sujet:"sujet 1",reponce:"reponce 1",comment:"comment 1"},
    {id:2,de:"name2",a:"provice d'el jadida",sujet:"sujet 2",reponce:"",comment:""},
    {id:3,de:"name3",a:"provice d'el jadida",sujet:"sujet 3",reponce:"reponce 3",comment:"comment 3"},
    {id:4,de:"name4",a:"provice d'el jadida",sujet:"sujet 4",reponce:"reponce 4",comment:"comment 4"},
    {id:5,de:"name5",a:"provice d'el jadida",sujet:"sujet 5",reponce:"",comment:""}
  ]
  const afterfilter = allplaintes.filter(e=> e.id == id1)
  return(
    
    <div className='list aaa'>
      <div >
        <h1>Saisir une nouvelle plainte</h1>
    
        <table>
          <tr>
            <th >
              <button className='butt'>search</button>
            </th> 
            <td>
              <input placeholder="id de plaintes" name='id' value={id1} onChange={(e)=>setId1(e.target.value)}  type="text" className='input'/>
            </td>
          </tr>
        </table>
        <br/><br/>
        <table >
        <tr>
          <th>id</th>
          <th>de</th>
          <th>a</th>
          <th>sujet</th>
          <th>reponce</th>
          <th>commentaires</th>
        </tr>
        {
          afterfilter.map((e,index)=>{
            return(
              <tr key={index}>
                <td>{e.id}</td>
                <td>{e.de}</td>
                <td>{e.a}</td>
                <td>{e.sujet}</td>
                <td>{e.reponce}</td>
                <td>{e.comment}</td>
              </tr>
            )
          })
        }

      </table>
        
      </div>
    </div>
  )
  
}
