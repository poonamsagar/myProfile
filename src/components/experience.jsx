import React, { Component } from 'react';


class Experience extends Component{
    render(){
    return(
<div className="experience">
<h3 className="text-center cv-heading">PROFESSIONAL EXPERIENCE SUMMARY </h3>
<hr/>
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Company</th>
      <th scope="col">Duration</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Emart Solutions Pvt Ltd.</td>
      <td>1-August-2014 to 20-June-2016</td>
      <td>Bengaluru, India</td>
    </tr>
  </tbody>
</table>
<div>
<h3 className="text-center">Training and Certification</h3>
<ul>
<li> Certification and training in manual and automation testing from Testing Campus,
Bengaluru, India.</li>
<li>Certification and training in HTML5 Programming from NIIT Bengaluru, India.</li>
<li>Certification in Java/J2EE from Testing Campus Bengaluru, India.</li>
</ul>
<p>During these trainings, I gained good experience in: -
</p>
<ol><li>Software Development Life Cycle (SDLC).</li>
<li>Various types of software testing and its process</li>
<li>HTML5, CSS3, JavaScript based front end development.</li>
<li>Knowledge of JavaScript based frameworks such as ReactJs, jQuery.</li>
</ol>
<p>Agile process –
</p>
<ul>
    <li>Attending PI planning and PI activities.</li>
    <li>Attending daily standup meetings.</li>
    <li>Attending planning poker activity.</li>
    <li>Good in analyzing burn down chart.</li>
    <li>Attending scrum meetings.</li>
    <li>Understanding user stories and estimating.</li>
</ul>
<p>I believe in continuous learning. I am currently learning ReactJs and working on projects based on
ReactJs. Some of my projects can be found on GitHub.</p>
</div>
</div>





    );
    
    }
}
export default Experience;