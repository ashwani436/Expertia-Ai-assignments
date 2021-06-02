import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>Product</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
	
		<Column>
			<Heading>Company</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
		<Column>
			<Heading>Feature</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
		<Column>
			<Heading>Connect</Heading>
			<FooterLink href="#">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</FooterLink>
			<FooterLink href="#">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</FooterLink>
			<FooterLink href="#">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</FooterLink>
			<FooterLink href="#">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
