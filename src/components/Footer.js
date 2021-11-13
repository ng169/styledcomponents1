import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />

        <Flex>
          <ul>
            <li>Website by ng169.</li>
            <li>Thanks For Visiting</li>
            <li>Reference: https://www.youtube.com/watch?v=02zO0hZmwnw</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2021 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}
