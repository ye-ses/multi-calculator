import styled from "styled-components";
import { FaCalculator, FaGrinWink, FaHistory } from "react-icons/fa";

function About() {
  const descriptions = [
    {
      calculator: `Tiny calculator `,
      description: `What you see here is just a mirror of another calculator done with a vue library. 
      It calculates all your basic maths problem provided you entered 
      the correct expression, it doesn't correct everything.
      You can get there through this `,
      link: ` https://ye-ses.github.io/tiny-calculator/ `,
    },
    {
      calculator: "Distance Converter",
      description: `This converts the given distance unit to 
      'mm,cm,inch,feet,yard, m, km, miles'depending on the input,
      The difference between this and other converters out there is that 
      it gives all conversions at once. I just thought it would be a hussle to 
      select the reqired conversion units every time for a similar distance. 
     
       `,
    },
  ];
  return (
    <Container>
      <h1>The following are the descriptions of the calculators available</h1>
      {descriptions.map((desc) => (
        <Card key={desc}>
          <h1>{desc.calculator}</h1>
          <p>{desc.description}</p>
          {desc.link && (
            <a href={desc.link} target="_blank">
              link.
            </a>
          )}
        </Card>
      ))}
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-auto-flow: dense;
  align-items: center;
  gap: 1em;
  width: inherit;
  border: 2px solid var(--primary-light);
  padding: 1.5em;
  border-radius: 0.8em;
  background: linear-gradient(40deg, var(--primary-color), 40%, white);
`;
const Card = styled.div`
  display: grid;
  background-color: whitesmoke;
  justify-content: center;
  align-items: center;
  border-radius: 0.6em;
  padding: 0.5em 1em 0.5em 1em;
  h1 {
    font-family: "Times New Roman", Times, serif;
    font-weight: 300;
    color: var(--secondary-color);
  }
  p {
    font-size: 1.1em;
    line-height: 1.3;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
  span {
  }
`;
export default About;
