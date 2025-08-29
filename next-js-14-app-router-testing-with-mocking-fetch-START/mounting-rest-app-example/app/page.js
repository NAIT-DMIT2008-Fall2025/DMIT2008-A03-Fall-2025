import Container from '@mui/material/Container';

import QuotesGenerator from '@/components/QuotesGenerator';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container  className="flex min-h-screen flex-col items-center justify-between p-24">
        <QuotesGenerator/> 
      </Container>
    </main>
  );
}
