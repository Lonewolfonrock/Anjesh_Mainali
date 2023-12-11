import js from "../assets/Images/skillsimage/js.png"
import py from "../assets/Images/skillsimage/python.png"
import react from "../assets/Images/skillsimage/atom.png"
import firebase from "../assets/Images/skillsimage/firebase.png"
import typescript from "../assets/Images/skillsimage/typescript.png"
import aws from "../assets/Images/skillsimage/aws.png"
import mysql from "../assets/Images/skillsimage/mysql.png"
import java from "../assets/Images/skillsimage/java.png"
import git from "../assets/Images/skillsimage/git.png"
export function Skildata(){
    return(
        <>
    <div className="innercontent">
    <h1  id="skills">Skills</h1>
    <div className="skills">
        <ul className="icon-list">
            <li className="icons">
                <ul className="iconstack"><img src={js} alt="" className="images" id="js"/><p>Javascript</p></ul>
                <ul className="iconstack"><img src={py} alt="" className="images" id="py"/><p>Python</p></ul>
                <ul className="iconstack"><img src={react} alt="" className="images" id="re"/><p>React</p></ul>
                <ul className="iconstack"><img src={firebase} alt="" className="images" id="fi"/><p>Firebase</p></ul>
                <ul className="iconstack"><img src={typescript} alt="" className="images" id="ty"/><p>Typescript</p></ul>
                <ul className="iconstack"><img src={aws} alt="" className="images" id="aw"/><p>AWS</p></ul>
                <ul className="iconstack"><img src={mysql} alt="" className="images" id="my"/><p>Mysql</p></ul>
                <ul className="iconstack"><img src={java} alt="" className="images" id="my"/><p>Java</p></ul>
                <ul className="iconstack"><img src={git} alt="" className="images" id="my"/><p>Git</p></ul>
                <ul className="iconstack"><img src={js} alt="" className="images" id="js"/><p>Javascript</p></ul>
                <ul className="iconstack"><img src={py} alt="" className="images" id="py"/><p>Python</p></ul>
                <ul className="iconstack"><img src={react} alt="" className="images" id="re"/><p>React</p></ul>
                <ul className="iconstack"><img src={firebase} alt="" className="images" id="fi"/><p>Firebase</p></ul>
                <ul className="iconstack"><img src={typescript} alt="" className="images" id="ty"/><p>Typescript</p></ul>
                <ul className="iconstack"><img src={aws} alt="" className="images" id="aw"/><p>AWS</p></ul>
                <ul className="iconstack"><img src={mysql} alt="" className="images" id="my"/><p>Mysql</p></ul>
                <ul className="iconstack"><img src={java} alt="" className="images" id="my"/><p>Java</p></ul>
                <ul className="iconstack"><img src={git} alt="" className="images" id="my"/><p>Git</p></ul>
            </li>

        </ul>
    </div>
    </div>
        </>

    )



    
}