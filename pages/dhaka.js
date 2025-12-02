import Head from "next/head";
import MainPage from "../Components/MainPage/MainPage";
import FacebookPixelScript from "../Components/FacebookPixelScript";

function Home() {
	return (
		<div className='MainPage'>
			<Head>
				<title>Funnel Liner - Automated Sales Funnel</title>
				<meta name='description' content='Funnel Liner - Automated Sales Funnel' />
				<meta name='viewport' content='width=device-width, user-scalable=no' />
				<meta name="facebook-domain-verification" content="o2jyunge4d5l7n767p8yf4qkuz9j4b" />
		{/* <meta name="google-adsense-account" content="ca-pub-7392072866023141"/> */}
				<link rel="icon" href="../images/favicon.png" />
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-LHTQH2P5K2"
				/>
				<script
					dangerouslySetInnerHTML={{
					__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-LHTQH2P5K2');
					`,
					}}
				/>
					{/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7392072866023141"
     crossorigin="anonymous"/> */}
			</Head>
			<MainPage />
			<FacebookPixelScript />
		</div>
	);
}
export default Home
