function formatTime(time) {
    let [hours,minutes] = time.split(":"); 
    let hour = (Number(hours) % 12);
    hour = hour === 0 ? 12 : hour;
    return String(hour).padStart(2,"0") + ":" + minutes.padStart(2,"0") + " " + (Number(hours) < 12 ? "AM" : "PM"); 
}

export function dateTimeFormat(dateObj) {
   const [day,month,date,year,time] = dateObj.toString().split(" ");
   const currDate = new Date();

   let result = formatTime(time);

   const dayMilli = 24 * 60 * 60 * 1000; // 1 days
   const weekMilli = 7 * dayMilli; // 7 days

   const deltaTime = currDate - dateObj;
  
   if (deltaTime > weekMilli) result = `${month} ${day}, ${year}, ${result}`;
   else if (deltaTime > dayMilli) result = `${day} ${result}`;

   return result;
}


export function stringLimitter(string,length) {
   return string.slice(0,length) + "..."; 
}
