import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant='body2' color='#fff' textAlign='center' py={1.5}>
        {'Copyright © '}
        <Link color='inherit' href='/'>
          FOODIE
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  color: #fff;
  background-color: #1b1b1b;
  margin-top: auto;
`;
