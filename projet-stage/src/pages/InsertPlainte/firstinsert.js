/*import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {handlAPlain, handlCommentPlain, handlDePlain, handleAllPlaintes, handlIdPlain, handlReponsePlain, handlSujetPlain} from "../../redux/actions/plainteAction"
import { Link } from 'react-router-dom'
import axios from 'axios'
import connection from './database'

export default function InsertPlainte() {
  const dispatch=useDispatch()
  
  const idplain = useSelector((state)=>state.idplain);
  const deplain = useSelector((state)=>state.deplain);
  const aplain=useSelector((state)=>state.aplain);
  const sujetplain=useSelector((state)=>state.sujetplain);
  const reponseplain = useSelector((state)=>state.reponseplain);
  const commentplain = useSelector((state)=>state.commentplain);
  
  function handleid(e){
    dispatch(handlIdPlain(e.target.value))
  }
  function handleDe(e){
    dispatch(handlDePlain(e.target.value))
  }
  function handlea(e){
    dispatch(handlAPlain(e.target.value))
  }
  function handlesujet(e){
    dispatch(handlSujetPlain(e.target.value))
  }
  function handlereponse(e){
    dispatch(handlReponsePlain(e.target.value))
  }
  function handlecomment(e){
    dispatch(handlCommentPlain(e.target.value))
  }

  function ajouterplaintes(e){
    e.preventDefalt();
    const plainte = {
      id:idplain,
      de:deplain,
      a:aplain,
      sujet:sujetplain,
      reponse:reponseplain,
      comment:commentplain
    };
    axios.post("http://localhost:3001/insertPlaintes",plainte).
    then(res=>{
      console.log(res.data);
      dispatch(handleAllPlaintes(res.data));
      dispatch(handlIdPlain(""));
      dispatch(handlDePlain(""));
      dispatch(handlAPlain(""));
      dispatch(handlSujetPlain(""));
      dispatch(handlReponsePlain(""));
      dispatch(handlCommentPlain(""));
    }).catch(err=>{
      console.log(err);
    });

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
              <input placeholder="id" name='id'  type="text" className='input' value={idplain} onChange={(e)=>handleid(e)}/>
            </td>
          </tr>

          <tr>
            <th className='plain'><label>de </label></th>
            <th className='plain'>:</th>
            <td>
              <input type="text" name="de" value={deplain} onChange={(e)=>handleDe(e)} placeholder="de" className='input' />
            </td>
          </tr>
          <tr>
            <th className='plain'><label>à</label></th>
            <th className='plain'>:</th>
            <td>
              <input type="text" name="a" value={aplain}  onChange={(e)=>handlea(e)} placeholder='à' className='input'/>
            </td>
          </tr>
          <tr>
            <th className='plain'>
              <label>le sujet </label>
            </th>
            <th className='plain'>:</th>
            <td>
              <textarea rows="3" name='sujet' value={sujetplain}  onChange={(e)=>handlesujet(e)} className='input' placeholder="le sujet de plainte" ></textarea>
            </td>
          </tr>
          <tr>
            <th className='plain'>
              <label>La réponse </label>
            </th>
            <th className='plain'>:</th>
            <td>
              <textarea rows="3" name='reponse' value={reponseplain}  onChange={(e)=>handlereponse(e)} className='input'  placeholder="la reponse de plainte" ></textarea>
            </td>
          </tr>
          <tr>
            <th className='plain'>
              <label>commentaires </label>
            </th>
            <th className='plain'>:</th>
            <td>
              <textarea rows="3" name='comment' value={commentplain}  onChange={(e)=>handlecomment(e)} className='input' placeholder="les commentaires" ></textarea>
            </td>
          </tr>
        </table>
        <Link to="/afficherplaintes">
          <button type='submit' >Submit</button>
        </Link>
        </form>
      </div>
    </div>
  )
}
*/