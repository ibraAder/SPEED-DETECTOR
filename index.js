function calculate_points(speed){
    let Dempoints=0;
    Dempoints=(speed-70)/5;
    return Dempoints;
  }
  
  function speed() {
    let speed = parseInt(document.getElementById("speed").value); // get the input value and convert it to an integer
    let points;
  
    if (speed  <= 70) {
      points = "OK";
    } else {
      let Dempoints = calculate_points(speed);
      if (Dempoints > 11){
        points = "License suspended";
      } else {
        points = Dempoints.toFixed(1);
      }
    }
  
    document.getElementById("points").value = points; // set the value of the output field
  }
  