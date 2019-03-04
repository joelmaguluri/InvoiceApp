import React, { Component } from 'react';
var tbox={
 width:"60%",
 height:"60%",
 marginTop:"5%",
}
var col2=
{
  width:"40%",
  height:"60%",
  marginTop:"4%",
  marginRight:"4%"

}
var date={
  marginTop:"2%",
  width:"8%",
  display:"inline-block",
}
var date_inp={
  marginTop:"5%",
  marginRight:"12%",
  width:"40%",
  display:"inline-block",
  Float:"left"
}
class Details extends Component {

  render() {
    return (
     <div className="row">
     <center>
       <div className="col-md-6" >
       <div className="input-group" style={tbox}>
 				 <span class="input-group-addon">Company</span>
 				 <input class="form-control ng-pristine ng-valid ng-touched" tabindex="11" ng-model="invoice.number"/>
 			 </div>
          <textarea className="From" style={tbox} rows="6" defaultValue="From:"></textarea>
          <textarea className="To" style={tbox} defaultValue="To:" rows="6"></textarea>
       </div>
       <div className="col-md-6" >
       <div className="input-group" style={col2}>
         <span class="input-group-addon">#</span>
         <input class="form-control ng-pristine ng-valid ng-touched" tabindex="11" ng-model="invoice.number"/>
      </div>
       <div >
         <h4 style={date} className="date">Date</h4>
         <input type="text"style={date_inp} className="date"placeholder="dd/mm/yyyy"/>
      </div>
      </div>
    </center>
    </div>

    );
  }
}

export default Details;
