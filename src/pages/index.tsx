import Head from 'next/head';
// import Image from 'next/image';
import { Inter } from '@next/font/google';
import { ActionButton, Invoice, InvoicesList, Sidebar } from '../common';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import data from '../data/data.json';

// import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Invoice App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <main>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              component="h1"
              sx={{
                fontSize: 32,
                fontWeight: 700,
                fontStyle: 'normal',
                letterSpacing: 1,
                color: '#0C0E16',
              }}
            >
              Invoices
            </Typography>
            <Typography component="span" sx={{ color: '#888EB0' }}>
              There are 4 pending invoices
            </Typography>
          </Box>
          <Box>
            <ActionButton
              bgcolor="#7C5DFA"
              startIcon={
                <AddCircleIcon sx={{ color: '#fff', width: 50, height: 50 }} />
              }
            >
              New Invoice
            </ActionButton>
          </Box>
        </Stack>

        <InvoicesList data={data} />
      </main>
    </>
  );
}
