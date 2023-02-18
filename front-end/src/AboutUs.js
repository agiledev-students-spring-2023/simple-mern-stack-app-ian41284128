import { Link } from 'react-router-dom'
import './Home.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  return (
    <>
      <h1>About Me</h1>
      <p>My name is Ian Nacke. I'm a junior studying computer science at NYU Shanghai. I want to work in the video games industry in the future, but for now I am learning about agile software development in New York. Hopefully I'll be able to apply my software development skills to my interests, but while I'm in this class I will probably be applying them to make a bad shopping app or bloatware.</p>
      <p>The video games industry is probably just as bad as the tech industry, so I guess I shouldn't complain, but I will anyway.</p>
      <p>
        Check out the <Link to="/messages">messages page</Link>.
      </p>
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
