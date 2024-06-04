import { Inter } from "next/font/google";
import { NextPage } from "next";
import { Heading } from '@chakra-ui/react'
import { AuthGuard } from '@src/feature/auth/component/AuthGuard/AuthGuard'


const inter = Inter({ subsets: ["latin"] });

const Page: NextPage = () => {
  return (
    <AuthGuard>
      <Heading>Chakra UI</Heading>
    </AuthGuard>
  )
}

export default Page;
