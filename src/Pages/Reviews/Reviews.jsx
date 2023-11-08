import Carousel from "react-elastic-carousel";

const sliderData = [
  {
    user_id: 1,
    user_name: "Alice Johnson",
    user_img: "https://i.ibb.co/XYC694H/user.jpg",
    user_reviews:
      "I love this food sharing community! It's a great way to share and enjoy delicious meals with others.",
  },
  {
    user_id: 2,
    user_name: "John Smith",
    user_img: "https://i.ibb.co/Rh7PcSf/user1.jpg",
    user_reviews:
      "The food sharing website is fantastic. I've met wonderful people and tried amazing dishes.",
  },
  {
    user_id: 3,
    user_name: "Sarah Davis",
    user_img: "https://i.ibb.co/xLV1wFV/user2.jpg",
    user_reviews:
      "I'm so grateful for this community. It's not just about food; it's about building connections and friendships.",
  },
  {
    user_id: 4,
    user_name: "Michael Wilson",
    user_img: "https://i.ibb.co/yByyhMx/user4.jpg",
    user_reviews:
      "The website is easy to use, and I've had countless enjoyable food experiences.",
  },
  {
    user_id: 5,
    user_name: "Emily Brown",
    user_img: "https://i.ibb.co/JRFbVm2/user5.jpg",
    user_reviews:
      "I've discovered new cuisines and made lifelong friends through this platform.",
  },
  {
    user_id: 6,
    user_name: "David Jones",
    user_img: "https://i.ibb.co/k1Bn3rv/user6.jpg",
    user_reviews:
      "The food sharing community has made a positive impact on my life. I highly recommend it.",
  },
  {
    user_id: 7,
    user_name: "Laura Miller",
    user_img: "https://i.ibb.co/89mwVgC/user7.jpg",
    user_reviews:
      "I've never seen such a supportive and friendly group of food enthusiasts. It's a hidden gem!",
  },
  {
    user_id: 8,
    user_name: "Christopher White",
    user_img: "https://i.ibb.co/CJbFw3x/images.jpg",
    user_reviews:
      "This website brings people together over the love of food. It's a wonderful concept.",
  },
  {
    user_id: 9,
    user_name: "Jessica Anderson",
    user_img: "https://i.ibb.co/4JZfC6V/user9.jpg",
    user_reviews:
      "I enjoy browsing through the various food options and meeting like-minded individuals.",
  },
  {
    user_id: 10,
    user_name: "Robert Taylor",
    user_img: "https://i.ibb.co/7GGjynz/user10.jpg",
    user_reviews:
      "The food sharing community has added flavor to my life, both in terms of food and friendships.",
  },
];

function Reviews() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-10">
      <h2 className="text-2xl  md:text-3xl  pl-3 w-[280px] mx-auto border-l-4  font-sans mb-10 font-bold border-[#ffc933] dark:border-[#ffc933]   dark:text-gray-200">
        Customer Review
      </h2>

      <Carousel
        itemsToShow={1}
        enableAutoPlay={true}
        autoPlaySpeed={4000}
        isRTL={true}
      >
        {sliderData.map((item, index) => (
          <div key={index} className="slider-item text-center">
            <div className="flex justify-center mb-3">
              <img
                className="w-[50px] h-[50px] rounded-[50%]"
                src={item.user_img}
                alt={item.user_name}
              />
            </div>
            <h3 className="text-xl mb-2">{item.user_name}</h3>
            <p className="text-lg w-[400px] mb-3">{item.user_reviews}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Reviews;
