const ShowBookings = ({ showcard }) => {
  const { id, image, title, price, short_description } = showcard;
  return (
    <div>
      <div className="font-poppins">
        <div className="md:h-[510px] h-96 m-auto bg-common p-4 rounded-lg ">
          <div>
            <figure>
              <img
                className="rounded-lg w-full h-auto m-auto"
                src={image}
                alt="Shoes"
              />
            </figure>
          </div>

          <div className="text-white ml-4">
            <div className="flex -ml-3 mt-8 font-bold md:text-2xl ">
              <h1>{id}.</h1>
              <h2 className="ml-1"> {title}</h2>
            </div>

            <p className="mt-4 text-[9px] md:text-[12px]">
              {short_description}
            </p>
            <h3 className="mt-2 text-[12px] md:text-lg">Price: {price}$</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBookings;
