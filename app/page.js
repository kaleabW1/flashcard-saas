import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { AppBar, Button, Toolbar, Typography, Container, Box, Grid } from "@mui/material";
import Head from 'next/head';

export default function Home() {
  return (
    <Container maxWidth="100v">
      <Head> 
        <title>Flashcard Saas</title>
        <meta name="description" content="Create flashcards from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}> Flashcard Saas</Typography>
          <SignedOut>
            <Button color='inherit' href='/sign-in'>
            {' '}
            Login
            </Button>
            <Button color='inherit' href='/sign-up'>
            Sign up
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>Welcome to Flashcard Saas</Typography>
        <Typography variant="h5" gutterBottom>The easiest way to make flashcards from your texts</Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Box>

      <Box sx={{ my: 6 }}>
        <Typography variant="h4" component="h2">
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Easy input text</Typography>
            <Typography>Simply input your text and let our software do the rest. Creating flashcards has never been easier.</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Smart flashcard</Typography>
            <Typography>Our AI intelligently breaks down your text into concise flashcards, perfect for studying.</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Accessible Anywhere</Typography>
            <Typography>Access your flashcards from any device, at any time. Study on the go with ease.</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ my: 6, textAlign: 'center' }}>
        <Typography variant="h4">Pricing</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
            }}>
              <Typography variant="h5" gutterBottom>Basic</Typography>
              <Typography variant="h6" gutterBottom>$5 / month</Typography>
              <Typography>Access to basic flashcard features and limited storage.</Typography>
              <Button variant='contained' color='primary'>choose basic</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
          <Box sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
            }}>
            <Typography variant="h6" gutterBottom>Pro</Typography>
            <Typography variant='h6' gutterBottom>$10 / month</Typography>
            <Typography>Unlimited flashcards and storage with priority support.</Typography>
            <Button variant='contained' color='primary'>choose pro</Button>
          </Box>
          </Grid>
        
        </Grid>
      </Box>
    </Container>
  );
}
