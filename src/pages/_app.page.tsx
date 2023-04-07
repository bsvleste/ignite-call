import '../lib/dayjs'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../lib/react-query'
import { DefaultSeo } from 'next-seo'

globalStyles()
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pt-BR',
            url: 'https://ignite-call.bsvcode.com.br/',
            siteName: 'IgniteCall',
          }}
        />
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}

export default MyApp
