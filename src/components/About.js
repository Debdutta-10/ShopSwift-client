import React from 'react'
import '../styles/about.css'
import Cart from '../images/cart.jpg'
const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-image">
          <img src={Cart} alt="" />
        </div>
        <div className="about-text">
          <h2>Welcome to ShopSwift</h2>
          <h4>Your Premier E-commerce Destination!</h4>
          <p>Welcome to ShopSwift, where cutting-edge technology meets unparalleled convenience. As your premier e-commerce destination, we're committed to redefining your online shopping experience. Our innovative platform offers a vast array of products from top brands, ensuring that you stay on trend effortlessly. With a customer-centric approach, secure transactions, and regular updates on the latest trends and exclusive offers, ShopSwift is not just an app—it's your go-to destination for seamless, stylish, and satisfying online shopping.At the heart of ShopSwift is a commitment to redefine the way you shop online. We envision a world where discovering and acquiring the latest trends is as effortless as a swipe of your finger. By combining cutting-edge technology with a passion for customer satisfaction, we strive to be the go-to platform for all your shopping needs.
          </p>
        </div>
      </div>
    </>
  )
}

export default About
