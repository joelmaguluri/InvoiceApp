import React, { Component } from 'react';
var tablestyle= {
  fontFamily: "arial, sans-serif",
  borderCollapse:"collapse",
  width:"80%",
  marginTop:"2%",
  marginLeft:"1%",
  marginRight:"2%",
  border:"1"
}
var new_row=`
       <tr>
       <td>
             <div style="margin-right: 6px;">
                     <input type="text" style="width:100%;">
             </div>
       </td>
         <td>
             <div style="margin-right: 6px;">
                     <input type="text" style="width:100%;">
             </div>
         </td>
         <td >
             <div style="margin-right: 6px;">
                     <input type="text" style="width:100%;">
             </div>
         </td>
         <td >
             <div style="margin-right: 6px;">
                     <input type="text" style="width:100%;">
             </div>
         </td>`
var plus_mins={
marginTop:"10%",
float:"right",
marginRight:"8%"
}
class Table extends Component {
  clickme_plus=()=>{
   console.log('increment');
   var button=document.getElementById('inc_dec');
   button.value=+button.value+1;
   var table=document.getElementById('invoice_table');
   table.innerHTML=table.innerHTML+new_row;
  }
  clickme_minus=()=>{
   console.log('decrement');
    var button=document.getElementById('inc_dec');
    if(+button.value!==0){
        button.value=+button.value-1;
   }

  }
  render() {
    return (
   <div className="row" >
      <center>
      <div className="col-md-12" >
        <table style={tablestyle} id="invoice_table">
      <colgroup>
       <col span="1" style={{width: "40%",}}/>
       <col span="1" style={{width: "20%",}}/>
       <col span="1" style={{width: "10%"}}/>
       <col span="1" style={{width: "10%"}}/>
       </colgroup>
         <tr>
           <th >Item</th>
           <th>Quantity</th>
           <th>Rate</th>
           <th>Amount</th>
         </tr>
       </table>
       <div class="form-row" style={plus_mins}>
       <div class="form-row__content">
         <input class="form-input qtyminus" type="button" value="-" onClick={this.clickme_minus} field="quantity-test" />
         <input class="form-input qty" id="inc_dec" type="text" name="quantity-test" value="0" />
         <input class="form-input qtyplus" type="button" value="+" onClick={this.clickme_plus} field="quantity-test" />
       </div>
       </div>
     </div>
    </center>
    </div>
    );
  }
}

export default Table;
