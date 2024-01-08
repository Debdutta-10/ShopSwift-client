import React from 'react'
import Mypolicy from '../images/policy.jpg'
import '../styles/policy.css'
const Policy = () => {
    return (
        <>
            <div className="policy-container">
                <div className="policy-image">
                    <img src={Mypolicy} alt="" />
                </div>
                <div className="policy-text">
                    <h2>ShopSwift Policies</h2>
                    <p>
                        At ShopSwift, we prioritize transparency, security, and customer satisfaction. Our policies are designed to create a seamless and trustworthy shopping experience for you. Please take a moment to familiarize yourself with our policies:
                    </p>

                    <ol>
                        <li>
                            <h3>Privacy Policy:</h3>
                            <p>
                                We understand the importance of your privacy. Our Privacy Policy outlines how we collect, use, and protect your personal information. Rest assured, we are committed to maintaining the confidentiality of your data and ensuring a secure online environment.
                            </p>
                        </li>

                        <li>
                            <h3>Payment and Transaction Security:</h3>
                            <p>
                                ShopSwift employs state-of-the-art encryption and security measures to safeguard your payment information. Your transactions are processed securely, ensuring that your financial details remain confidential. Our commitment is to provide you with a worry-free shopping experience.
                            </p>
                        </li>

                        <li>
                            <h3>Shipping and Delivery:</h3>
                            <p>
                                We strive to deliver your orders promptly and efficiently. Our Shipping and Delivery Policy outlines the expected delivery times, shipping costs, and other relevant information. We keep you informed throughout the shipping process, providing tracking details for your convenience.
                            </p>
                        </li>
                    </ol>

                    <p>
                        By shopping with ShopSwift, you are not just a customer; you are part of a community that values innovation, convenience, and style. Thank you for choosing us as your premier e-commerce destination. Happy shopping!
                    </p>
                </div>
            </div>
        </>
    )
}

export default Policy
