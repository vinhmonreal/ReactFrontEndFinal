export default function Header() {
    return (
        <>
        </>
    );
}



// import { useEffect, useState } from "react";
// import { randomImg } from "./RANDOM_IMG";

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
//             <img src={randomImage} alt="random drink" />
//         </div>
//     );
// }
