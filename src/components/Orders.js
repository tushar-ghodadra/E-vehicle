import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOrder } from "../store/actions/CartActions";

function Order() {


    const userorder = useSelector(state => state.CartReducer.userorder);
    const myUser = localStorage.getItem("myUser");
    const userId = JSON.parse(myUser).userId

    const dispatch = useDispatch();

    const { id } = useParams();

    const myFunction = async () => {
        dispatch(fetchOrder(id))
    };
    useEffect(() => {
        myFunction();
    }, [id]);

    return (


        <div>
           
            <h2 style={{ fontWeight: "bold", color: "Highlight" }} className="heder_style border-bottom py-3">Your Orders</h2>

            {

                userorder !== null &&

                <div className="pt-4">

                    <center>
                        <table>
                            <tr>
                                <th style={{ paddingRight: "100px", textAlign: "center" }}>Order Number</th>
                                <th style={{ paddingRight: "100px", textAlign: "center" }}>Order Date</th>
                                <th style={{ paddingRight: "100px", textAlign: "center" }}>Order Status</th>
                                <th>Total Amount</th>
                            </tr>

                            {
                                userorder.map((p) =>
                                    <tr>
                                        <td style={{ padding: "10px" }}>{p.orderNum}</td>
                                        <td>{p.orderDate}</td>
                                        <td>{p.orderStatus}</td>
                                        <td>{p.totalAmount}</td>
                                    </tr>
                                )
                            }



                        </table>
                    </center>


                </div>




            }

        </div>
    )
}

export default Order;