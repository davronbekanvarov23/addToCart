import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeProduct } from "../features/productSlice";
import { Link } from "react-router-dom";
function Cart() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  if (products.length == 0) {
    return (
      <div className=" mx-auto max-w-6xl ">
        <Link to="/">Home</Link>
      </div>
    );
  } else {
    return (
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name/type</th>
              <th>Description</th>
              <th> Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={product.category.image}
                            alt={product.title}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.title}</div>
                        <div className="text-sm opacity-50">
                          {product.category.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <br />
                    <span>{product.description.substring(0, 150)}...</span>
                  </td>
                  <td>
                    {new Intl.NumberFormat("us-US", {
                      currency: "USD",
                      style: "currency",
                    }).format(product.price * product.amount)}
                  </td>
                  <th>
                    <button
                      onClick={() => dispatch(removeProduct(product.id))}
                      className="btn btn-ghost btn-xs"
                    >
                      <FaTrash className=" w-5 h-5" />
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default Cart;
