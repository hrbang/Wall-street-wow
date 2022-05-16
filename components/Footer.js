import React from "react"
import { Container, Row, Col } from "react-bootstrap"

function Footer() {
    return (
        <footer className="footer">
            <div className="topfooter">
                <Container fluid className="flex-grow-1 flex-shrink-0">
                    <Row className="py-5">
                        <Col lg={12} className="mx-auto text-white text-center py-5">
                            <h2 className="footer-title">Get the latest data from your Auction house</h2>
                            <p className="footer-text">Fetch the latest deals and potential boyouts from your selected server to maximize your gold income</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="subfooter py-4">
                <div className="copyright">&copy; World of Wallstreet - All right reserved</div>
            </div>
        </footer>
    )
}

export default Footer
