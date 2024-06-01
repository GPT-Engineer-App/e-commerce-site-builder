import React from "react";
import { Box, Container, VStack, HStack, Text, Image, Button, IconButton, Heading } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$10.00",
    image: "https://images.unsplash.com/photo-1705096953495-8ea06879b986?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMXxlbnwwfHx8fDE3MTcyMzM2MjB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$20.00",
    image: "https://images.unsplash.com/photo-1524143878510-e3b8d6312402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMnxlbnwwfHx8fDE3MTcyMzM2MjB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$30.00",
    image: "https://images.unsplash.com/photo-1700853010051-dce31802dafc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwM3xlbnwwfHx8fDE3MTcyMzM2MjF8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Header />
      <ProductList products={products} />
      <Footer />
    </Container>
  );
};

const Header = () => (
  <Box as="header" bg="teal.500" color="white" py={4}>
    <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
      <Heading as="h1" size="lg">
        E-Commerce
      </Heading>
      <IconButton aria-label="Cart" icon={<FaShoppingCart />} size="lg" />
    </Container>
  </Box>
);

const ProductList = ({ products }) => (
  <VStack spacing={8} mt={8}>
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </VStack>
);

const ProductCard = ({ product }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%" maxW="sm">
    <Image src={product.image} alt={product.name} />
    <Box p={6}>
      <Box d="flex" alignItems="baseline">
        <Text fontWeight="bold" textTransform="uppercase" fontSize="sm" color="teal.600">
          {product.name}
        </Text>
      </Box>
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        {product.price}
      </Text>
      <Button mt={4} colorScheme="teal">
        Add to Cart
      </Button>
    </Box>
  </Box>
);

const Footer = () => (
  <Box as="footer" bg="teal.500" color="white" py={4} mt={8}>
    <Container maxW="container.xl" textAlign="center">
      <Text>&copy; 2023 E-Commerce. All rights reserved.</Text>
    </Container>
  </Box>
);

export default Index;
