import { useState } from 'react'
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import './App.css'



function App() {

  return (
    <Container>
      <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand d-md-none" href="#">
            
            Aperture
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasLabel">Aperture</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav flex-grow-1 justify-content-between">
                <li className="nav-item"><a className="nav-link" href="#">
                  
                </a></li>
                <li className="nav-item"><a className="nav-link" href="#">Tour</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Product</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Enterprise</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Support</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Pricing</a></li>
                <li className="nav-item"><a className="nav-link" href="#">
                  
                </a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
          <div className="col-md-6 p-lg-5 mx-auto my-5">
            <h1 className="display-3 fw-bold">Designed for engineers</h1>
            <h3 className="fw-normal text-muted mb-3">Build anything you want with Aperture</h3>
            <div className="d-flex gap-3 justify-content-center lead fw-normal">
              <a className="icon-link" href="#">
                Learn more
                
              </a>
              <a className="icon-link" href="#">
                Buy
                
              </a>
            </div>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            
          </div>
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            
          </div>
          <div className="text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            
          </div>
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            
          </div>
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            
          </div>
        </div>
      </main>
    </Container>
  )
}

export default App
