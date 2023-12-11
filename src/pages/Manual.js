import React from 'react'
import BannerImageManual from '../images/ManualTesting-.jpg'
import jiraLogo from '../images/jira-logo.png'
import postmanLogo from '../images/postman-logo.png'
import jmeterLogo from '../images/jmeter-logo.png'
import prosAndCons from '../images/pros.png'
import manualTypes from '../images/manualtypes.png'
import '../styles/Manual.css'

function Manual() {
  return (
    <div className='manual'>
        <div className='manualTop'
        style={{ backgroundImage: `url(${BannerImageManual})` }}
        ></div>
        <div className="manualBottom">
        <h1> Manual Testing</h1>
        <h3>What is Manual Testing?</h3>
        <p>Manual testing is a type of software testing 
            where execution of test cases takes place manually 
            without using any automation tool. Manual testing is carried out by a human tester. 
            It is an essential part of the software development life cycle and is used to ensure that the software meets the required quality standards! </p>
            <h3>What are the types of Manual Testing?</h3>
            <div className='manualTypes'>
            <img src={manualTypes} alt="manual testing types"/>
            </div>
            <h3>How is the Manual Testing conducted?</h3>
            <h4>In most industries, this is how the Manual Testing process goes:</h4>
            <ul>
              <li>Test Planning</li>
              <li>Test Case Development</li>
              <li>Test Execution</li>
              <li>Defect Reporting</li>
              <li>Re-Testing</li>
              </ul>
              
            <p><b>Test Planning: </b>The first step in manual testing is to develop a test plan that outlines the testing objectives, test cases, and testing procedures.</p>
            <p><b>Test Case Development: </b>Test cases are developed based on the requirements and specifications of the software. The test cases are designed to cover all possible scenarios and edge cases.</p>
            <p><b>Test Execution: </b>The tester manually executes the test cases and records the results.</p>
            <p><b>Defect Reporting: </b>Any defects or issues found during the testing process are reported to the development team.</p> 
            <p><b>Retesting: </b>Once the defects are fixed by the development team, the tester performs retesting to ensure that the issues have been resolved.</p>

            <h3>What applications are used for Manual Testing?</h3>
            <div className='image-container'>
            <a href="https://www.atlassian.com/software/jira?&aceid=&adposition=&adgroup=136973856930&campaign=18440774103&creative=639487383004&device=c&keyword=jira&matchtype=e&network=g&placement=&ds_kids=p73335831609&ds_e=GOOGLE&ds_eid=700000001558501&ds_e1=GOOGLE&gad_source=1&gclid=CjwKCAiA98WrBhAYEiwA2WvhOrqslPBYhXGsjSHgHEQVU7Rg0JpJvue4mLPcYXhQmdAuaBWxyuAIjBoCRQoQAvD_BwE&gclsrc=aw.ds" target="_blank" rel="noreferrer">
                <img src={jiraLogo} alt="jira logo" />
            </a>
            <a href="https://www.postman.com/" target="_blank" rel="noreferrer">
                <img src={postmanLogo} alt="postman logo" />
            </a>
            <a href="https://jmeter.apache.org/" target="_blank" rel="noreferrer">
            <img src={jmeterLogo} alt="jmeter logo" />
            </a>
            </div>
            <div className='afterImages'>These three applications are a few examples of the tools used to complete Manual Testing at various companies.</div>
            <h3>What are the Pros and Cons of Manual Testing?</h3>
            <div className='prosAndCons'>
                 <img src={prosAndCons} alt="pros and cons" />
            </div>
           <a href= "https://www.globalapptesting.com/manual-testing-best-practices" target="_blank" rel="noreferrer">
            <h4>Click here to learn more about Manual Testing.</h4>
            </a>
        </div>
      
    </div>
  )
}

export default Manual
