import React from 'react'
import Card from '../Components/Card'
import { Container, Row, Col } from 'reactstrap'
// import BreadCrumb from '../Components/Common/BreadCrumb'

export default function Stickers() {
  return (
    <>
      {/* <div className='page-content'> */}
        <Container>
          {/* <BreadCrumb style={{ width: "98%", marginLeft: "12px" }} /> */}
          <Row>
            <Col className="mt-4" md={4}>
              <Card image="https://m.media-amazon.com/images/I/719z+TnTJCL._AC_UL600_FMwebp_QL65_.jpg" title="Wear The Code (Sticker)" description="Decorate your laptop, water bottle, or workspace with our Developer Sticker Pack. This pack includes a variety of high-quality vinyl stickers." price="30" />
            </Col>
          </Row>
        </Container>
      {/* </div> */}
    </>
  )
}
