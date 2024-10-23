

const Banner = () => {
    return (
        <div
            className="hero h-[400px] lg:h-[600px]  rounded-3xl "
            style={{
                backgroundImage: "url(https://img.freepik.com/premium-photo/table-with-food-bowl-food-it_1169327-281661.jpg?w=740)",
            }}>
            <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Elevate Your Everyday Cooking</h1>
                <p className="mb-5">
                "Discover Delicious Recipes! From Quick Meals to Gourmet Dishes, Explore New Flavors Every Day!".
                </p>
                <button className="btn btn-seconday mr-4">Get Cooking</button>
                <button className="btn btn-primary">Explore Recipes</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;