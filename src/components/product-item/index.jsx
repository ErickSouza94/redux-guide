import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/actions";
// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";

// Utilities

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleProductClick = () => {
    dispatch(addProductToCart(product));
    console.log(product);
  };
  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl} >
        <CustomButton onClick={handleProductClick} startIcon={<BsCartPlus />} >
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
