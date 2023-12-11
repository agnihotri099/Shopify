import {ORDER_CREATE_FAILS,ORDER_CREATE_REQUEST,ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAILS, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_LIST_MY_FAILS, ORDER_LIST_MY_REQUEST, ORDER_LIST_MY_SUCCESS, ORDER_PAY_FAILS, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS} from '../constants/orderConstant'
import axiosInstance from "../config";
export const createOrder =(order)=>async(dispatch,getState)=>{
    try {
        dispatch({
            type:ORDER_CREATE_REQUEST
        })
        const {
            userLogin: { userInfo },
          } = getState();
          console.log(userInfo.token);
          const config = {
            headers: {
              "Contnet-Type": "application/json",
              Authorization: `${userInfo.token}`,
            },
          };
          const {data} = await axiosInstance.post('/orders',order,config);
          dispatch({
            type:ORDER_CREATE_SUCCESS,
            payload:data
          })
    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAILS,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          }); 
    }
}

export const detailsOrder =(id)=>async(dispatch,getState)=>{
  try {
      dispatch({
          type:ORDER_DETAILS_REQUEST
      })
      const {
          userLogin: { userInfo },
        } = getState();
        console.log(userInfo.token);
        const config = {
          headers: {
            Authorization: `${userInfo.token}`,
          },
        };
        const {data} = await axiosInstance.get(`/orders/${id}`,config);
        dispatch({
          type:ORDER_DETAILS_SUCCESS,
          payload:data
        })
  } catch (error) {
      dispatch({
          type: ORDER_DETAILS_FAILS,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        }); 
  }
}


export const payOrder =(orderId, paymentResult)=>async(dispatch,getState)=>{
  try {
      dispatch({
          type:ORDER_PAY_REQUEST
      })
      const {
          userLogin: { userInfo },
        } = getState();
        console.log(userInfo.token);
        const config = {
          headers: {
            "Contnet-Type": "application/json",
            Authorization: `${userInfo.token}`,
          },
        };
        const {data} = await axiosInstance.put(`/orders/${orderId}/pay`,paymentResult,config);
        dispatch({
          type:ORDER_PAY_SUCCESS,
          payload:data
        })
  } catch (error) {
      dispatch({
          type: ORDER_PAY_FAILS,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        }); 
  }
}

export const listOrders =()=>async(dispatch,getState)=>{
  try {
      dispatch({
          type:ORDER_LIST_MY_REQUEST
      })
      const {
          userLogin: { userInfo },
        } = getState();
        console.log(userInfo.token);
        const config = {
          headers: {
            Authorization: `${userInfo.token}`,
          },
        };
        const {data} = await axiosInstance.get('/orders/myorders',config);
        dispatch({
          type:ORDER_LIST_MY_SUCCESS,
          payload:data
        })
  } catch (error) {
      dispatch({
          type: ORDER_LIST_MY_FAILS,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        }); 
  }
}