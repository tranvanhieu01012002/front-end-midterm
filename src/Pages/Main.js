import React, { useEffect, useState } from 'react'
import Content from '../Components/Content'
import Header from '../Components/Header'
import PreLoad from '../Components/PreLoad'
import axios from 'axios'
import { Modal } from 'antd'
import ModalComponent from '../Components/ModalComponent'


export default function Main() {
    const API = "http://localhost:8000/api/vegetable";
    const [search,setSearch] = useState({
        name:"",
        min:"",
        max:""
    });
    const [type,setType] = useState({isLoaded:false,data:[]})
    const [data,setData]= useState({isLoaded:false,data:[]})
    const [isSubmit,setIsSubmit] = useState(false);
    
    useEffect(()=>{
        
         axios.get(`${API}?name=${search.name}&min=${search.min}&max=${search.max}`)
         .then(res=>setData(pre=>({...pre,isLoaded:true,data:res.data.data})))
    },[isSubmit]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/vegetable/count')
        .then(res=>setType(pre=>({...pre,isLoaded:true,data:res.data.data})))
    },[])
  return (
    <div>
        <PreLoad />
        <Header search = {search} isSubmit={isSubmit}  setIsSubmit={setIsSubmit} setSearch= {setSearch}/>
        {data.isLoaded ? data.data.length !== 0 ? <Content data={data.data}  /> :"No data" : "Loading...."}
        {type.isLoaded ? <ModalComponent data={type.data}/> :""}
    
    </div>
  )
}
