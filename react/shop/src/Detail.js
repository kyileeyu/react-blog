import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let box =styled.div`
    padding :20px;
`;

let ti =styled.h4`
    font-size : 25px;
    color : ${props =>props.색상};
`;
//외우자

function Detail(props){

    useEffect(()=>{

        console.log(11111)
    });
    



    let { id }= useParams();
    let finditem = props.shoes.find(function(item){
        return item.id == id
    });
    // let finditem = props.shoes.find(x => x.id == id); 

    let history = useHistory();


    return(
        <div className="container">

            <box>
                <ti className="red">Detail</ti>
            </box>

            <div className="my-alert2">
                <p>재고가 얼마남지 않았습니다</p>
            </div>
           
            
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{finditem.title}</h4>
                    <p>{finditem.content}</p>
                    <p>{finditem.price}원</p>
                    <button className="btn btn-danger">주문하기</button> 
                    <button className="btn btn-danger" onClick={()=>{ 
                        history.goBack();
                     }}>뒤로가기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;