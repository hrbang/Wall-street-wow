import Head from 'next/head'

export default function Home() {
	return (
		<div id="root">
			<Head>
				<title>Wall street WoW</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="main">
				<div className="container">
					<div className="row">
						<div className="welcome">
							<div className="headline">
								<h1 className="title">
									Wall street WoW
								</h1>
							</div>
							<div className="choose">
								<p className="text">Please choose a server from the list below</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
