import { chakra, Container, Flex, Link } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export const Footer = () => {
  const router = useRouter()

  const handleNavigate = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault() // デフォルトのリンク動作を無効化する
    router.push(href)
  }

  return (
    <chakra.footer py={4} bgColor={'blue.600'} color={'white'}>
      <Container maxW={'container.lg'}>
        <Flex flexDirection={'column'} gap={2} alignItems={'start'}>
          <Link lineHeight={1} onClick={(e) => handleNavigate(e, '/')}>
            トップページ
          </Link>
          <Link lineHeight={1} onClick={(e) => handleNavigate(e, '/signin')}>
            サインイン
          </Link>
          <Link lineHeight={1} onClick={(e) => handleNavigate(e, '/signup')}>
            サインアップ
          </Link>
          <Link lineHeight={1} onClick={(e) => handleNavigate(e, '/chat')}>
            チャット
          </Link>
        </Flex>
      </Container>
    </chakra.footer>
  )
}
