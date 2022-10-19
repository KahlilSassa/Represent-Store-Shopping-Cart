import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"
import Carousel from 'react-bootstrap/Carousel';


export function Store() {
  return (
    <>
      <h1>Home</h1>

      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0587/5816/8785/files/web_banner_247_winter__0001_DSC00380_2048x.jpg?v=1665938094"
          alt="First slide"
        />
        <Carousel.Caption>
        <h4>FW22 COLLECTION</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0587/5816/8785/files/blanks_fw22_banners_0001_Layer_3_2048x.jpg?v=1664984501"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h4>FW22 COLLECTION</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0587/5816/8785/files/d2DESK_2048x.jpg?v=1664381685"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h4>FW22 COLLECTION</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br/>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
