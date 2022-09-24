import React from 'react'
import { Card } from "react-bootstrap";
import { AiOutlineStar } from "react-icons/ai";
import { RiShareFill } from "react-icons/ri";
import {BsCircleFill } from "react-icons/bs"
import "./GithubCss.css"

const Overview = () => {
  return (
    <>
      <div className="overview d-flex justify-content-between gap-3 my-2">
                <div className="left w-100">
                    <Card className='abcd'>
                        <Card.Body>
                        <div className="cardLink d-flex justify-content-between">
                        <Card.Link href="#"><h6>Calculator</h6></Card.Link>
                        <p className="border rounded-pill px-2 fw-light">Public</p>
                        </div>
                        <div>
                            <p className="fw-light fs-6">Assingment Web and Mobile Course</p>
                        </div>
                        <div className="d-flex">
                           <p className="px-2"><BsCircleFill/> Javascript</p>
                           <p className="px-2"><AiOutlineStar/> 12</p>
                           <p className="px-2"><RiShareFill/> 6</p>
                        </div>
                        
                        </Card.Body>
                    </Card>
                </div>
                <div className="right w-100">
                <Card className='abcd'>
                        <Card.Body>
                        <div className="cardLink d-flex justify-content-between">
                        <a href="#"><h6>Calculator</h6></a>
                        <p className="border rounded-pill px-2 fw-light">Public</p>
                        </div>
                        <div>
                            <p className="fw-light fs-6">Assingment Web and Mobile Course</p>
                        </div>
                        <div className="d-flex">
                           <p className="px-2"><BsCircleFill/> Javascript</p>
                           <p className="px-2"><AiOutlineStar/> 13</p>
                           <p className="px-2"><RiShareFill/> 5</p>
                        </div>
                        
                        </Card.Body>
                    </Card>
                </div>
              </div>
    </>
  )
}

export default Overview
