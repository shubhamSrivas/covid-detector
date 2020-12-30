import React, { Component } from 'react'

export class basicinfo extends Component {
    render() {
        return (
            <div>

              <label>List any other health problems.</label>
              <input type="text" id="otherhealthproblems" name="otherhealthproblems" class="is-valid" aria-invalid="false"/>
            </div>
        )
    }
}

export default basicinfo
