import React, { Component } from 'react'

export class confirm extends Component {
    render() {
        return (
        <div>
        <p>
          If you are happy with your information, it is time to submit your data!
        </p>
        <p>
          Caveat: Note that this study is gathering information for research purposes only.
          We are not providing you with any health advice or diagnosing if you have COVID-19.
          In order to explore the development of robust detectors for COVID-19 using voice,
          a large-scale collection of voices, including from thousands of diagnosed COVID-19 patients,
          will be necessary.  If you feel unwell, or suspect you have been exposed to COVID-19 or show
          any symptoms consistent with COVID-19, please contact a doctor immediately.
        </p>
      </div>
        )
    }
}

export default confirm
