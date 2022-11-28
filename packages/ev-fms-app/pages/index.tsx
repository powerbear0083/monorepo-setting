import styled from '@emotion/styled';
import Link from 'next/link'
import Button from '@mui/material/Button';

const StyledWrap = styled.div`
`;

export function Index() {
  const a = 'fff';
  return (
    <StyledWrap>
      <h1>EV FMS 測試</h1>
      <Link href="/test">About Us</Link>
      <Button variant="contained">Hello World</Button>
    </StyledWrap>
  );
}

export default Index;
