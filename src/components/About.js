import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

const text = "You are volunteering to record voice samples in order to help us develop algorithms to detect COVID-19 from voice. You will be asked to respond to series of questions about you, your health-related parameters and health status. You will also be asked to record a set of voice prompts. You may terminate the session at any time, without submitting your information.\n\nYou will be asked to provide information about your age, height, ethnicity, health status, other respiratory ailments you may have, whether you have been officially diagnosed with COVID-19, and if so the number of days since the diagnosis, whether you have recovered, and the number of days since you have been declared free of the disease.\n\nYou will also be asked to record coughs, long vowels, and short recordings, such as counting up from 0-20 and the alphabet.\n\nThe entire study is expected to take about 10 minutes.\n\nPlease note that this study is gathering information for research purposes only. We are not providing you with any health advice or diagnosing if you have COVID-19. In order to develop robust detectors for COVID-19 using voice, a large-scale collection of voices, including from thousands of diagnosed COVID-19 patients will be necessary. If you feel unwell, or suspect you have been exposed to COVID-19 or show any symptoms consistent with COVID-19, please contact a doctor immediately.";
class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                About The Initiative
                </Typography>
                {text}
            </React.Fragment>
        )
    }
}

export default About
