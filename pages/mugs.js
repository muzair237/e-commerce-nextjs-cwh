import React from 'react'
import Card from '../Components/Card'
import { Container, Row, Col } from 'reactstrap'
import { GET_ALL_PRODUCTS } from "../Helpers/urlHelpers";
import axios from 'axios';
import { toast } from 'react-toastify';

export default function hoodies({ productData }) {
  const mugssData = productData.filter((item)=>{
    return item.category === "Mug";
  })
  return (
    <>
      {
        productData.length > 0 ? (
          <Container>
            <Row>
              {mugssData.map((item, index) => (
                <Col className='mt-3' key={index} md={4}>
                  <Card image={item.img} quantity={item.availableQty} size={item.size} color={item.color} title={item.title} description={item.desc} slug={item.slug} price={item.price} />
                </Col>
              ))}
            </Row>
          </Container>
        ) : (
          <h4>No Data Found!</h4>
        )
      }

    </>
  )
}
export async function getServerSideProps(context) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/${GET_ALL_PRODUCTS}`);
    if (response?.data) {
      const productData = response?.data;
      return {
        props: {
          productData,
        },
      };
    }
  } catch (error) {
    toast.error(error, { theme: 'colored' });
  }
  return {
    props: {},
  };
}
