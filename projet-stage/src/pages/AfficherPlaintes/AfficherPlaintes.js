import React from 'react'
import './AfficherPlaintes.css'
export default function AfficherPlaintes() {
  let total = 5
const allplaintes=[
  {id:1,de:"name1",a:"provice d'el jadida",sujet:"sujet 1",reponce:"reponce 1",comment:"comment 1"},
  {id:2,de:"name2",a:"provice d'el jadida",sujet:"sujet 2",reponce:"",comment:""},
  {id:3,de:"name3",a:"provice d'el jadida",sujet:"sujet 3",reponce:"reponce 3",comment:"comment 3"},
  {id:4,de:"name4",a:"provice d'el jadida",sujet:"sujet 4",reponce:"reponce 4",comment:"comment 4"},
  {id:5,de:"name5",a:"provice d'el jadida",sujet:"sujet 5",reponce:"",comment:""}
]
  return (
    <div className='list aaa'>
      <div>
      <h1>All plaintes</h1>
      <h2>nombre de plaintes : {total} </h2>
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
          allplaintes.map((e,index)=>{
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
