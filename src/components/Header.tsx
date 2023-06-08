export default function Header() {
    return (
        <div className="header-div">
            <img src="https://cdn.pixabay.com/photo/2016/11/29/15/05/drink-1870139_960_720.jpg" alt="random drink" />
        </div>
    );
}



// import { useEffect, useState } from "react";
// import { randomImg } from "../pages/RANDOM_IMG";

// export default function Header() {
//     // get new random image evry 5 seconds
//     const [randomImage, setRandomImage] = useState<string>("");
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setRandomImage(randomImg[Math.floor(Math.random() * randomImg.length)]);
//         }, 8000);
//         return () => clearInterval(interval);
//     }, []);
//     console.log(randomImage);
//     return (
//         <div key={randomImage} className="header-div">
//             <img src={randomImage} alt="" />
//         </div>
//     );
// }
