import Carousel from 'react-bootstrap/Carousel';


export function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0587/5816/8785/files/web_banner_247_winter__0001_DSC00380_2048x.jpg?v=1665938094"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>24 Explore</h3>
          <p>Shop Now</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0587/5816/8785/files/blanks_fw22_banners_0001_Layer_3_2048x.jpg?v=1664984501"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Winter Basics</h3>
          <p>Shop Now</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0587/5816/8785/files/d2DESK_2048x.jpg?v=1664381685"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>FW22 COLLECTION</h3>
          <p>
            Shop Now
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
