import { useParams } from "react-router-dom";
// import useProductPageDetail from "../hook/useProductPageDetail";
import useProductPageImage from "./../hook/useProductPageImage";
import React from "react";
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/product/productSlice'
import { useGetProductDetailsQuery } from '../redux/product/api'
const ProductDetail = styled.div`
  .informOfProduct{
    font-family: Roboto, sans-serif;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 30px;
    background-color: rgb(224, 224, 224);
    padding: 15px;
    min-height: 100vh;
  }
  .productImage{
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
  }
  .itemImage img{
    cursor: pointer;
    width: 80px;
    height: 90px;
    object-fit: contain;
    border-radius: 1rem; 
  }
  .imageProduct{
    position: relative;
  }
  .imageProduct img{
    width: 600px;
    height: 600px;
    object-fit: contain;
    border-radius: 1rem; 
  }
  .imageProduct .btnNav{
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transform: translateY(-180%);
    opacity: 0.8; 
  }
  .imageProduct .btnNav i{
    padding: 10px; 
    font-size: 1.25rem;
    background-color: white;
    color: black;
    margin: 0 10px;
    border-radius: 1rem;
    cursor: pointer;
  }
  .information{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .header{
    font-weight: bold;
  }
  .nameProduct{
    font-size: 1.2rem;
  }
  .priceProduct{
    color: red;
    font-size: 1.2rem;
  }
  .evaluate{
    cursor: pointer;
    font-size: 0.8rem;
  }
  .selectColor{
    padding: 12px 20px;
    border: 1px solid gray;
    border-radius: 0.5rem;
  }
  .selectColor .title{
    font-weight: bold;
  }
  .selectColor .listColor{
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .selectColor .listColor .item{
    width: 30px;
    height: 30px;
    cursor: pointer;
    font-size: 1.25rem;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    transition: all 0.1s ease-in-out;
  }
  .selectColor .listColor .item:nth-child(1){
    color: #b3e8ff;
  }
  .selectColor .listColor .item:nth-child(2){
    color: #d6b0ff;
  }
  .selectColor .listColor .item:nth-child(3){
    color: #fcbecd;
  }
  .selectColor .listColor .item:hover,
  .selectColor .listColor .item.active{
    transform: scale(1.2);
    border: 1px solid gray;
    boxShadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .selectDevice{
    margin-top: 15px;
  }
  .selectDevice .title{
    font-weight: bold;
  }
  .selectDevice .listDevice{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    text-align: center;
    color: rgb(47, 39, 39);
  }
  .selectDevice .listDevice .item{
    padding: 8px 12px;
    border: 1px solid gray;
    border-radius: 0.75rem;
    cursor: pointer;
    background-color: rgb(233, 229, 229);
    transition: all 0.1s ease-in-out;
  }
  .selectDevice .listDevice .item:hover{
    opacity: 0.8;
  }
  .selectDevice .btnAddToBag{
    margin-top: 15px;
    width: 100%;
    padding: 10px 0px;
    background-color: rgb(255, 146, 68);
    border: none;
    border-radius: 4rem;
    transform: scale(1);
    transition: all 0.1s ease-in-out;
  }
  .selectDevice .btnAddToBag:hover{
    transform: scale(1.05);
  }
`;
function ProductPageDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const product = useProductPageDetail(params.id);
  const { data: product } = useGetProductDetailsQuery(id)
  const { image, color, name, price } = product || {};
  const { image_1, image_2, image_3 } = useProductPageImage(id);
  function HandleAddToBag() {
    dispatch(addToCart(product))
  }
  return product && (
    <ProductDetail>
      <div className="informOfProduct">
        <div className="productImage">
          <div className="navListImageProduct">
            <div className="itemImage">
              <img src={image_1} alt="..."></img>
            </div>
            <div className="itemImage">
              <img src={image_2} alt="..."></img>
            </div>
            <div className="itemImage">
              <img src={image_3} alt="..."></img>
            </div>
          </div>
          <div className="imageProduct">
            <img src={image} alt="..." />
            <div className="btnNav">
              <i className="fa-solid fa-angle-left"></i>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
        <div className="information">
          <div className="header">
            <h3 className="colorProduct">{color}</h3>
            <p className="nameProduct">{name}</p>
            <p className="priceProduct" >${price}.00</p>
            <div className="evaluate" >
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
          </div>
          <div className="content">
            <div className="selectColor">
              <h5 className="title" >Select Color</h5>
              <p className="color">{color}</p>
              <div className="listColor">
                <span className="item" ><i className="fa-solid fa-circle"></i></span>
                <span className="item" ><i className="fa-solid fa-circle"></i></span>
                <span className="item active"><i className="fa-solid fa-circle"></i></span>
              </div>
            </div>
            <div className="selectDevice">
              <h5 className="title">Select Device</h5>
              <div className="listDevice">
                <span className="item">iPhone 14 Pro</span>
                <span className="item">iPhone 14 Plus</span>
                <span className="item">iPhone 14 Pro Max</span>
                <span className="item">iPhone 14</span>
              </div>
              <button className="btnAddToBag" onClick={() => HandleAddToBag()}>Add To Bag</button>
            </div>
          </div>
        </div>
      </div>
    </ProductDetail>
  );
}
export default ProductPageDetail;