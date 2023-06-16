import { useDispatch, useSelector } from "react-redux"
import { orderedProducts } from "../../redux/actions/orderedProducts"
import { useEffect, useState } from "react";
import { OrderPopUpDetails } from "./OrderPopUpDetails";
import Rectangle from "../sales/utils/Rectangle";
import vector1 from '../../assets/Vector1.svg';
import illustration from '../../assets/illustration.svg'

export const GetAllOrders=()=>{
    const dispatch=useDispatch();
    const { data, isLoading ,error} = useSelector((state) => state.orderedProduct);
    const [isPopUpOpen,setIsPopUp]=useState(false);
    const [selectedOrder,setSelectedOrder]=useState(null)
    const grad1 = 'from-blue-300 to-green-300';

     useEffect(()=>{
        dispatch(orderedProducts())
    },[])

    const formattedDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: "numeric", month: "short", year: "numeric" };
        return date.toLocaleDateString(undefined, options);
      };
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
      if (!data || !data.Orders) {
        return <div ><img className="h-[80%]" src={illustration} alt="" />
        <p className="text-center text-[#3c4a90] text-[32px]">page not found</p>
        </div>
      }
    return (
        <div className="w-full h-[100vh] flex flex-col gap-[-100px]">
            <div className="self-center w-[83%] flex flex-col xs:items-center items-end">
            <Rectangle 
            backgroundImage={grad1}
            vector={vector1}
            size={data?.Orders?.length || '0'}
            title={'New Orders'}
            />
            </div>
            {isLoading ?(
            <div>...loading</div>
            ):(
                <table className='self-center w-[80%] divide-y xs:w-[85%] divide-gray-300 bg-white h-[35%]' >
                    <thead className=' divide-y divide-gray-200'>
                    <tr  className='text-[#848484] '>
                        <th scope='col' >
                        <h1 className="text-start p-[10px] font-[300]">Orders</h1>
                        </th>
                    </tr>
                        <tr className="text-center py-[12px]">
                            <th
                             scope='col'
                             className='py-3.5 pl-4 pr-3  text-[#266C00] sm:pl-6'
                            >order id</th>
                            <th
                            scope='col'
                            className='py-3.5 pl-4 pr-3  text-[#266C00] sm:pl-6'
                            >
                                full Price
                                </th>
                            <th scope='col' className='py-[12px] pl-4 pr-3 text-[#266C00]'>Quantity</th>
                            <th scope='col' className='py-3.5 pl-4 pr-3 text-[#266C00]'>status</th>
                            <th scope='col' className='py-3.5 pl-4 pr-3 text-[#266C00]'>Date added</th>
                            <th scope='col' className='py-3.5 pl-4 pr-3 text-[#266C00]'>Action</th>
                        </tr>
                        
                    </thead>
                    <tbody className='divide-y divide-gray-200 text-[gray]'>
                        {data.Orders.map((order)=>(
                        <tr key={order.id} className="text-center">
                            <td>#{order?.id.slice(0, 10)}</td>
                            <td className="m-auto">$ {order.amount}</td>
                            <td>{order.products.length}</td>
                            <td><h3 className={`${order.status==='approved' ? 'bg-[#a4d7a4] text-[green] rounded-[50px] px-2':order.status==='payed' ? 'bg-[orange] text-[#fff] rounded-[50px]':order.status==='rejected' ? 'bg-[red] text-[#fff] rounded-[50px]':'bg-[#451a54] text-[#fff] rounded-[50px]'}`}>{order.status}</h3></td>
                            <td>{formattedDate(order.createdAt)}</td>
                            <td>
                                <h3 className="m-auto w-fit px-[10px] bg-[#6f706f] text-[#ffffff] rounded-[50px] cursor-pointer"
                                onClick={()=>{
                                    setSelectedOrder(order)
                                    setIsPopUp(true)
                                }}

                            >view</h3></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
               )}
                {isPopUpOpen && (
                    
                    <OrderPopUpDetails  order={selectedOrder} onClose={()=>setIsPopUp(false)}/>
                    
                )}


        </div>
    )
}