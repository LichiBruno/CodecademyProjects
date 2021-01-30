// fill this with the desired values
const getSleepHours = day => {
  if (day === 'monday'){
    return 9;
  } else if (day === 'tuesday'){
    return 5;
  } else if (day === 'wednesday'){
    return 3;
  } else if (day === 'thursday'){
    return 11;
  } else if (day === 'friday'){
    return 6;
  } else if (day === 'saturday'){
    return 10;
  } else if (day === 'sunday'){
    return 4;
  }
};

const getActualSleepHours = () =>
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
 
console.log(getActualSleepHours())


// fill this with the desired values
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};
console.log(getIdealSleepHours())

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours){
    console.log('dormiste bien pibe');
  } else if (actualSleepHours > idealSleepHours){
    console.log('dormiste una banda, te pasaste por ' + (idealSleepHours - actualSleepHours))
  } else if (actualSleepHours < idealSleepHours){
    console.log('andá a dormir, pareces un cadaver. Te faltaron ' + (idealSleepHours - actualSleepHours) + ' horas de sueño')
  }
};

calculateSleepDebt('sunday')