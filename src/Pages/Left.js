import styled from "styled-components";
import Traveler from "../images/traveler.png";
function Left() {
  return (
    <Container>
      <Heading>
        <img src={Traveler} alt="traveler image" />
        <div className="heading">
          <h1>Welcome!!!</h1>
          <h2>
            <i>...small talk,</i>
          </h2>
          <p>
            Welcome to 'multi' calculators,
            <br />
            Here you will find different calculators to calculate your needs.
            <br />
            <span>
              <i>
                <sub>
                  ...with that said, you should note, not all calculators are
                  available....
                </sub>
              </i>
            </span>
          </p>
        </div>
      </Heading>
      <div className="words">
        <p>
          To Access the calculators,
          <br />
          <b>
            press, hover or click the calculators dropdown and then select your
            choice.
          </b>
          <br />
          Your calculator will then appear on the right section of this page.
        </p>
        <br />
        <br />
        <h1 className="thank-you">
          Awesome, <em>thanks for the visit</em>
          {"     "}!!!
        </h1>
      </div>
    </Container>
  );
}
const Heading = styled.div`
  display: flex;
  justify-content: space-around;
  justify-content: center;
  gap: 1rem;
  .heading {
    padding: 0.6em;
    h1 {
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      font-weight: 300;
    }
    h2 {
      margin-top: 1em;
      color: var(--primary-dark);
      line-height: 0;
    }
    span {
      font-size: 70%;
      font-weight: 600;
      color: var(--primary-dark);
    }
  }
  @media (max-width: 1008px) {
    font-size: 98%;
    padding: 0.2em;
    justify-self: right;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 0.2em;
    justify-self: right;
  }
`;
const Container = styled.div`
  background: none;
  border: 2px;
  border-color: var(--primary-dark);
  background-color: rgba(240, 240, 240, 0.5);
  border-radius: 0 1em 2em 0;
  padding: 1.2em;
  @media (max-width: 1000px) {
    .thank-you {
      display: none;
    }
  }
`;
export default Left;
