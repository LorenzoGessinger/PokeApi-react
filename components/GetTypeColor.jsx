export const GetTypeColor = (type) => {
    switch(type) {
      case "water":
        return "rgb(21, 82, 228)";
      
      case "bug":
        return "rgb(29, 77, 38)";

      case "fire":
        return "rgb(172, 32, 36)";
      
      case "grass":
        return "rgb(21, 124, 62)";
       
      case "poison":
        return "rgb(91, 44, 139)";  

      case "flying": 
        return "rgb(75, 103, 128)";
        
      case "normal":
        return "rgb(117, 83, 92)";
        
      case "ground":
        return "rgb(173, 110, 45)";  
      
      case "fairy":
        return "rgb(149, 26, 68)";
        
      case "psychic":
        return "rgb(167, 42, 110)";
       
      case "rock":
        return "rgb(72, 25, 14)"; 
        
      case "dragon":
        return "rgb(66, 140, 149)";

      case "ice":
        return "rgb(135, 209, 243)";

      case "steel":
        return "rgb(95, 117, 109)";

      case "electric": 
        return "rgb(204, 119, 34)";

      case "ghost":
        return "rgb(51, 50, 106)";

      case "dark":
        return "rgb(4, 7, 6)";

      case "fighting":
        return "rgb(157, 63, 38)";

      default:
        "black"

    }
  }