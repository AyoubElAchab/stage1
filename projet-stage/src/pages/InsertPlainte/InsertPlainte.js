import React, { useState } from 'react'
import './InsertPlainte.css'

import { Link } from 'react-router-dom'

export default function InsertPlainte() {
  
  const [idplain,setIdplain]=useState(0)
  const [deplain,setDeplain]=useState("")
  const [aplain,setAplain]=useState("")
  const [sujetplain,setSujetplain]=useState("")
  const [reponseplain,setReponseplain]=useState("")
  const [commentplain,setCommentplain]=useState("") 

  function ajouterplaintes(e){
   

  }

  return (
    <div className='list'>
      <div >
        <h1>Saisir une nouvelle plainte</h1>
      <form onSubmit={ajouterplaintes}>
        <table>
          <tr>
            <th className='plain'><label>id de plainte</label></th>
            <th className='plain'>:</th>
            <td>
              <input placeholder="id" name='id'  type="text" className='input' value={idplain} onChange={e=>setIdplain(e.target.value)}/>
            </td>
          </tr>

          <tr>
            <th className='plain'><label>de </label></th>
            <th className='plain'>:</th>
            <td>
              <input type="text" name="de" value={deplain} onChange={(e)=>setDeplain(e.target.value)} placeholder="de" className='input' />
            </td>
          </tr>
          <tr>
            <th className='plain'><label>à</label></th>
            <th className='plain'>:</th>
            <td>
              <input type="text" name="a" value={aplain}  onChange={(e)=>setAplain(e.target.value)} placeholder='à' className='input'/>
            </td>
          </tr>
          <tr>
            <th className='plain'>
              <label>le sujet </label>
            </th>
            <th className='plain'>:</th>
            <td>
              <textarea rows="3" name='sujet' value={sujetplain}  onChange={(e)=>setSujetplain(e.target.value)} className='input' placeholder="le sujet de plainte" ></textarea>
            </td>
          </tr>
          <tr>
            <th className='plain'>
              <label>La réponse </label>
            </th>
            <th className='plain'>:</th>
            <td>
              <textarea rows="3" name='reponse' value={reponseplain}  onChange={(e)=>setReponseplain(e.target.value)} className='input'  placeholder="la reponse de plainte" ></textarea>
            </td>
          </tr>
          <tr>
            <th className='plain'>
              <label>commentaires </label>
            </th>
            <th className='plain'>:</th>
            <td>
              <textarea rows="3" name='comment' value={commentplain}  onChange={(e)=>setCommentplain(e.target.value)} className='input' placeholder="les commentaires" ></textarea>
            </td>
          </tr>
        </table>
        <Link to="/afficherplaintes">
          <button className='button-5' type='submit' >Submit</button>
        </Link>
        </form>
      </div>
    </div>
  )
}
