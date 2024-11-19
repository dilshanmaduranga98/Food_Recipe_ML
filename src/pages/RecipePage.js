import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function RecipePage() {
    const [chosenImage, setChosenImage] = useState(null);
    const [foodName, setFoodName] = useState('');
    const [objects, setObjects] = useState([]);
    const [recipe, setRecipe] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
          setChosenImage({
            file: file,
            dataURL: URL.createObjectURL(file)
        });
        }
    };

  //   useEffect(() => {
  //     if (chosenImage) {
  //         handleGenerateRecipe();
  //     }
  // }, [chosenImage]);

    const handleGenerateRecipe = () => {
    
        if (!chosenImage) {
            console.error('No image selected');
            return;
        }
        const formData = new FormData();
        formData.append('file', chosenImage.file);

        axios.post('http://localhost:5000/recipe', formData)
            .then(response => {
                setFoodName(response.data);
                console.log(response.data);

                if (response.data.trim() === 'Burger') {
                  setObjects(['Burger Bun','Tomato ','Lettuce', 'Cheese Slice', 'Meat', 'Pickle', 'Onion', 'Meat']); 
                  setRecipe('Season the ground meat with salt and pepper,Divide the meat into equal portions and shape them into patties, Cook the patties on a grill or stovetop until fully cooked to your liking, Slice the tomato into round slices, Thinly slice the onion into rings, Wash and separate the lettuce leaves, Cut the burger buns in half, lightly toast the inside of the buns on a grill or in a toaster, Place a lettuce leaf on the bottom half of the bun, Add a cooked meat patty on top of the lettuce, Add a slice of cheese on the patty to melt slightly, Layer tomato slices, onion rings, and pickles on top, Top with the other half of the bun.');
                  console.log('detected');// Example ingredients
                }else if(response.data.trim() === 'Pizza'){
                  setObjects(['Pizza dough', 'Tomato sauce','Mozzarella cheese','Pepperoni','Onions','Bell peppers','Olives']);
                  setRecipe('Roll out pizza dough on a floured surface to desired thickness. Spread tomato sauce evenly over the dough. Sprinkle shredded mozzarella cheese on top of the sauce. Add desired toppings such as pepperoni, mushrooms, onions, and bell peppers. Bake in a preheated oven at 425°F (220°C) for 12-15 minutes, or until crust is golden brown and cheese is melted and bubbly.');
                }else if(response.data.trim() === 'Hot Dog'){
                  setObjects(['Hot dog buns','Sausages','Ketchup','Mustard']);
                  setRecipe('Grill or boil hot dog sausages until cooked through. Toast hot dog buns on a grill or in a toaster until lightly browned. Place cooked sausages in the buns. Add condiments such as ketchup, mustard, relish, and chopped onions. Optionally, sprinkle with grated cheese or chopped jalapenos for extra flavor.');
                }else if(response.data.trim() === 'Donut'){
                  setObjects(['Donut Bun','Oil','Glaze','Sprinkles']);
                  setRecipe('Mix flour, sugar, yeast, salt, and warm milk in a bowl to form a dough. Knead the dough until smooth, then let it rise until doubled in size. Roll out the dough and cut into donut shapes using a donut cutter. Fry the donuts in hot oil until golden brown on both sides. Coat the warm donuts in powdered sugar or glaze with icing.');
                }else if(response.data.trim() === 'Taco'){
                  setObjects(['Tortillas ','Meat','Taco seasoning','Lettuce','Tomato','Cheese', 'Salsa']);
                  setRecipe('Cook ground beef with taco seasoning in a skillet until browned and cooked through. Warm corn or flour tortillas in a dry skillet or microwave. Fill the tortillas with the cooked beef, shredded lettuce, diced tomatoes, shredded cheese, and any other desired toppings such as salsa, guacamole, or sour cream.');
                }else if(response.data.trim() === 'Crispy Chicken'){
                  setObjects(['Chicken','Flour','Breadcrumbs','Oil']);
                  setRecipe('Season chicken breasts with salt, pepper, and any desired spices. Dip the chicken breasts in beaten eggs, then coat with seasoned breadcrumbs or flour. Fry the chicken in hot oil until golden brown and crispy on both sides. Serve the crispy chicken with mashed potatoes, coleslaw, or on a sandwich bun with lettuce, tomato, and mayonnaise.');
                }else {
                  setFoodName('');
                  setObjects([]);
                  setRecipe('');
                  console.log('Not detected'); // Clear ingredients if food is not recognized
              }

                
                // setObjects(response.data.objects);
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div className='w-full h-[90.6vh] flex flex-row justify-start pl-[120px] items-start gap-[60px] pt-[100px]'>
            <div className='flex flex-col h-[95%] border-r-2 border-[#fda95a93] pr-[50px]'>
                <label htmlFor="image" className='flex flex-col items-center justify-start w-[450px] rounded-[10px] border-dashed overflow-hidden border-[#FF7A00] border-2 h-[300px] hover:scale-[1.05] duration-300'>
                    {chosenImage ? (
                        <img src={chosenImage.dataURL} alt='chosen' name="file" className='object-cover w-full h-full' />
                    ) : (
                        <>
                            <img src='./add_icon.png' width={60} alt='add icon' className='mb-[30px] mt-[60px]' />
                            <p className='text-[#FF7A00] text-[35px] font-Josefin font-normal'>Choose Image</p>
                            <p className='text-[#FF7A00] text-[16px] font-Josefin font-thin'>*the image must be in .png, .jpg only</p>
                        </>
                    )}
                </label>
                <input type='file' name='file' id='image' hidden onChange={handleImageChange} />

                <button onClick={handleGenerateRecipe} className='mt-[50px] bg-[#ff7b00de] w-1/2 ml-[25%] h-[35px] rounded-[25px] font-Josefin text-[#fff] text-[16px] mr-[25%] hover:bg-transparent hover:border-2 hover:scale-105 duration-300'>Generate Recipe</button>
            </div>

            <div className='flex flex-col justify-start h-[350px] gap-[50px] text-white'>
                <div className='flex flex-row gap-3 items-start justify-start h-auto text-[#FF7A00] font-Josefin font-thin text-[20px]'>
                    <label htmlFor='food_name_lbl' className='font-normal w-[120px]'>Food Name : </label>
                    <label id='food_name' className='w-[350px] h-auto'>{foodName}</label>
                </div>

                <div className='flex flex-row gap-3 items-start justify-start h-auto text-[#FF7A00] font-Josefin font-thin text-[20px]'>
                    <label htmlFor='food_ingridients_lbl' className='font-normal w-[120px]'>Ingredients : </label>
                    <label id='food_ingridients' className='w-[530px] h-auto'>
                        {objects.map((obj, index) => (
                            <span key={index}>{obj}, </span>
                        ))}
                    </label>
                </div>

                <div className='flex flex-row gap-3 items-start h-auto text-[#FF7A00] font-Josefin font-thin text-[20px]'>
                    <label htmlFor='food_recipe_lbl' className='font-normal w-[120px]'>Recipe : </label>
                    <label id='food_recipe' className='w-[500px] h-auto text-[16.5px]'>{recipe}</label>
                </div>
            </div>
        </div>
    )
}
