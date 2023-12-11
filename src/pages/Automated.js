import React from 'react'
import BannerImageAutomated from '../images/automation-test.jpg'
import appiumLogo from '../images/appium-logo.png'
import cucumberLogo from '../images/cucumber.png'
import seleniumLogo from '../images/Selenium_Logo.png'
import prosAndConsAuto from '../images/prosauto.png'
import automatedTypes from '../images/Types-of-Test-Automation.png'
import '../styles/Automated.css'
function Automated() {
  return (
    <div className='automated'>
        <div className='automatedTop'
        style={{ backgroundImage: `url(${BannerImageAutomated})` }}
        ></div>
        <div className="automatedBottom">
        <h1> Automated Testing</h1>
        <h3>What is Automated Testing?</h3>
        <p> Automated testing allows developers to write test cases that can be executed on their own. 
        It involves the use of specialized tools, scripts, and frameworks to automate the execution of test cases and validate software functionality.</p>
        <h3>What are the types of Automated Testing?</h3>
            <div className='automatedTypes'>
            <img src={automatedTypes} alt="automated testing types"/>
            </div>
        
        <h3>How is Automated Testing conducted?</h3>
        <h4>In most industries, this is how the Automated Testing process goes:</h4>
            <ul>
              <li>Select the Testing Tool</li>
              <li>Establish the Scope of Automation</li>
              <li>Plan the Testing</li>
              <li>Execution</li>
              <li>Maintenance</li>
            </ul>

        <p><b>Select the Testing Tool: </b>Choosing your testing tool is the first step in Automated Testing. A automation tool is chosen based on the best fit for the requirement(s). Depending on your testing goals, different automation testing tools may be suitable.</p>
        <p><b>Establish the Scope of Automation: </b>The specific area of testing should be defined and its extent should be determined. During this step, assess the current state of your team, prepare the necessary test data, and set up the testing environment. The following factors should be considered:
          <ul>
            <li>Complexity of the Test</li>
            <li>Main Testing Goals</li>
            <li>Resources and Business Components</li>
            <li>Technical Feasibility</li>
          </ul>
        </p>
        <p><b>Plan the Testing: </b>During the initial planning phase, it is essential to devise a robust testing strategy, encompassing the following key elements:
          <ul>
            <li>Tool Selection – Opt for the appropriate automation testing tool in alignment with project requirements.</li>
            <li> Framework Design – Construct a suitable automation framework to effectively guide the testing process.</li>
            <li>Feature Definition – Clearly articulate the features and functionalities intended to be covered by the automation tests.</li>
            <li>Goal Setting – Define explicit goals to articulate the desired outcomes of the testing effort.</li>
            <li>Timeline Creation – Collaborate with the development team to create a comprehensive timeline for scripting and executing test cases.</li>
            <li>Scope Definition – Precisely delineate the scope of automation, identifying both in-scope and out-of-scope elements.</li>
          </ul>
        </p>
        <p><b>Execution: </b>Here, planned tests are executed, involving coding, and utilizing the tool's API or UI for automation. Prior to test initiation, API testing may be conducted to ensure seamless integration. Automated tests generate detailed reports, providing a comprehensive view of testing progress.</p>
        <p><b>Maintenance: </b>Continuous maintenance is crucial in automation testing, particularly when planning future tests with reusable scripts. Updates may be necessary to align scripts with changes in the automation test tool, ensuring their relevance for subsequent runs. Maintenance also offers reassurance as the team progresses to the next stage or revisits tests.</p>

        <h3>What tools are used for Automated Testing?</h3>
        <div className='image-container'>
        <a href="https://appium.io/docs/en/2.2/" target="_blank" rel="noreferrer">
                <img src={appiumLogo} alt="appium logo" />
            </a>
            <a href="https://cucumber.io/" target="_blank" rel="noreferrer">
                <img src={cucumberLogo} alt="cucumber logo" />
            </a>
            <a href="https://www.selenium.dev/" target="_blank" rel="noreferrer">
                <img src={seleniumLogo} alt="selenium logo" />
            </a>
        </div>
        <div className='afterImagesAuto'>These three applications are a few examples of the tools used to conduct Automated Testing at various companies.</div>
            <h3>What are the Pros and Cons of Automated Testing?</h3>
            <div className='prosAndConsAuto'>
                <img src={prosAndConsAuto} alt="pros and cons auto" />
            </div>
            <a href= "            https://www.globalapptesting.com/blog/what-is-automation-testing#:~:text=Automation%20testing%2C%20or%20test%20automation,and%20reliability%20in%20software%20testing." target="_blank" rel="noreferrer">
            <h4>Click here to learn more about Automated Testing. </h4>
            </a>
      </div>
      
    </div>
  )
}

export default Automated
