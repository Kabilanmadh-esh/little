import React from "react";
import Swal from 'sweetalert2'

const recipes = [
  {
    id: 1,
    title: "Greek salad",
    price: 12.99,
    image: "https://i.ibb.co/68c9bLv/greek-salad.jpg",
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
  },
  {
    id: 2,
    title: "Bruschetta",
    price: 5.99,
    image: "https://i.ibb.co/317GqZv/Bruchetta.png",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: 4.78,
    image: "https://i.ibb.co/sm6MfcH/desert.jpg",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Menu() {
    const handleOrder=(id)=>
    {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Order!",
                text: "Your order has been Processing.",
                icon: "success"
              });
            }
          });

    }
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This week's Specials</h2>
        <button>Order Menu</button>
      </div>
      <div className="cards">
        {recipes.map((recipe) => (
          <div className="menu-items" key={`recipe-${recipe.id}`}>
            <img src={recipe.image} alt={recipe.title} />
            <div className="menu-content">
                <div className="heading">
              <h5>{recipe.title}</h5>
              <p>{`${recipe.price.toFixed(2)}`}</p>
              </div>
            </div>
            <p>{recipe.description}</p>
            <button className="orderbtn" onClick={()=>handleOrder(recipe.id)}>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
