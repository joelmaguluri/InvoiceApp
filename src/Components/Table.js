import React, { Component } from 'react';
class Table extends Component {

  render() {
    return (
<div>
<div class="limiter">
<div class="container-table100">
<div class="wrap-table100">
    <div class="table100">
            <table>
                <thead>
                    <tr class="table100-head">
                        <th class="column1">Date</th>
                        <th class="column2">Order ID</th>
                        <th class="column3">Name</th>
                        <th class="column4">Price</th>
                        <th class="column5">Quantity</th>
                        <th class="column6">Total</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td class="column1">2017-09-29 01:22</td>
                            <td class="column2">200398</td>
                            <td class="column3">iPhone X 64Gb Grey</td>
                            <td class="column4">$999.00</td>
                            <td class="column5">1</td>
                            <td class="column6">$999.00</td>
                        </tr>
                        <tr>
                            <td class="column1">2017-09-28 05:57</td>
                            <td class="column2">200397</td>
                            <td class="column3">Samsung S8 Black</td>
                            <td class="column4">$756.00</td>
                            <td class="column5">1</td>
                            <td class="column6">$756.00</td>
                        </tr>
                </tbody>
            </table>
    </div>
</div>
</div>
</div>
</div>

    );
  }
}

export default Table;







