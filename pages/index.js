import Head from "next/head"
import { Container, Row, Col } from "react-bootstrap"
import USServers from '../components/USServers'
import EUServers from '../components/EUServers'
import Headline from '../components/Headline';
import Footer from '../components/Footer';

function Home() {
    return (
        <div id="root">
            <Head>
                <title>Wall street WoW</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="main">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Headline title="World of Wallstreet" subtitle="Please select a title from the list below" />
                        </Col>
                    </Row>
                    <Row>
                        <EUServers />
                        <USServers />
                    </Row>
                </Container>
            </main>
            <Footer />
        </div>
    )
}

export default Home;
