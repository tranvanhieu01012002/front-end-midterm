import React from 'react'
import { ProgressBar } from './ProgressBar'

export default function Header(props) {
    const handlerInput = (e)=>{
        const {name,value} = e.target;
        props.setSearch(pre=>({...pre,[name]:value}))
    }
    const handlerSubmit = (e )=>{
        e.preventDefault();
        props.setIsSubmit(!props.isSubmit);
    }
    
  return (
    <div>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <i className="fas fa-film mr-2" />
          Catalog-Z
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link nav-link-1 active" aria-current="page" href="index.html">Photos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-2" href="videos.html">Videos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-3" href="about.html">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-4" href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="tm-hero d-flex justify-content-center align-items-center" data-parallax="scroll" data-image-src="%PUBLIC_URL%/img/hero.jpg">
      <form onSubmit={handlerSubmit}>
       <div  className="d-flex tm-search-form">
       <input onChange={handlerInput} value={props.search.min} name='min' className="form-control tm-search-input" type="number" placeholder="Min" aria-label="Search" />
       <input onChange={handlerInput}  value={props.search.max} name='max' className="form-control tm-search-input" type="number" placeholder="Max" aria-label="Search" />
       <input name='name' onChange={handlerInput}  value={props.search.name} className="form-control tm-search-input" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success tm-search-btn" type="submit">
          <i className="fas fa-search" />
        </button>
       </div>
      </form>
    </div>

  </div>
  
  )
}
