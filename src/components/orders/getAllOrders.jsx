import { useDispatch, useSelector } from "react-redux"
import { orderedProducts } from "../../redux/actions/orderedProducts"
import { useEffect } from "react";

export const GetAllOrders=()=>{
    const dispatch=useDispatch();
    const { data, isLoading } = useSelector((state) => state.orderedProduct);

     useEffect(()=>{
        dispatch(orderedProducts())
    },[])
    console.log("+++++++++++++++",data.Orders)
    const formattedDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: "numeric", month: "short", year: "numeric" };
        return date.toLocaleDateString(undefined, options);
      };
    return (
        <div className="w-full h-[100vh] bg-slate-300">
            {isLoading ?(
            <div>...loading</div>
            ):(
                <table className='ml-auto w-fit divide-y divide-gray-300 bg-white'>
                    <thead>
                    <tr className='text-[#848484]'>
                        <th>
                        <h1>Orders</h1>
                        </th>
                    </tr>
                        <tr className="text-center">
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
                            <th scope='col' className='py-3.5 pl-4 pr-3 text-[#266C00]'>Quantity</th>
                            <th scope='col' className='py-3.5 pl-4 pr-3 text-[#266C00]'>status</th>
                            <th scope='col' className='py-3.5 pl-4 pr-3 text-[#266C00]'>Date added</th>
                            <th scope='col' className='py-3.5 pl-4 pr-3 text-[#266C00]'>Action</th>
                        </tr>
                        
                    </thead>
                    <tbody className='divide-y divide-gray-200'>
                        {data.Orders.map((order)=>(
                        <tr key={order.id} className="text-center">
                            <td>{order.id}</td>
                            <td>{order.amount}</td>
                            <td>{order.products.length}</td>
                            <td><h3 className={`${order.status==='payed' ? 'bg-[#a4d7a4] text-[green]':'bg-[#ecc989] text-[#8d560f]'}`}>{order.status}</h3></td>
                            <td>{formattedDate(order.createdAt)}</td>
                            <td>vie</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            )}

        </div>
    )
}