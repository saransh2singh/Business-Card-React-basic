import React from "react";
import '../index.css'

export default function Intro(){
    return (
        <div className="box">
            <img src="photo.jpg" className="img"></img>
            <div className="details">
            <p className="name">Saransh Singh</p>
            <p className="role">Frontend Developer</p>
            </div>
            <div className="buttons">
            <button className="btn btn1">Email</button>
            <button className="btn btn2">Linkedin</button>
            </div>
        </div>
    )
}