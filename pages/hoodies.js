import React from 'react'
import Card from '../Components/Card'
import { Container, Row, Col } from 'reactstrap'

export default function hoodies() {
  return (
    <>
      <Container>
        <Row>
          <Col className="mt-4" md={4}>
            <Card image="https://m.media-amazon.com/images/I/91nLvV+Rn9L._AC_UL600_FMwebp_QL65_.jpg" title="Wear The Code" description="Hoodies" price="$30" />
          </Col>
          <Col className="mt-4" md={4}>
            <Card image="https://m.media-amazon.com/images/I/91nLvV+Rn9L._AC_UL600_FMwebp_QL65_.jpg" title="Wear The Code" description="Hoodies" price="$30" />
          </Col>
          <Col className="mt-4" md={4}>
            <Card image="https://m.media-amazon.com/images/I/91nLvV+Rn9L._AC_UL600_FMwebp_QL65_.jpg" title="Wear The Code" description="Hoodies" price="$30" />
          </Col>
          <Col className="mt-4" md={4}>
            <Card image="https://m.media-amazon.com/images/I/91nLvV+Rn9L._AC_UL600_FMwebp_QL65_.jpg" title="Wear The Code" description="Hoodies" price="$30" />
          </Col>
          <Col className="mt-4" md={4}>
            <Card image="https://m.media-amazon.com/images/I/91nLvV+Rn9L._AC_UL600_FMwebp_QL65_.jpg" title="Wear The Code" description="Hoodies" price="$30" />
          </Col>
          <Col className="mt-4" md={4}>
            <Card image="https://m.media-amazon.com/images/I/91nLvV+Rn9L._AC_UL600_FMwebp_QL65_.jpg" title="Wear The Code" description="Hoodies" price="$30" />
          </Col>
        </Row>
      </Container>
    </>
  )
}