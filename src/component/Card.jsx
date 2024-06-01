import React from 'react'
import { useEffect,useState } from 'react';
export const Card = (props) => {
    const modalId = `movieModal-${props.id}`;
    
  return (

    <>
     <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12  " key={props.id}>
          <div
            className="card bg-dark bg-gradient text-white"
            style={{ marginBottom: "20px" }}
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <img
              src={props.img}
              className="card-img-top"
              alt={props.title}
            />
            <div className="card-body ">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.realese}</p>
              <a
                href="#"
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target={`#${props.modal}`}
              >
                Details
              </a>
            </div>
          </div>

          <div
            className="modal fade"
            id={modalId}
            tabIndex="-1"
            aria-labelledby={`${props.modal}Label`}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id={`${props.modal}Label`}>
                    {props.title}
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <img
                          src={props.img}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md">
                        <ul className="list-group">
                          <li className="list-group-item">
                            <h4>{props.title}</h4>
                            {props.realese}
                          </li>
                          <li className="list-group-item">{props.overview}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    
    
    </>
  )
}
