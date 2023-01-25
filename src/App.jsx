import React from "react";
import Entry from "./Entry";
import emojipedia from "./emojipedia";

//1.create a separate entry component
//2. Create props to replace hardCoded data.
//3a. Import the emojipedia const.
//3b. Map through the emojipedia array and render Entry components..



// var pro = {
//   id: 1,
//       emoji: "💪",
//       name: "Tense Biceps",
//       meaning:
//         "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."

// }
      


function createEntry(pro){
  return (
    <Entry 
      key={pro.id}
      emoji={pro.emoji}
      name={pro.name}
      description={pro.meaning}
  />
  );
}



function App() {
  return (
    <div>
      <h1>
        <span>em😃jipedia!</span>
      </h1>

      <dl className="dictionary"> 
      {/* description list */}
{/* 
      <Entry 
      emoji= "💪"
      name= "Tense Biceps"
      description= "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
      />

      <Entry 
      emoji= "🙏"
      name= "Person With Folded Hands"
      description= "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
      />

      <Entry 
      emoji= "🤣"
      name= "Rolling On The Floor, Laughing"
      description= "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
      /> */}


      {emojipedia.map(createEntry)}


        
       </dl>
    </div>
  );
}

export default App;



























// function App() {
//   return (
//     <div>
//       <h1>
//         <span>emojipedia</span>
//       </h1>

//       <dl className="dictionary"> 
//       {/* description list */}
//         <div className="term">
//           <dt> 
//             {/* description heading */}
//             <span className="emoji" role="img" aria-label="Tense Biceps">
//               💪
//             </span>
//             <span>Tense Biceps</span>
//           </dt>
//           <dd>
//             {/* description data */}
//             “You can do that!” or “I feel strong!” Arm with tense biceps. Also
//             used in connection with doing sports, e.g. at the gym.
//           </dd>
//         </div>
//         <div className="term">
//           <dt>
//             <span className="emoji" role="img" aria-label="Tense Biceps">
//               🙏
//             </span>
//             <span>Person With Folded Hands</span>
//           </dt>
//           <dd>
//             Two hands pressed together. Is currently very introverted, saying a
//             prayer, or hoping for enlightenment. Is also used as a “high five”
//             or to say thank you.
//           </dd>
//         </div>
//         <div className="term">
//           <dt>
//             <span className="emoji" role="img" aria-label="Tense Biceps">
//               🤣
//             </span>
//             <span>Rolling On The Floor, Laughing</span>
//           </dt>
//           <dd>
//             This is funny! A smiley face, rolling on the floor, laughing. The
//             face is laughing boundlessly. The emoji version of “rofl“. Stands
//             for „rolling on the floor, laughing“.
//           </dd>
//         </div>
//       </dl>
//     </div>
//   );
// }

// export default App;







