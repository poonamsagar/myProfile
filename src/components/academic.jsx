import React, { Component } from 'react';


class Academic extends Component{
    render(){
    return(
<div className="Academic">
<h3 className="text-center cv-heading"> ACADEMIC RECORD</h3>
<hr/>
<div>
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Qualification</th>
      <th scope="col">Subject</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bachelor of Technology</td>
      <td>Electrical & Electronics Engineering</td>
     
    </tr>
    <tr>
    <td>Standard XII / Higher Secondary</td>
    <td>Physics/Chemistry/Mathematics
    </td>
    </tr>
    <td>S.S.C (X)</td>
    <td>Science/ Mathematics</td>

  </tbody>
</table>

</div>

</div>




    );
    
    }
}
export default Academic;