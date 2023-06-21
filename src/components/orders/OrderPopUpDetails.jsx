import cross from "../../assets/icon1.svg"

export const OrderPopUpDetails=({order,onClose})=>{

    const formattedDate = (dateString) => {
        const date = new Date(dateString);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-[#767575]">
        <div className="popUp bg-[white] w-[400px] xs:w-[80%] h-fit flex flex-col fixed font-[300] rounded-xl ">
            <div className="ml-auto p-[20px] flex"><button className='cursor-pointer' onClick={onClose}><img src={cross} /></button></div>
            <h1 className={`${order.status==='approved'?" bg-[#64B937] p-[6px] text-[white]":order.status==='payed' ? " bg-[orange] p-[6px] text-[white]":order.status==='rejected' ? "bg-[red] p-[6px] text-[white]":"bg-[#451a54] p-[6px] text-[white]"} text-center w-full`}>your order is {order.status}</h1>
            <div className="flex p-[10px]">
                <h2>Total:</h2>
                <p className="font-[500]">RWF {order.amount}</p>
                <h2 className={`${order.status==='approved' ? "bg-[#a4d7a4] text-[green]":order.status==='payed' ?"bg-[orange] text-[#fff]":order.status==='rejected' ? "bg-[red] text-[#fff]":"bg-[#451a54] text-[#fff]"} rounded-[50px] ml-auto py-[2px] px-[8px]`}>{order.status}</h2>
            </div>
            <h3 className="text-center text-[#615D5D] text-[13px]">added on {formattedDate(order.createdAt)}</h3>
            <table class='w-full'>
                <tbody className="  text-[13px]" >
                        {order.products.map((product)=>(
                            <tr key={product.id} className="font-[700] border-t w-[100%] border-gray-300 flex  flex-row  justify-between p-[10px]">
                            <td className="self-start">{product.name}</td>
                            <td className="text-center"><h3 className={`${product.status==='approved' ? " bg-[#a4d7a4] text-[green]":product.status==='payed' ? "bg-[orange] text-[#fff]":product.status==='rejected' ? 'bg-[red] text-[#fff]':'bg-[#451a54] text-[white]'} text-center w-fit text-[13px] font-[700] px-2 rounded-xl`}>{product.status}</h3></td>
                            <td className="">RWF {product.price}</td>
                            </tr>
                        ))}
                </tbody>
            </table>

        </div>
        </div>
    )
}