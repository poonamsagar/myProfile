import React, { Component } from 'react';


class Personal extends Component{
    render(){
    return(
<div className="Personal">
<h3 className="text-center cv-heading"> PERSONAL DOSSIER</h3>
<hr/>
<div>
<table class="table table-bordered">
  <tbody>
    
    <tr>
        <th scope="col">Languages Known</th>
        <td>English, Hindi</td>
    </tr>
    <tr>
        <th scope="col">Hobbies</th>
        <td>Painting, Listening music and Gardening</td>
    </tr>
  </tbody>
</table>

</div>

</div>




    );
    
    }
}
export default Personal;